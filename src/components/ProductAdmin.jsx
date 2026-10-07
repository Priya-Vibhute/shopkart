import { act, useEffect, useReducer, useState } from "react";

function ProductAdmin() {
  // change
  const reducer = (prevState, action) => {
    switch (action.type) {
      case "FETCH":
        return action.payload;
      case "DELETE":
        return prevState.filter((p) => action.payload != p.id);
    }
  };
  const [products, dispatch] = useReducer(reducer, null); //change 2

  const [searchTerm,setSearchTerm]=useState("")

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      dispatch({ type: "FETCH", payload: data.products }); // change 1
    } catch (error) {}
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>

    <h1>{searchTerm}</h1>

    <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
    <button className="btn btn-primary">Search</button>

    <hr />
      {products ? (
        <>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            {products.map((p) => (
              <div class="col">
                <div class="card">
                  <img src={p.images[0]} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">
                      {" "}
                      {p.id} {p.title}
                    </h5>
                    <p class="card-text">{p.description}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch({ type: "DELETE", payload: p.id })
                      }
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading .....................</p>
      )}
    </>
  );
}
export default ProductAdmin;

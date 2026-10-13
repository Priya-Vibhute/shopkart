import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../LoginContext";
import { Link, useSearchParams } from "react-router-dom";

function Product() {

  
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");// change 1

      const data = await response.json();
      setProducts(data); // change 2
    } catch (error) {}
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products ? (
        <>

       
          <div class="row row-cols-1 row-cols-md-4 g-4">
            {products.map((p) => (
              <div class="col">
                <div class="card">
                  <img src={p.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{p.id} {p.title}</h5>
                    <p class="card-text">{p.description}</p>
                    <Link className="btn btn-primary" to={`/products/detail/${p.id}`}>View detail</Link>
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
export default Product;

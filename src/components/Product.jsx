import { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
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
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">{p.description}</p>
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

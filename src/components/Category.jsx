import React from "react";

function Category({id,name}) {
  return <div className="bg-warning m-3">

      <p>Category id is {id}</p>
      <p>Category name is {name}</p>
      <p>Descripton : Contains laptops and other electronics</p>

  </div>;
}

export default Category;

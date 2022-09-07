import React, { useState } from "react";


function Item({ name, category }) {
  const [added, setAdded] = useState(false)

  function toggleAdded() {
    setAdded (!added)
   }

  return (
    <li className={added ? "in-cart" : "out-of-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleAdded} className="add"> {added ? "Remove from cart!" : "Add to cart!"}</button>
    </li>
  );
}

export default Item;

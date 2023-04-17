import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const liClass = isInCart ? "in-cart" : null;
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart"

  function handleClick() {
    setIsInCart(!isInCart)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;

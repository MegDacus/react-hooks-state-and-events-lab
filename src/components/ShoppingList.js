import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

 function handleChange (e) {
    setSelectedCategory(e.target.value);
  }
  
function displayItems() {
  return items.map((item) => ( item.category === selectedCategory || selectedCategory === "All" ? 
    <Item key={item.id} name={item.name} category={item.category} /> : null
    ))

  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
       {displayItems()}
      </ul>
    </div>
  );
}

export default ShoppingList;

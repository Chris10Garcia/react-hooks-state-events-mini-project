import React from "react";

function CategoryFilter({categories, handleFilter}) {
  const categoriesElements = categories.map(element => {
    return (
      <button key = {element} name = {element} onClick = {handleClick}>{element}</button>
    )
  })
  
  function handleClick(event){
    
    event.target.parentNode.querySelectorAll('button').forEach(element => element.className = "")
    event.target.className = "selected"
    
    handleFilter(event)

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesElements}
    </div>
  );
}

export default CategoryFilter;

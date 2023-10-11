import React  from "react";
import Category from "./Category.js"

function CategoryFilter({categories, handleFilter}) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
      <Category key={category} category={category} handleFilter={handleFilter}/>
      )) }

    </div>
  );
}

export default CategoryFilter;


//why .map and not .forEach?
//on the .map - why is in surrounded by () not {}
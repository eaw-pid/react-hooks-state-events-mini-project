import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  // const newCategories=categories.shift()
  // console.log(categories)
  
  const [details, setDetails] = useState("")
  const[category, setCategory] = useState("")

  function handleDetailChange(event) {
    setDetails(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask= {
      text: details,
      category: category,
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
              <option key=""></option>
              <option key={categories[1]}>{categories[1]}</option>
              <option key={categories[2]}>{categories[2]}</option>
              <option key={categories[3]}>{categories[3]}</option>
              <option key={categories[4]}>{categories[4]}</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

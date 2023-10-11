import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

//INITIALIZE STATE TO ARRAY OF CATEGORIES/TASKS
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState(CATEGORIES)
  //console.log(category)
  

function handleDeleteTask(deletedTask) {
  const filteredTasks = tasks.filter(task => task.text !== deletedTask.text)
  setTasks(filteredTasks)
  //state that we're passing down to render this list of tasks will no longer include the one we deleted
}

//function to update state to include new task:
function onTaskFormSubmit(newTask) {
  console.log(newTask)
  setTasks([...tasks, newTask])
}

function handleFilter(category) {
 
  const filteredByCategory = tasks.filter(task => {
    if (category === "All") return true ;
      return task.category === category
      
  })
  setTasks(filteredByCategory)
  
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={category} handleFilter={handleFilter}/>
      <NewTaskForm categories={category} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

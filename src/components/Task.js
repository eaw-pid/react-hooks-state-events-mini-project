import React from "react";


function Task({task, text, category, handleDeleteTask}) {

    function handleDelete() {
      handleDeleteTask(task)
    }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
        onClick={handleDelete} 
        className="delete">X</button>
    </div>
  );
}

export default Task;

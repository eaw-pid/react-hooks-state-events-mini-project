import React, {useState} from "react";
import Task from "./Task.js"



function TaskList({tasks, handleDeleteTask}) {


  return (
    <div className="tasks">
      {tasks.map((task) => (
          <Task handleDeleteTask={handleDeleteTask} task={task} text={task.text} category={task.category} key={task.text}/>
        ))}
    </div>
  );
}

export default TaskList;

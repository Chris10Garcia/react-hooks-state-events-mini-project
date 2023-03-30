import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  const taskComponent = tasks.map(obj => {
    return(
      <Task 
            text = {obj.text} 
            category = {obj.category} 
            key = {obj.text} 
            handleDelete = {handleDelete}
      />
    )
  })

  return (
    <div className="tasks">
      {taskComponent}
    </div>
  );
}

export default TaskList;

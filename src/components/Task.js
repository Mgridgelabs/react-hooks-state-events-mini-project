import React from "react";

function Task({ task, text, category, onDeleteTask }) {
  const taskText = task ? task.text : text;
  const taskCategory = task ? task.category : category;
  
  return (
    <div className="task">
       {taskCategory && <div>{taskCategory}</div>}
       <div>{taskText}</div>
      <button className="delete" onClick={() => onDeleteTask(task.text)}>X</button>
    </div>
  );
}

export default Task;

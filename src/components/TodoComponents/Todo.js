import React from "react";

function Todo(props) {
    return (
        <div>
        <h1>{props.name}</h1>
        <p>{props.completed}</p>
      
        </div>
    )
}

export default Todo;
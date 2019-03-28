// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    
  };
render() {
    return (
        <div >
          
            {this.props.taskList.map(listItem => {
                return <Todo key={listItem.id} task={listItem}/>
                   
                
            })}
       
        </div>
    )
    
    }
}
export default TodoList;

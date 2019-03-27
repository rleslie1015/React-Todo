// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm"
//step 1 write the class step2 extend
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
        list: [
        {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
    ]
  };
}
render() {
    console.log(this.state);
    return (
        <div>
          
            {this.state.list.map(listItem => {
                return (<div>
                    {listItem.task}
                </div>)
            })}
            <TodoForm />
        </div>
    )
    
    }
}
export default TodoList;

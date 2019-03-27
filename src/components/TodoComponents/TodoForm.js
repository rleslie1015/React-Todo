import React from "react";
import AddTodo from "./AddTodo";
import ClearCompleted from "./ClearCompleted";

class TodoForm extends React.Component {
    constructor () {
        super();
        this.state = {
            task: "",
            id: Date.now(),
            completed: false,
        };
    }
    changeHandler = event => {
        this.setState({[event.target.task]: event.target.value});
      };

render() {
    return (
        <div>
        <form onSubmit={this.changeHandler}>
            <input 
            type="text" 
            placeholder="Thing To Do"
            task={this.state.task}
            onChange = {this.changeHandler}
            />
            <AddTodo />
        <ClearCompleted />
        </form>

        </div>

    )

}
}

export default TodoForm;
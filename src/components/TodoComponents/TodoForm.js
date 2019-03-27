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
<form>
    <input type="text" {...this.state.task}/>

</form>
<AddTodo />
<ClearCompleted />
        </div>

    )

}
}

export default TodoForm;
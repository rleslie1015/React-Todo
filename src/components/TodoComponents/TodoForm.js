import React from "react";


class TodoForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            task: "",
            id: Date.now(),
            completed: false,
        };
    }
    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
        console.log(event, event.target, event.target.value)
      };

render() {
    return (
        <div>
        <form onSubmit={(event)=>this.props.updateTodoList(event, this.state.task)}>
            <input 

            type="text" 
            placeholder="Thing To Do"
            name={"task"}
            value={this.state.task}
            onChange={this.changeHandler}
            />
             <button type="submit">Add Todo</button>
          
        </form>
        <button>clear</button>

        </div>

    )

}
}

export default TodoForm;
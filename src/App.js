import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {

  constructor () {
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
  }
}

updateTodoList = (event, task) => {
  
  event.preventDefault();
  const newTask = {
    task: task,
    id: Date.now(),
    completed: false
  }
  this.setState({
    list:[...this.state.list, newTask]
  })
  console.log(newTask);
}
  render() {
    return (
      <div>
        <h1>Todo List MVP:</h1>
        <TodoList taskList={this.state.list}/>
        <TodoForm updateTodoList={this.updateTodoList} />
      </div>
    );
  }
}

export default App;

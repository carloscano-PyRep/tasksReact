import './App.css';
import React from 'react';
import logo from './logo.svg';
import todos from './components/task.json';
import Todoform  from './components/Todoform.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos
    }
  }
  render(){
  const todos =  this.state.todos.map((todo) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4" key={todo.number}>
          <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge text-bg-danger ml-2">
              {todo.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <p><mark>{todo.responsible}</mark></p>
          </div>
        </div>
        </div>
      )
    })
    return(
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">Tasks
            <span className="badge rounded-pill text-bg-light">
              {this.state.todos.length}
              </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
          <Todoform/>
          {todos}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo"></img>
      </div>
    );
  };
}
export default App;

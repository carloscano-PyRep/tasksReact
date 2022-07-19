import './App.css';
import React from 'react';
/* import logo from './logo.svg'; */
import todos from './components/task.json';
import Todoform from './components/Todoform.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  };
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  };
  removeTodo(index) {
    if (window.confirm('Estas seguro de querer eliminalo?')) {
      console.log(index);
      this.setState({
        todos: [...this.state.todos.filter((e, i) => {
          return i !== index
        }
        )
        ]
      }
      )
    }

  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4" key={todo.number}>
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge text-bg-warning ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>Eliminar</button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <span className="text-white">Lista de tareas
            <span className="badge rounded-pill text-bg-light">
              {this.state.todos.length}
            </span>
          </span>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <Todoform onAddTodo={this.handleAddTodo} />
            {todos}
          </div>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo"></img> */}
      </div>
    );
  };
}
export default App;

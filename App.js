import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Renew driving licence',
        completed: false
      },

      {
        id: uuid.v4(),
        title: 'S.Lessons start',
        completed: false
      },

      {
        id: uuid.v4(),
        title: 'Update C.V. + ask re: references',
        completed: false
      },

      {
        id: uuid.v4(),
        title: 'Ring Intreo re: appointment for course, let Andre know start date.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Print/Save Java Badge, join LinkedIn/other',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Medical Card',
        completed: false
      }
    ]
  }

  // Toggle complete.
  markComplete = (id) => {
    this.setState ({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }) });
  }

  // delete Todo
  // copy everything that is already there using the spread operator '...'.
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }


  // add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {

     return (
       <Router>
         <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props => (
        <React.Fragment>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo} /> 
        </React.Fragment>
      )} />
      
      <Route path="/about" component={About} />
      </div>
      </div>
       </Router>
      
    );
  }
}

export default App;
 
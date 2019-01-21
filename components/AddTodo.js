import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
      title: ''
  }
 
  onSubmit = (e) => {
      // prevents default submission action
      e.preventDefault();
      this.props.addTodo(this.state.title);
      // clears field after submission
      this.setState({title: ''});
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  
  render() {
    return (

        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input type="text" 
            style={{flex: '10', padding: '12px'}}
            name="title" 
            placeholder="Add ToDo"
            value={this.state.title}
            onChange={this.onChange}
            ></input>
            
            <input type="submit"
            
            value="submit"
            className="btn"
            style={{flex: '1', padding: '12px'}}>
            </input>
        </form>
    )
  }
}

export default AddTodo

import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: 'lightblue',
            padding: '10px',
            borderBottom: '1px grey solid',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

  
  render() {
      const {id, title} = this.props.todo; // de-structuring
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'  '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style = {btnStyle}> Delete </button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.array.isRequired
}

const btnStyle = {background: 'orange', 
color: 'white',
border: 'none',
padding: '5px 10px',
borderRadius: '15%',
cursor: 'pointer',
float: 'right'
}

export default TodoItem

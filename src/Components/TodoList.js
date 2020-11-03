import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

class TodoList extends Component {
    render() {
        const todoItems = this.props.todoItems
        const { deleteTodo } = this.props
        const { editTodo } = this.props
        return (
            <div>
                { todoItems.map(item => {
                    return (
                            <div key={item.id}>
                                <span>
                                    { item.todoItem }
                                </span>
                                <button onClick={() => editTodo(item.id)}>edit</button>
                                <button onClick={() => deleteTodo(item.id)}>delete</button>
                            </div>
                        )
                    }) }
            </div>
        )
    }
}

export default TodoList
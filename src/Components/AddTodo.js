import React, { Component } from 'react'
import TodoList from './TodoList'

import { v4 as uuid } from 'uuid';

class AddTodo extends Component {
    constructor() {
        super()
        this.state = {
            todoItem: '',
            id: '',
            todoItems: []
        }
    }
    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({todoItem : e.target.value})
    }
    onClickHandler = () => {
        console.log('clicked')
        const todoData = {
            id: this.state.id !== '' ? this.state.id : uuid(),
            todoItem: this.state.todoItem
        }
        this.setState({
            todoItems: [...this.state.todoItems, todoData]
        })
    }
    editTodo = (id) => {
        const editTodo = this.state.todoItems.find(item => item.id === id)
        this.setState({
            todoItem: editTodo.todoItem,
            id: id
        })
        const todoItems = this.state.todoItems.filter(item => item.id !== id)
        this.setState({todoItems: todoItems})
    }
    deleteTodo = (id) => {
        const todoItems = this.state.todoItems.filter(item => item.id !== id)
        this.setState({todoItems: todoItems})
    }

    render() {
        return (
            <div>
                <span>Todo Name</span>
                <input type="text" name="todoItem" onChange={this.onChangeHandler} value={this.state.todoItem} />
                <button onClick={this.onClickHandler}>Add Todo</button>
                <TodoList todoItems={this.state.todoItems} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

export default AddTodo
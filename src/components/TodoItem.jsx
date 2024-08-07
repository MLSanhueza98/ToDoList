import React from 'react'

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li
            className={`list-group-item d-flex justify-content-between ${todo.done ? 'text-success': '' }` }
            style={{ backgroundColor: todo.done ? '#d4edda' : 'transparent' }}
        >
            <span
                className={`align-self-center ${ todo.done && 'text-decoration-line-through' } `}
                onClick={ () => onToggleTodo( todo.id ) }
            >
                { todo.description }
            </span>
            <button
                className='btn btn-danger'
                onClick={ () => onDeleteTodo( todo.id ) }
            >
                Delete
            </button>
        </li>
    )
}

export default TodoItem

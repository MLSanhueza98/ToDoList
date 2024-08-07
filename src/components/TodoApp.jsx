import React, { useEffect } from 'react'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import { useTodo } from '../../customHooks/useTodo'



const TodoApp = () => {
    
    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, pendingTodos, todosCount } = useTodo()
    
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])

    return (
        <>
            <h1
                className='d-flex justify-content-between align-items-center'
                >
                ToDo List 
                <small
                    className='blockquote border border-secondary rounded px-2 py-1 text-dark font-12'

                    >
                    Completed: { todosCount } - Pending: { pendingTodos }
                </small>
            </h1>
            
            <hr />  

            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={ todos }
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className='col-5'>
                    <h4> New ToDo </h4>
                    <hr />
                    <TodoAdd onNewToDo={ handleNewTodo } />
                </div>
            </div>

        </>
    )
}

export default TodoApp

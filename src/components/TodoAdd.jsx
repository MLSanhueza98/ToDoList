import React from 'react'
import useForm from '../../customHooks/useForm'

const TodoAdd = ({ onNewToDo }) => {

    const { description, onInputChange, onResetForm } = useForm({
      description: ''
    })
    
  
    const onFormSubmit = ( event ) => {
      event.preventDefault()
  
      if ( description.length <= 1 ) return 
      
      const newTodo = {
        id: new Date().getTime(),
        done: false,
        description,
      }
  
      onNewToDo( newTodo ),
      onResetForm()
  
    }
  
    return (
      <form onSubmit={onFormSubmit}>
        <input 
          type="text" 
          placeholder='What´ll i do?'
          className='form-control'
          name='description'
          value={ description }
          onChange={ onInputChange }
        />
        <button 
          type='submit' 
          className='btn btn-outline-primary mt-2'
        >
          Add
        </button>
      </form>      
    )
}

export default TodoAdd

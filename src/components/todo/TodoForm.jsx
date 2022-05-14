import React from 'react'

const TodoForm = (props) => {

    const {handleSubmit,inputValue,handleChange} = props;

    return (
        <form onSubmit={handleSubmit}>
            <input className='form-control' type="text" placeholder='Ingresa la tarea...' value={inputValue} onChange={handleChange} />
        </form>
    );
};

export default TodoForm
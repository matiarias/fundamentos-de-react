import React, { useState } from 'react'
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';

const TodoList = () => {

    const [inputValue, setInputValue] = useState('');

    const [tareas, setTareas] = useState([]);

    const handleChange = (e) => {

        // console.log(e.target.value);
        setInputValue(e.target.value)
    };

    const handleSubmit = (e) => {

        e.preventDefault()
        setTareas([...tareas, inputValue])
        setInputValue('')
    };

    const deleteTarea = (indice) => {
        const tareasPendientes = [...tareas]
        tareasPendientes.splice(indice,1)
        setTareas(tareasPendientes)

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <h3 className='text-center'>Lista de Tareas</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6 offset-md-3 mt-3">

                    <TodoForm handleSubmit={handleSubmit} inputValue={inputValue} handleChange={handleChange} />

                    {/* <form onSubmit={handleSubmit}>
                        <input className='form-control' type="text" placeholder='Ingresa la tarea...' value={inputValue} onChange={handleChange} />
                    </form> */}

                    <p className='mt-1'>Tareas Pendientes: {tareas.length}</p>

                </div>

                <div className="col-12 col-md-6 offset-md-3 my-3">
                    {tareas.map((tarea, index) => (

                        // *la propiedad key no se puede enviar como props, por eso creamos el props indice

                        <TodoCard key={index} tarea={tarea} deleteTarea={deleteTarea} indice={index} />
                        
                        // <div className="card mb-2" key={index}>
                        //     <div className="card-body d-flex justify-content-between align-items-center">
                        //         <span>{tarea}</span>
                        //         <button onClick={() => deleteTarea(index)} className='btn btn-danger btn-sm'>X</button>
                        //     </div>
                        // </div>

                    ))}

                </div>

            </div>
        </div>
    );
};

export default TodoList
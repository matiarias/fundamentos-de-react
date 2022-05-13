import React from 'react'

const TodoCard = (props) => {

    const {tarea, indice, deleteTarea} = props
    return (
        <div className="card mb-2">
            <div className="card-body d-flex justify-content-between align-items-center">
                <span>{tarea}</span>
                <button onClick={() => deleteTarea(indice)} className='btn btn-danger btn-sm'>X</button>
            </div>
        </div>
    )
}

export default TodoCard
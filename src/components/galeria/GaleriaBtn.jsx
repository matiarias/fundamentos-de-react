import React from 'react'

const GaleriaBtn = (props) => {

    const { indice, backPage, nextPage, galeria } = props

    return (
        <>
            <button className='btn btn-secondary me-2' onClick={backPage} disabled={indice === 0 ? true : false}>Anterior</button>
            <button className='btn btn-secondary' onClick={nextPage} disabled={indice + 1 === galeria.length ? true : false}>Siguiente</button>
        </>
    )
}

export default GaleriaBtn
import React from 'react'
import { esculturasList } from '../../datos/galeria'

const Galeria = () => {
    console.log(esculturasList);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Galeria de Arte</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button className='btn btn-secondary me-2'>Anterior</button>
                    <button className='btn btn-secondary'>Siguiente</button>
                </div>
            </div>
        </div>
    )
}

export default Galeria
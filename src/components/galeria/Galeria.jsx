import React, { useState } from 'react'
import { esculturasList } from '../../datos/galeria'
import GaleriaBtn from './GaleriaBtn'
import GaleriaInfo from './GaleriaInfo'

const Galeria = () => {
    const [indice, setIndice] = useState(0)
    const [show, setShow] = useState(false)

    // console.log(esculturasList);

    const galeria = esculturasList;

    // console.log(galeria[indice].name);

    const nextPage = () => {

        if (indice + 1 < galeria.length) {

            setIndice(indice + 1)
        };
    };

    const backPage = () => {

        if (indice > 0) {

            setIndice(indice - 1)
        };
    };

    const moreInfo = () => {

        setShow(!show)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <h1 className='text-center'>Galeria de Arte</h1>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-md-6 offset-md-3 d-flex justify-content-center">
                    {/* <button className='btn btn-secondary me-2' onClick={backPage} disabled={indice === 0 ? true : false}>Anterior</button>
                    <button className='btn btn-secondary' onClick={nextPage} disabled={indice+1 === galeria.length ? true : false}>Siguiente</button> */}

                    <GaleriaBtn indice={indice} backPage={backPage} nextPage={nextPage} galeria={galeria} />
                </div>
            </div>

            <div className="row my-4">
                <div className="col-12 col-md-8 offset-md-2">

                    <GaleriaInfo indice={indice} galeria={galeria} show={show} moreInfo={moreInfo} />

                    {/* <h3 className='text-center'>{galeria[indice].name}</h3>
                    <p className='text-center'>{galeria[indice].artist}</p>
                    <div className='mt-2'>
                        <img className='w-100' src={galeria[indice].url} alt={galeria[indice].alt} />
                    </div>

                    <div>
                        <button className='btn btn-success my-2' onClick={moreInfo}> {show === false ? 'Ver más' : 'Ocultar'}</button>

                        {show && <h4>{galeria[indice].description}</h4>}

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Galeria
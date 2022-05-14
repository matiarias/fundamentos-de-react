import React from 'react'

const GaleriaInfo = (props) => {

    const { galeria, indice, show, moreInfo } = props;

    return (
        <>
            <h3 className='text-center'>{galeria[indice].name}</h3>
            <p className='text-center'>{galeria[indice].artist}</p>
            <div className='mt-2'>
                <img className='w-100' src={galeria[indice].url} alt={galeria[indice].alt} />
            </div>

            <div>
                <button className='btn btn-success my-2' onClick={moreInfo}> {show === false ? 'Ver más' : 'Ocultar'}</button>

                {show && <h4>{galeria[indice].description}</h4>}

            </div>
        </>
    )
}

export default GaleriaInfo
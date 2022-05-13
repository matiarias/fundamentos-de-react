// atajo para cargar la estructura completa de un componente (rafce)

import React from 'react'

const Mensaje = (props) => {

    const {dato} = props

    // console.log(dato);

    return (
        <div>
            <h3>Hola soy {dato}!</h3>

        </div>
    )
}

export default Mensaje;

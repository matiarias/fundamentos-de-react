import React, { useEffect } from 'react'

const Message = () => {

    useEffect(() => {
        console.log('componente montado');


        return () => {
            console.log('componente desmontado');
        }
    }, [])



    return (
        <div className="mt-3">
            <div className="alert alert-info" role="alert">
                Gracias por aceptar los términos y condiciones
            </div>
        </div>
    )
};

export default Message
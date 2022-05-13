import React from 'react'
// import '../css/estilo.css';

const Heroes = (props) => {

    const { heroes } = props;

    // console.log(props);

    const handleClick = (id) => {

        alert(`Tu heroe seleccionado es ${heroes[id].nombre} y pertenece a la editorial ${heroes[id].owner}`)

    };

    return (
        <div>
            <h3>Lista de Heroes!</h3>
            <ul>
                {heroes.map((heroe, index) => (
                    <li key={index} className='lista' onClick={ () => {handleClick(index)}}>
                        {heroe.nombre} - <span style={{
                            color: heroe.owner === 'DC' ? 'green' : 'yellow',
                            fontFamily: 'fantasy',
                            backgroundColor: 'red', 
                            
                        }}
                        >{heroe.owner}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Heroes

// cuando vamos a renderizar una lista con un map, necesitamos una llave unica para cada item, por ej un id si es que ya lo tenemos y si no utilizamos el index de la propiedad map.

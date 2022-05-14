import React from "react";
import Galeria from "./components/galeria/Galeria";

// import TodoList from "./components/todo/TodoList";

// import Mensaje from "./components/Mensaje";
// import Heroes from "./components/Heroes";
// import { heroes } from "./datos/datos"

const App = () => {

    // *codigo javascript

    // console.log(heroes);
    // const nombre = 'Matias';

    return (
        // renderizar o mostrar en el navegador (jsx)
        // siempre tenemos que renderizar un solo elemento, por eso los encerramos en un div.

        <div>
            {/* <h1>Soy un componente!</h1> */}
            {/* <Mensaje dato={nombre} /> */}
            {/* <Heroes heroes = {heroes} /> */}

            <Galeria />
            
            {/* <TodoList /> */}
        </div>
    )
};

export default App;
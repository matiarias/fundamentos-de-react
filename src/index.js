import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./css/estilo.css";

import App from "./App";
// import UserContainer from "./components/UserContainer"
// import Counter from "./components/Counter"

// const elemento = <h1>Hola React!</h1>

const contenedor = document.querySelector("#root");

ReactDOM.render(<App />, contenedor);

// como buena practica en el index.js solo renderizamos un solo componente. el componente padre, en este caso, el componente App.

// * ------------------- Desestructuración de objetos y arreglos ----------------------

// const pokemones = ['pikachu', 'charizar', 'squirtle'];
// console.log(pokemones[1]);

// const [poke1, poke2, poke3] = pokemones;
// console.log(poke1, poke2);

// const entrenador = {
//   nombre: 'Ash Ketchum',
//   edad: '12',
//   pueblo: 'paleta',
//   region: 'kanto',
// };

// console.log(entrenador.edad);

// const { nombre: nombreEntrenador, edad, pueblo } = entrenador;

// console.log(nombreEntrenador, pueblo);

// * ------------------------- arrow function - funciones de flecha -----------------------------

// const elegirPokemon = (opcion) => {
//   switch (opcion) {
//     case "1":
//       alert(`${poke1.toUpperCase()} yo te elijo!!`);
//       break;
//     case "2":
//       alert(`${poke2.toUpperCase()} yo te elijo!!`);
//       break;
//     case "3":
//       alert(`${poke3.toUpperCase()} yo te elijo!!`);
//       break;
//     default:
//       alert("Te faltan más pokemones, atrapalos ya!");
//       break;
//   }
// };

// elegirPokemon(prompt("Elije una opción"));

// -----------------------------------------------------------

/*
 ?cuando utilizamos una funcion de flecha y tenemos un solo valor que retornar con un return, podemos usar el return inplicito, podemos quitar el return y quitar las llaves de la funcion de flecha que contiene el contenido y seguiria funcionando igual, sin necedidad de utilizar un return ya que es un solo valor.
*/

// const saludarEntrenador = () =>

//   `Hola, soy ${nombreEntrenador} del pueblo ${pueblo}, tengo ${edad} años y me convertiré en el mejor entrenador pokemon`;

// console.log(saludarEntrenador());

// ---------------------------------------------------------------------

// ? si queremos simplificar dentro de una funcion de flecha un objeto, agregamos los parentesis antes de las llaves y ahi la funcion entiende que hay un return inplicito.

// const presentarMaestro = () => ({
//   nombre: nombreEntrenador,
//   edad: edad,
//   pueblo: pueblo,
// });

// console.log(presentarMaestro());

// * ------------------------------------ operador ternario -------------------------------------

// const pokebola = true;

// const evaluarPokebola = () => {

//   if (pokebola) {

//     return 'Atrapaste un pokemón'

//   } else {

//     return 'El pokemon se te escapo'
//   }

//   return pokebola ? 'Atrapaste un pokemón' : 'El pokemon se te escapo';

//   return pokebola && 'Atrapaste un pokemón';
// };

// console.log(evaluarPokebola());

// --------------------------------------------------------------------------------------------------

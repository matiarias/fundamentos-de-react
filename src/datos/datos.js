export const heroes = [
    { id: 1, nombre: "Spiderman", owner: "Marvel" },
    { id: 2, nombre: "Superman", owner: "DC" },
    { id: 3, nombre: "Linterna Verde", owner: "DC" },
    { id: 4, nombre: "Wolverine", owner: "Marvel" },
    { id: 5, nombre: "Batman", owner: "DC" },
    { id: 6, nombre: "Thor", owner: "DC" },
];

// al poner la palabra export adelante del arreglo, significa que lo podemos importar en cualquier lado de nuestra aplicación. en este caso puede ser en el componente padre App, vamos a traer este arreglo de objetos.

// cuando usamos la palabra export al momento de importarlo, para traerlo tiene que estar entre llaves el nombre del arreglo en este caso, entonces heroes iria dentro de llaves.
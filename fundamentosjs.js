// Var vs let vs const
/** 
var  edad = 30
var  edad = 10
console-console.log(edad)

let edad2 = 20
//let edad = 20 
console.log(edad2)

let edad3 = 50
edad3 = 40
console.log(edad3)

const edad4 = 50
edad 4 = 30
**/

// scope de var, let y const
/** 
var edad = 10;
if(true) {
  var edad = 20;
  console.log(edad)
}
console.log(edad)
**/
/** 
let edad = 10;
if (true) {
  let edad = 20;
  console.log(edad);
}
console.log(edad);
**/
/** 
const edad = 10;
if(true) {
  const edad = 20;
  console.log(edad)
}
console.log(edad)
**/
/** 
var edades = [10,40,50];
var edades = [20,40,60];
console.log(edades);
**/
/** 
let edades = [10,40,50];
edades = [20,40,60];
console.log(edades);
**/


const edades = [10, 40, 50];
edades.push(60)
console.log(edades);


const persona = {
  nombre: "daniel",
  apellido: "reyes",
  edad: "22"

}
persona.nombre = "dario"
persona.apellido = "guerra"
persona.edad = 34
console.log(persona);

//Promesa
/*
fetch("https://rickandmortyapi.com/api/character")
.then((res => res.json())
.then((data) => {
  data.results.forEach((element) => {
console.log(element);
  });
});
*/

const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    const results = await data.results;
    const personajesMujeres = results.filter(p => p.gender === 'female');
    console.log(personajesMujeres);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();

//Objeto literal

const persona = {
  nombre: "roberto",
  apellido: "morales",
  edad: 32,
  direccion: {
    ciudad: "barranquilla",
    pais: "colombia"
  }
};
console.log(persona);

const persona2 = { ...persona };

persona2.nombre = "carlos";
console.log(persona);
console.log(persona2);

//Arreglos

const arreglo = [1, 2, 3, 4];
const arreglo2 = [...arreglo, 100];

arreglo[0] = 50;

//console.log(arreglo);
//console.log(arreglo2);

const a = new Array(100);
//console.log(a);

//Funcion map

console.log("antes del map" + arreglo);
const map = arreglo.map(function () {
  return 5;
});

const map2 = arreglo.map(() => {
  return 5;
});

const map3 = arreglo.map(() => 5);
const arreglo3 = [1, 2, 3, 4];
const map4 = arreglo.map(() => 5);

console.log(map);
console.log("despues del map: " + map4);

//Crear un array que dado un array inicial regrese
//la multiplicacion de sus elementos por 2

const arreglo4 = [1, 2, 3, 4];

const respuesta = arreglo4.map((item) => item * 2);
console.log("arreglo inicial:" + arreglo4);
console.log("respuesta:" + respuesta);

//Funcion find
//find solo te regresa un solo elemento

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// expected output: 12

//Funcion filter
//esta te regresa todos los elementos
const array2 = [5, 12, 8, 130, 44];

const filter = array2.filter((element) => element > 10);

console.log(filter);
// expected output: [12, 130, 44]

//Operador ternario
function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"

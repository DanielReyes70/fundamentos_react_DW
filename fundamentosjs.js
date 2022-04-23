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

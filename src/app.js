import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const numRandom = (arr) => {    //funcion para generar numero aletorio segun el largo del array
  return Math.floor(Math.random() * arr.length)
}


const valueString = (arr) => { // funcion para obtener el string segun la posicion retornada de numRandom
  return arr[numRandom(arr)]
}


const excuseGenerator = () => { // funcion para concatenar los string devueltos de valueString
  let d = document
  return d.getElementById("excuse").innerHTML = ` ${valueString(who)}  ${valueString(action)}  ${valueString(what)}  ${valueString(when)} ` // insertamos en el div del html con el id excuse, la exusa generada
}


window.onload = function () {
  //write your code here
 excuseGenerator() //se llama a la funcion en cada recarga de la pagina para generar una nueva excusa.

};



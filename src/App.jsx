import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navbar,Row, Col, Image, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/javascript.svg'
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {


  function AppNavbar() {
 
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
        <a href="#" target="_blank">
          <img src="vite.svg" className="logo" alt="Vite logo" />
        </a>
          <Navbar.Brand href="#">CodeHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#"><i className="bi bi-filetype-html" style={{color:'orange'}}></i>Html</Nav.Link>
              <Nav.Link href="#"><i className="bi bi-filetype-css" style={{color:'blue'}}></i>Css</Nav.Link>
              <Nav.Link href="#"><i className="bi bi-filetype-js" style={{color:'yellow'}}></i>JavaScript</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  const Bodys = () => {
    const [javascriptColor, setJavascriptColor] = useState('transparent');
    const [cssColor, setCssColor] = useState('transparent');
    const [htmlColor, setHtmlColor] = useState('transparent');
    

    const [selectedOption, setSelectedOption] = useState('Clase 1');
    const options = [
      {
        name: 'Clase 1',
        code: `
// 1. Declarar una variable de nombre ?auto?, asignarle el valor ?Corolla? y mostrarla por
// consola*.
var auto= "Corolla";
console.log(typeof(auto))
console.log(auto)
// 2. Asignarle el valor ?308? a la variable declarada en el ejercicio anterior y mostrarla por
// consola.
auto=308;
console.log(typeof(auto))
console.log(auto)
// 3. A la misma variable de los ejercicios anteriores, asignarle el valor ?C4?. Volver a
// mostrarla por consola.
auto="C4";
console.log(typeof(auto))
console.log(auto)
// 4. Declarar dos variables ?nombre? y ?apellido?, asignarles tu nombre y apellido. Luego
// mostrar por consola ambos valores. Usar un solo console.log( )
var nombre="Frank";
var apellido="Urdaneta";
console.log(nombre , apellido)
// 5. Dada una variable llamada ?fruta? con el valor ?naranja?. Declarar una variable
// ?tipoDeLaVariableFruta? y asignarle como valor el tipo de la variable ?fruta?. **
var fruta="naranja";
var tipoDeLaVariableFruta=fruta
console.log(tipoDeLaVariableFruta)
// 6. Para los ejercicios 1, 2 y 3, mostrar por consola el tipo de la variable en cada nueva
// asignación.
        `,
      },
      {
        name: 'Clase 3',
        code: `
          
// Guía de ejercicios
// 1. Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
// usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
// que es. *
function MostrarConsola(dato){
    return typeof(dato)
}
console.log(MostrarConsola(2))
// 2. Dado dos números ingresados por el usua1rio, se pide realizar una función que
// devuelve la resta de ambos números. Mostrar el resultado por la consola.
function resta(a,b){
    return a-b
}
console.log(resta(8,2))
// 3. Generar una función que le ingresen por parámetro dos valores distintos en dos
// variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
// Pasarlo a a y mostrarlos.
function intercambio(a,b){
    let aux=b
    b=a;
    a=aux;
    return "El valor de a es"+ a+" , el valor de b es "+b
}
console.log(intercambio(5,10))
// 4. Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
// calcular su perímetro, su superficie, e informar los mismos en consola.
function calcularCuadrado(lado){
    return "El perimetro del cuadrado es"+ lado*4+" y la superficie del cuadrado es"+ lado*lado
}
console.log(calcularCuadrado(25))
// 5. Generar una función que dada una temperatura en grados fahrenheit los convierta a
// grados celsius.
function convertir_a_celsius(t){
    return Math.ceil((t-32)*0.5556)
}
console.log(convertir_a_celsius(75))
// 6. Realizar una función que calcule el factorial de un número ingresado por el usuario (el
// número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
// consola.
function factorial(n){
    if(n>10){
        return "El numero no debe ser mayor a 10"
    }else if(n<=0 || n==1){
        return 1
    }else{
        return (n * factorial(n-1))
    }
}
console.log(factorial(5))

// 7. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
// indique si ese texto es un palíndromo. Ejemplo de palíndromo: ?Somos o no somos?.
function palindrome(texto){
    let aux=texto.split("")
    let aux2=aux.map(e=>{
        return e
    })
    aux2.reverse()
    function comparar(t){
    let arrt=""
    for(let i of t){
        if(i!=" "){
            arrt=arrt+i.toLowerCase()
        }
    }
    return arrt
    }
    console.log(comparar(aux)==comparar(aux2))
    return comparar(aux)==comparar(aux2)?"Es palindrome":"No es Palindrome"
    
}
console.log(palindrome("Abcd"))
console.log(palindrome("Somos o no somos"))
// 8. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
// lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
// Javascript.
function mayusYminus(texto){
    return "el texto esn Minus==>"+ texto.toLowerCase()+", el texto en Mayus==> "+texto.toUpperCase()
}
console.log(mayusYminus("creCimosRapido"))
// 9. Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
// calificación resultante según la nota ingresada:
// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 1
// Clase 3- ?Introducción a la Programación Web?
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresalienten
function notaAlumno(n){
    if(n>10 || n<0) return "Debe ingresar una nota entre 1 y 10"
    if(n>=0 && n<=3){
        return "Muy deficiente"
    }else if(n>=4 && n<=5){
        return "Insuficiente"
    }else if(n==6){
        return "Suficiente"
    }else if(n==7){
        return "Bien"
    }else if(n>=8 && n<=9){
        return "Notable"
    }else if(n==10){
        return "Sobresalienten"
    }
}
console.log(notaAlumno(10))
// 10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
// devuelve si ese mes tiene 30 o 31 días.
function diasEnUnMes(mes, año) {
	return new Date(año, mes, 0).getDate();
}
console.log(diasEnUnMes(02,2023))
// 11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
// número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ??
function crearPiramide(n){
    let aux="";
    if(typeof(n)!='number'){
        return "debe ingresar un numero no se aceptan textos"
    }else if(n>10 || n<0){
        return "debe ingresar un numero entre 1 y 10"
    }else{

    for(let i=1;i<=n;i++){
        if(i<=n ){
            aux=aux+" "+i
            console.log(aux)
        }
    }
    }
}
console.log(crearPiramide(6))

// 12. Generar una función donde ingresen dos números, el primero corresponde a la
// cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
// colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
// disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.
function calcularCajas(bultosEnStock, bultosPorCaja) {
    const cajasCompletas = bultosEnStock // bultosPorCaja;
    const bultosSueltos = bultosEnStock % bultosPorCaja;
    console.log("Se pueden llenar"+ cajasCompletas+" cajas completas y quedan"+ bultosSueltos+" bultos sueltos.");
  }
console.log(calcularCajas(5,8))

// 13. Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
// Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
// Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
// través de su código y el script saca el descuento correspondiente por la consola.
function tiendaCoches(auto){
    
const autos={
    fiesta:{
        precio:2000,
        descuento:0.05
    },
    focus:{
        precio:3000,
        descuento:0.10
    }
}

for(let [key, value] of Object.entries(autos)){
    if(key==auto){
        return "El valor del auto"+ auto+" es de "+value.precio+" y tiene un descuento de "+ value.descuento+" , el total a pagar es de "+ (value.precio-value.precio*value.descuento)
    }
}
}
console.log(tiendaCoches("focus"))
        `,
      },
      {
        name: 'Clase 4',
        code: `
          
          <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <link href="ejer4UTN.css" rel="stylesheet" />
    <title>UTN</title>
  </head>
  <style>
    a {
      text-decoration: none;
    }
  </style>
  <body>
    <div class="collapse" id="navbarToggleExternalContent">
      <div
        class="bg-dark p-4"
        style="display: flex; justify-content: space-around"
      >
        <h5 class="text-white h4">
          <a href="https://www.lanacion.com.ar/recetas/" target="_blank">
            Mas recetas</a
          >
        </h5>
        <a href="#" class="text-muted"> Contactanos.</a>
        <span><i class="bi bi-facebook" style="color: #fafafa"></i></span>
        <i class="bi bi-instagram" style="color: #fafafa"></i>
        <a
          href="https://www.linkedin.com/in/martin-urdaneta-47a349209/"
          target="_blank"
          ><i class="bi bi-linkedin" style="color: #fafafa"></i
        ></a>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <div class="container">
      <h1 style="display: flex; justify-content: center; position: absolute">
        La cocina de JavaScript
      </h1>
    </div>

    <img style="max-width: 100%" src="javascript-banner.jpeg" />
    <div class="container">
      <p>
        <em>Receta para principiantes en JavaScript</em>: Cálculo del promedio
        Esta receta te ayudará a entender los conceptos básicos de variables,
        operadores y funciones en JavaScript. El objetivo de esta receta es
        calcular el promedio de un conjunto de números ingresados por el
        usuario.
      </p>
      <ol>
        <li>
          Paso 1: Crear un archivo HTML y un archivo JS Crea un archivo HTML y
          un archivo JS para empezar a trabajar. En el archivo HTML, agrega un
          campo de entrada para que el usuario pueda ingresar los números y un
          botón para que el usuario pueda enviar los números ingresados. En el
          archivo JS, escribirás el código que procesará los números ingresados
          y calculará el promedio.
        </li>
        <li>
          Paso 2: Crear una función para calcular el promedio En el archivo JS,
          crea una función que calcule el promedio de un conjunto de números.
          Esta función debe tomar un parámetro que represente un conjunto de
          números y devolver el promedio. function calcularPromedio(numeros) {
          var total = 0; for(var i = 0; i < numeros.length; i++) { total +=
          numeros[i]; } return total / numeros.length; }
        </li>
        <li>
          Paso 3: Agregar un evento al botón En el archivo JS, agrega un evento
          al botón que escuche cuando el usuario haga clic en él. Cuando el
          usuario hace clic en el botón, debes recuperar los números ingresados
          por el usuario y llamar a la función que calcula el promedio. Luego,
          debes mostrar el resultado en la pantalla.
          document.getElementById("boton-calcular").addEventListener("click",
          function() { var numeros =
          document.getElementById("numeros").value.split(","); var promedio =
          calcularPromedio(numeros);
          document.getElementById("resultado").innerHTML = "El promedio es: " +
          promedio; });
        </li>
        <li>
          Paso 4: Probar el código Abre el archivo HTML en un navegador y prueba
          el código. Ingresa un conjunto de números separados por comas y haz
          clic en el botón. Deberías ver el resultado del promedio en la
          pantalla.
        </li>
      </ol>
      <p>
        ¡Y eso es todo! Espero que esta receta te haya ayudado a entender los
        conceptos básicos de JavaScript. ¡Buena suerte en tus aventuras en la
        programación!
      </p>
    </div>
    <div
      class="navbar navbar-expand-lg navbar-light bg-dark"
      style="justify-content: center; color: #fafafa"
    >
      <ul class="navbar-nav mr-auto mt-2 mt-md-0">
        <li class="nav-item active">
          <a class="navbar-brand" href="#navbarToggleExternalContent"
            ><i class="bi bi-house" style="color: #fafafa"></i
          ></a>
        </li>
        <li class="nav-item active">
          <p>@Copyrigth</p>
        </li>
        <li class="nav-item active">
          <p>Todos los derechos reservados</p>
        </li>
      </ul>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
            
        `,
      },
      {
        name: 'Clase 5',
        code: `
          //Archivo Html
          <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>convertirDolaresaPesos</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
  </head>
  <body>
    <div class="container">
      <form>
        <h2>Convertidor</h2>
        <label>Ingrese un monto</label>
        <input type="number" id="dolar_a_pesos" />
        <div style="color: red" id="resultado"></div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            Dolar a Pesos
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            Pesos a Dolar
          </label>
        </div>
      </form>
      <button class="btn btn-primary" onclick="dolarApesos()">Calcular</button>
    </div>
    <hr />
    <div class="container">
      <form>
        <h2>Convertidor de grados centigrados a farenheit</h2>
        <label>Ingrese la temperatura en grados centigrados</label>
        <input type="number" id="grados" />
        <div id="result_grados"></div>
      </form>
      <button onclick="centigrado_a_faren()" class="btn btn-success">
        Calcular
      </button>
    </div>
    <hr />
    <div>
      <form>
        <h2>Envio de caja de carton</h2>
        <select id="tamano">
          <option value="default">Tamaño de caja</option>
          <option value="chica">Pequeña</option>
          <option value="mediana">Mediana</option>
          <option value="grande">Grande</option>
        </select>
        <select id="peso">
          <option value="default">Peso de caja</option>
          <option value="hasta20kg">Hasta 20 Kg</option>
          <option value="hasta50kg">Hasta 50 Kg</option>
          <option value="hasta100kg">Hasta 100 Kg</option>
        </select>
        <select id="seguro">
          <option value="default">seguro de caja</option>
          <option value="hasta20USD">Hasta 20 Usd</option>
          <option value="hasta50USD">Hasta 50 Usd</option>
          <option value="hasta100USD">Hasta 100 Usd</option>
        </select>
        <div id="result_caja"></div>
      </form>
      <button class="btn btn-outline-success mt-2" onclick="enviar_paquete()">
        Enviar
      </button>
    </div>
    <br />
    <hr />
    <div class="container">
      <form>
        <h2>Adivina el Numero</h2>
        <label>hay un numero aleatorio entre el 0 y 5, intenta adivinar</label>
        <input id="adivinar" placeholder="ingresa un numero del 1 al 5" />
        <div id="responder"></div>
      </form>
      <button id="btn" class="btn btn-danger">Adivina</button>
    </div>
    <hr />
    <div class="container">
      <h2>Agregar Personas</h2>
      <input placeholder="Ingrese un nombre" type="text" id="input_persona" />
      <button onclick="agrega_persona()" class="btn btn-outline-dark">
        Agregar
      </button>
      <div>
        <ul id="personas"></ul>
      </div>
    </div>
    <script src="ejer5UTN.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
            //Archivo Js
            // Clase 5- ?Introducción a la Programación Web?
// Arrays y DOM
// Guía de ejercicios
// 1. Crea un array que contenga el nombre de cinco colores escritos como strings.
let colores=['Amarillo','Azul','Rojo','Blanco','Rosa'];
// 2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
let color3=colores[2]
// 3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
// ejercicio 1.
console.log(colores[0][0])
// 4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
// función Math.random().
function random(max,min){
    return Math.floor(Math.random()*(min-max))
}
console.log(random(1,99))
// 5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
let numeros=[]
for(let i=1;i<=10;i++){
    numeros.push(i)
}
console.log(numeros)
// 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
let numerosAl=[]
for(let i=1;i<=10;i++){
    numerosAl.push(Math.floor(Math.random()*(10)))
}
console.log(numerosAl)
// 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
// consola.
let copia=[...numerosAl]
console.log(copia)
// 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra ?cancelar?.
// Al salir con ?cancelar? deben mostrarse todas las cadenas concatenadas con un guión
// medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
// luego recorriendolo para mostrar el resultado deseado del ejercicio.
// let buscar=''
// let palabras='';
// while(buscar!='cancelar'){
//     buscar=prompt('ingrese una palabra')
//     if(buscar!='cancelar'){
//         palabras=palabras+"-"+buscar
//     }
// }
// console.log(palabras)
// 9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
// convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
// Mostrar el resultado elemento de html.
// 10. Generar la inversa del ejercicio anterior (de pesos a dólares).
function dolarApesos(){
    let dolar=300;
    let pesos=document.getElementById('dolar_a_pesos').value
    
    // Seleccionar el botón de radio seleccionado
    var radioButton = document.querySelector('input[name="exampleRadios"]:checked');
    // Obtener el valor del botón de radio seleccionado
    var valorSeleccionado = radioButton.value;
    if(valorSeleccionado=="option1"){
        document.getElementById('resultado').innerHTML="El resultado son :"+ dolar*pesos+" $Pesos"
    }else{
        document.getElementById('resultado').innerHTML="El resultado son :"+pesos/dolar+" $Dolar"
    }

    // Imprimir el valor seleccionado en la consola
    
}

// 11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
// ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
// son 86 grados fahrenheit.
// 1
// Clase 5- ?Introducción a la Programación Web?
function centigrado_a_faren(){
     document.getElementById('result_grados').innerHTML=document.getElementById('grados').value*9/5+32+" grados Fahrenheit"
}
// 12. Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
// podremos especificar las características de la caja. Ejemplo:
function enviar_paquete(){
    let tamano=document.getElementById('tamano').value
    let peso=document.getElementById('peso').value
    let seguro=document.getElementById('seguro').value
    if(tamano=='default' || peso=='default' || seguro=='default'){
        alert('Te falto completar una seleccion')
    }else{
        alert("Se a enviado con Exito una caja"+ tamano+" con un peso maximo de "+peso+", asegurada por el valor maximo de" +seguro)
    }
}
// 13. A través de un formulario, el usuario debe introducir un número secreto que estará
// entre 0 y 5.
// El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
// juego.
// Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.
let num=Math.floor(Math.random()*(6-1))
let contador=1
function adivina(){
    let intento=document.getElementById('adivinar').value
    let texto=document.getElementById('responder')
    console.log(contador)
    console.log(intento)
    console.log(num)
    if(contador<4){
        if(num==intento){
            texto.style.color="green"
            texto.innerHTML="Felicitaciones has adivinado el numero" 

        
        }else if(num!=intento){
            texto.style.color="blue"
            texto.innerHTML="Lo siento"+ intento+" no es el numero correcto"
            contador++
        }
    }else{
        texto.style.color="red"
        texto.innerHTML="Lo siento Agotaste tus intentos el numero correcto era"+ num
    }
}
document.getElementById('btn').addEventListener('click',adivina)
// 14. Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
// desordenada a medida que se agregan.
// 2
let cuenta_color=0
function agrega_persona(){
    cuenta_color++
    let persona=document.getElementById('input_persona').value
    var lista = document.getElementById('personas');
var li = document.createElement('li');
if (cuenta_color % 2 == 0) {
  li.style.color = 'green';
}
li.innerHTML = persona;
lista.appendChild(li);
}
        `,
      },
      {
        name: 'Clase 6',
        code: `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>linktree</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
</head>
<style>
body {
    background-image: url(bg-palm.jpg);
    background-repeat: no-repeat;
}

.conte,
.fila {
    justify-items: center;
}

.col {
    justify-items: center;
}
.links{
    width: 20rem;
}
.lik{
    grid-template-columns: 1fr 9fr;
}
</style>

<body>
<!-- <button class="btn btn-primary">click</button> -->
<div class="conte container d-grid">
    <div class="fila row d-grid justify-content-center align-items-center">
        <div class="col mt-4 d-grid text-center">
            <img id="avatar" src="avatar-ej1.png" class="img-fluid" style="max-width: none" />
            <form id="forOption" class="d-flex">
                
                <div class="form-check">
                    <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                    Hombre
                    </label>
                </div>
                <div class="form-check">
                    <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                    />
                    <label class="form-check-label" for="exampleRadios2">
                    Mujer
                    </label>
                </div>
                </form>
            <h1 id="nombre"></h1>
            <section class="links d-grid">
                
                <button class="lik btn btn-light m-1 d-grid" href="#">
                <i style="color: green" class="bi bi-check-circle-fill"></i>
                <span class="text-center"> Html</span>
            
            </button>
            <button class="lik btn btn-light m-1 d-grid" href="#">
                <i style="color: green" class="bi bi-check-circle-fill me-2"></i>
                <span class="text-center">Css</span>
                </button>
                <button class="lik btn btn-light m-1 d-grid" href="#">
                <i style="color: green" class="bi bi-check-circle-fill me-2"></i>
                <span class="text-center">Javascript</span>
                </button>
                <button class="lik btn btn-light m-1 d-grid" href="#">
                <i style="color: green" class="bi bi-check-circle-fill me-2"></i>
                <span class="text-center">React</span>
                </button>
                <button class="lik btn btn-light m-1 d-grid" href="#">
                <i style="color: green" class="bi bi-check-circle-fill me-2"></i>
                <span class="text-center">Git Hub</span>
                </button>
        </section>
        <div class="row d-block">
            <a href="#"><i style="color: black;" class="bi bi-twitter"></i></a>
            <a href="#"><i style="color: black; "class="bi bi-facebook"></i></a>
            <a href="#"><i style="color: black;" class="bi bi-linkedin"></i></a>
        </div>
        </div>
    </div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
</script>
<script>
    window.onload=()=>{
        let nombre=prompt('Indique Su nombre')
        if (nombre.length === 0) {
        while (nombre.length === 0) {
        nombre = prompt('Por favor, ingrese su nombre');
        }
    }
        document.getElementById('nombre').innerHTML="Bienvenido " +nombre
    }
    
    document.getElementById('forOption').addEventListener('change',()=>{
        let sex=document.querySelector('input[name="exampleRadios"]:checked').value;
    console.log(sex)
    if(sex=='option2'){
        document.getElementById('avatar').src='avatar-ej2.png'
    }else{
        document.getElementById('avatar').src='avatar-ej1.png'
    }
    })
</script>
</body>

</html>
        `,
      },
    ];
    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
    
    return (
        <Container className='mt-5 mb-5'>
            <Container className="mt-3">
                <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <Image src={logo} fluid useMap="#mapa-imagen" alt="Imagen Clickeable"/>
                    <map name="mapa-imagen" style={{backgroundColor: 'transparent'}}>
                    <area className="area-hover" alt="javascript" shape="circle" coords="100,100,50" href="#" onClick={() => console.log('Haz clic en el punto 1')} />
                    <area className="area-hover" alt="css" shape="circle" coords="200,200,50" href="#" onClick={() => console.log('Haz clic en el punto 2')} />
                    <area className="area-hover" alt="html" shape="circle" coords="300,300,50" href="#" onClick={() => console.log('Haz clic en el punto 3')} />

                 </map>
                    <h1 className='mt-3'>
                    Explorando el mundo de JavaScript, CSS y HTML
                    </h1>
                </Col>
                </Row>
            </Container>
            <hr style={{color:'#0dcaf0'}}></hr>
            <div className="container mt-5">
            
            <h4 className='pb-0 mb-0'> <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" style={{width:'7rem'}} />
        </a>Desarollador Web Inicial</h4>

                <div className="row">
                    <div className="col-md-4" >
                                        <ul className="list-group" >
                    {options.map((option, index) => (
                        <li
                        style={{background:'linear-gradient(#0dcaf0, transparent)'}}
                        key={option.name}
                        className={`list-group-item butt ${
                            selectedOption === option.name ? `active` : ""
                        }`}
                        onClick={() => handleOptionClick(option.name)}
                        >
                        {option.name}
                        </li>
                    ))}
                    </ul>
                    </div>
                    <div className="col-md-8" style={{textAlign: "left", padding:"0px"}}>
                    <CodeBlock value={options.find((option) => option.name === selectedOption)?.code} code={options.find((option) => option.name === selectedOption)?.code} />
                    </div>
                </div>
            </div>
        {/* <MiModal /> */}
      </Container>
    );
}

const CodeBlock = ({ language, value }) => {
  const isComment = value && value.startsWith('//');
  return isComment ?(
    <pre>{value}</pre>
  ): (
    <SyntaxHighlighter language={language} style={xonokai} className="codebox">
      {value}
    </SyntaxHighlighter>
  );
};

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string.isRequired,
};

  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <AppNavbar/>
    <Bodys />
      <div>
        <a href="#" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
       
      </div>
     
    </div>
  )
}

export default App

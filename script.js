/*
            1.Crear una función para pedir su nombre, luego pediremos un número para "x", luego pediremos un número
            para "y" y un número para "Z".
            2. Sumaremos, multiplicaremos y restaremos esos 3 valores.
            3. Luego imprimiremos el nombre de la persona, luego la suma, luego la multplicación y por último la división
            
            Recuerden aplicar prompt, parseInt, document.getElementById e InnerHTML.
            
        
        */

function calcular() {
    // Pedimos el nombre y los números al usuario
    var nombre = prompt("¿Cuál es tu nombre?") ;
    var x = parseFloat(prompt("¿Cuál es el valor de x?")); // Convertimos a número
    var y = parseFloat(prompt("¿Cuál es el valor de y?")); // Convertimos a número
    var z = parseFloat(prompt("¿Cuál es el valor de z?")); // Convertimos a número


    var suma = x + y + z;
    var mul = x * y * z;
    var rest = x - y - z;


    document.getElementById("nombre").innerHTML = "Hola  " + nombre + "  hoy realizaremos una suma, multiplicación y resta de 3 números";

    document.getElementById("suma").innerHTML = "La suma de los números es :" + suma;
    document.getElementById("multiplicacion").innerHTML = "La multiplicación de los números es :" + mul;
    document.getElementById("resta").innerHTML = "La resta de los números es :" + rest;

    }

    calcular();
    // Llamamos a la función para ejecutar el código

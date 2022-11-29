let valor = document.getElementsByClassName("btn").value;
console.log(valor)
var a = "";
var b = "";
var operador= "";

function asignanum(boton){//recoje el valor del botón que se ha clicado
    if(operador===""){//si aún no se ha decicido el operador, significa que estamos definiendo el valor a y lo añadimos al texto por pantalla
        a += boton;
        document.getElementById("pantalla").innerText += boton;
        console.log(a);
    }else{//si ya tenemos oeprador asignado, estamos defniendo el valor b y lo añadimos al texto por pantalla
        b += boton;
        document.getElementById("pantalla").innerText += boton;
    }
}

//recoje el operador, lo asigna a la variable y lo añadimos al texto por pantalla
function operacion(boton){
    operador = boton;
    document.getElementById("pantalla").innerText += boton;
}

//calcula el resultado de la operación según los valores y el operador
function calcular(){
    let resultado = 0;
    switch(operador){
        case "+":
            resultado = parseInt(a) + parseInt(b);
            break;
        case "-":
            resultado = parseInt(a) - parseInt(b);
            break;
        case "*":
            resultado = parseInt(a) * parseInt(b);
            break;
        case "/":
            resultado = parseInt(a) / parseInt(b);
            break;
    }
    document.getElementById("pantalla").innerText += "="+resultado;//muestro el resultado por pantalla
}

//borra toda información mostrada por pantalla y pone el valor de las variables a su estado predeterminado
function borrar(){
    document.getElementById("pantalla").innerText = "";
    a = "";
    b = "";
    operador= "";
}
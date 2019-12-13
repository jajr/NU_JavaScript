var operandoa;
var operandob;
var operacion;
var decimal="N";
var negativo="N";
var largo=0;
var nuevoOperando="N";




var Calculadora = {
  init: function(){
    var resultado = document.getElementById('display');
    var reset = document.getElementById('on');
    var suma = document.getElementById('mas');
    var resta = document.getElementById('menos');
    var multiplicacion = document.getElementById('por');
    var division = document.getElementById('dividido');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    var sign = document.getElementById('sign')
    var punto = document.getElementById('punto')

   //valida longitud del display



     //eventos de click
      punto.onclick = function(e){
       if (decimal=="N"){
            resultado.textContent = resultado.textContent  + ".";
            decimal="S";
       }
      }

      uno.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "1";
         }
         else {
            //resultado.textContent = resultado.textContent  + "1";
            Calculadora.Mostrar("1",resultado);
         }
      }



      dos.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "2";
         }
         else {
              Calculadora.Mostrar("2",resultado);
         }
      }
      tres.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "3";
         }
         else {
              Calculadora.Mostrar("3",resultado);
         }
      }
      cuatro.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "4";
         }
         else {
              Calculadora.Mostrar("4",resultado);
         }
      }
      cinco.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "5";
         }
         else {
              Calculadora.Mostrar("5",resultado);
         }
      }
      seis.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "6";
         }
         else {
              Calculadora.Mostrar("6",resultado);
         }
      }
      siete.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "7";
         }
         else {
              Calculadora.Mostrar("7",resultado);
         }
      }
      ocho.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "8";
         }
         else {
              Calculadora.Mostrar("8",resultado);
         }
      }
      nueve.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "9";
         }
         else {
              Calculadora.Mostrar("9",resultado);
         }
      }
      cero.onclick = function(e){
        nuevoOperando="S";
       if (resultado.textContent == "0" ) {
           resultado.textContent = "0";
         }
         else {
              Calculadora.Mostrar("0",resultado);
         }
      }

    reset.onclick = function(e){
     resultado.textContent = "0";
     largo=0;
     decimal="N";
     nuevoOperando="N";
    }
    suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    decimal="N";
    nuevoOperando="N";
    Calculadora.limpiar(resultado);
    }
    resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    decimal="N";
    nuevoOperando="N";
    Calculadora.limpiar(resultado);
    }
    multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    decimal="N";
    nuevoOperando="N";
    Calculadora.limpiar(resultado);
    }
    division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    decimal="N";
    nuevoOperando="N";
    Calculadora.limpiar(resultado);
    }

    igual.onclick = function(e){
      if (nuevoOperando=="S") {
        operandob = resultado.textContent;
        nuevoOperando="N";
      };
      Calculadora.resolver(resultado);
      operandoa= resultado.textContent;
    }
    sign.onclick = function(e){
      if (resultado.textContent != "0" ) {
          resultado.textContent = parseFloat(resultado.textContent) * - 1;
          if (parseFloat(resultado.textContent)<0) {
            negativo="S";
             }
            else {
              negativo="N";
            }
          }
        }
  },

  Mostrar: function(numero,resultado){
    largo=resultado.textContent.length;
    if ( ((largo < 8) && (negativo=="N")) || ((largo < 9) && (decimal=="S")) ) {
          resultado.textContent = resultado.textContent  + numero ;
          largo=largo+1;
      }
  },
  limpiar: function(resultado){
    resultado.textContent = "";
  },
  resolver: function(resultado){
    var res = 0;
  	switch(operacion){
  		case "+":
  			res = parseFloat(operandoa) + parseFloat(operandob);
  			break;

  		case "-":
  		    res = parseFloat(operandoa) - parseFloat(operandob);
  		    break;

  		case "*":
  			res = parseFloat(operandoa) * parseFloat(operandob);
  			break;

  		case "/":
  			res = parseFloat(operandoa) / parseFloat(operandob);
  			break;
  	}

      if ((res - Math.round(res)) == 0) {
        decimal="N";
      }
      else{
        decimal="S";
      }
      cadena=String(res);
      largo= cadena.length;
      if ((largo > 9) && (negativo=="N")){
        cadena= cadena.slice(0,8);
      }
      else if ((largo > 10) && (decimal=="S")) {
        cadena= cadena.slice(0,10);
      }
  	 	resultado.textContent = cadena;
  }
}

Calculadora.init();

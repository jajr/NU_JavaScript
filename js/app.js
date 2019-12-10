var operandoa;
var operandob;
var operacion;

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

  	//eventos de click
  	uno.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "1";
        }
        else {
           resultado.textContent = resultado.textContent  + "1";
        }
  	}
    dos.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "2";
        }
        else {
           resultado.textContent = resultado.textContent  + "2";
        }
  	}
    tres.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "3";
        }
        else {
           resultado.textContent = resultado.textContent  + "3";
        }
  	}
    cuatro.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "4";
        }
        else {
           resultado.textContent = resultado.textContent  + "4";
        }
  	}
    cinco.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "5";
        }
        else {
           resultado.textContent = resultado.textContent  + "5";
        }
  	}
    seis.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "6";
        }
        else {
           resultado.textContent = resultado.textContent  + "6";
        }
  	}
    siete.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "7";
        }
        else {
           resultado.textContent = resultado.textContent  + "7";
        }
  	}
    ocho.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "8";
        }
        else {
           resultado.textContent = resultado.textContent  + "8";
        }
  	}
    nueve.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "9";
        }
        else {
           resultado.textContent = resultado.textContent  + "9";
        }
  	}
    cero.onclick = function(e){
      if (resultado.textContent == "0" ) {
          resultado.textContent = "0";
        }
        else {
           resultado.textContent = resultado.textContent  + "0";
        }
  	}
    reset.onclick = function(e){
       resultado.textContent = "0";
  	}
    suma.onclick = function(e){
      operandoa = resultado.textContent;
  		operacion = "+";
  		Calculadora.limpiar();
    }
    igual.onclick = function(e){
  		operandob = resultado.textContent;
  		this.resolver();
	  }
  },
  limpiar: function(e){
    resultado.textContent = "";
  },
  resolver: function(){
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
  	 	resultado.textContent = res;
  }
}


Calculadora.init();

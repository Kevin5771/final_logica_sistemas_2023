function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var resultadoElement = document.getElementById("resultado");
  
    if (num1 < num3) {
      var resultado = num1 * num2 * num3;
      resultadoElement.innerHTML = "Multiplicando " + num1 + " por " + num2 + " y por " + num3 + " se obtiene: " + resultado;
      console.log("Multiplicando " + num1 + " por " + num2 + " y por " + num3 + " se obtiene: " + resultado);
      alert("Multiplicando " + num1 + " por " + num2 + " y por " + num3 + " se obtiene: " + resultado);

    } 
    
    else if (num2 === 0) {
      var num_mayor = Math.max(num1, num3);
      var num_menor = Math.min(num1, num3);
      var diferencia = num_mayor - num_menor;
      resultadoElement.innerHTML = "Restando " + num_mayor + " - " + num_menor + " se obtiene: " + diferencia;
      console.log("Restando " + num_mayor + " - " + num_menor + " se obtiene: " + diferencia);
      alert("Restando " + num_mayor + " - " + num_menor + " se obtiene: " + diferencia);

    } 

    else {
      resultadoElement.innerHTML = "No se cumple ninguna condición.";
    }
    
  }
  
  function concatenar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var resultadoElement = document.getElementById("resultado");
  
    var multiplicacion = num1 * num2 * num3;
    var concatenacion = num1.toString() + num2.toString() + num3.toString();
    
    resultadoElement.innerHTML = "Multiplicación: " + multiplicacion + "<br>" + "Concatenación: " + concatenacion;
  }
  
  
  
  document.getElementById("btn_1").addEventListener("click", calcular);
  document.getElementById("btn_2").addEventListener("click", concatenar);
  
  
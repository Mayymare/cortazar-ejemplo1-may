function resta(x,y){
    var resta = parseInt(x) - parseInt(y);
    return resta; 
}

function suma(x,y){								//esta funcion suma y recibe dos paremetros x e y
    var suma = parseInt(x) + parseInt(y);
    return suma; 
}

function multiplicacion(x,y){
  x = parseInt(x);
  y = parseInt(y);
  var numero = 0;

  for (var i = 0; i < y; i++) {
    numero = numero + x;
  }

  return numero;

}

function dividir(a,b){
  a = parseInt(a);
  b = parseInt(b);

  if(b != 0){
    return a / b;
  }else{
    return "no se puede dividir por cero";
  }
}

function operacionesMatematicas(){ 
 var a = document.getElementById("numero1").value;    
 var b = document.getElementById("numero2").value; 
        
 alert("El resultado de la suma es: " + suma(a,b) + ", el resultado de la resta es: " + resta(a,b) ); 
 alert("El resultado de la multiplicacion es: " + multiplicacion(a,b) + " el resultado de la division es: " + dividir(a,b));
}




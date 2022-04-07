var nombre;
var edad;
var casado;
nombre = "Eduardo";
edad = 34;
casado = true;
console.log("Esta persona: " + nombre + "; tiene edad de: " + edad + " y esta casado? " + casado);
//Cree tres funciones para calcular el IVA
//Una sin valor de retorno (imprima por la consola)
//otra que devuelva el valor con retorno, de igual forma imprimalo por la consola, con parametros obligatorios
//Otra que tenga retorno (para imprimir por la consola) y parametros opcionales.
function calcularIva(precio) {
    var iva = precio * 0.16;
    console.log("El iva es: " + iva);
}
function calculeIva(monto, porcentaje) {
    var iva = monto * porcentaje / 100;
    return iva;
}
function retornarIva(base, impuesto) {
    console.log(impuesto);
    if (impuesto === undefined) {
        var iva = base * 12 / 100;
        return iva;
    }
    else {
        var iva = base * impuesto / 100;
        return iva;
    }
}
function retornIva(base1, impuesto1) {
    if (impuesto1 === void 0) { impuesto1 = 12; }
    var iva = base1 * impuesto1 / 100;
    return iva;
}
calcularIva(1000);
console.log("El monto del iva es: " + calculeIva(1000, 16));
console.log("El monto del iva es: " + retornarIva(1000));
console.log("El monto del iva es: " + retornarIva(1000));
console.log("El monto del iva es: " + retornarIva(1000, 16));
var juan;
var victor;
var jose;
var roger;
var eduardo;
eduardo = "eduardo";
juan.nombre = "Juan";
juan.nota = 100;
victor.nombre = "Victor";
victor.nota = 100;
function mostrarNota(a) {
    var mensaje = "El alumno " + a.nombre + " su nota es: " + a.nota.toString();
    return mensaje;
}
console.log(mostrarNota(juan));
//error de tipo de dato en el parametro
//console.log(mostrarNota(eduardo));

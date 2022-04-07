var nombre: string;
var edad: number;
var casado: boolean;

nombre = "Eduardo";
edad = 34;
casado = true;

console.log("Esta persona: " + nombre + "; tiene edad de: " + edad + " y esta casado? " + casado);

//Cree tres funciones para calcular el IVA
//Una sin valor de retorno (imprima por la consola)
//otra que devuelva el valor con retorno, de igual forma imprimalo por la consola, con parametros obligatorios
//Otra que tenga retorno (para imprimir por la consola) y parametros opcionales.

function calcularIva(precio:number) {
    let iva: number = precio * 0.16;
    console.log("El iva es: " + iva);
}

function calculeIva(monto:number, porcentaje: number): number {
    let iva: number = monto * porcentaje / 100;
    return iva;
}

function retornarIva(base:number, impuesto?:number):number {
    console.log(impuesto);
    if(impuesto === undefined){
        let iva: number = base * 12 / 100;
        return iva;
    }else{
        let iva: number = base * impuesto / 100;
        return iva;
    }
}
function retornIva(base1:number, impuesto1:number = 12): number{
    let iva: number = base1 * impuesto1 / 100;
    return iva;
}

calcularIva(1000);

console.log("El monto del iva es: " + calculeIva(1000, 16));
console.log("El monto del iva es: " + retornarIva(1000));
console.log("El monto del iva es: " + retornarIva(1000));
console.log("El monto del iva es: " + retornarIva(1000, 16));


//PRACTICANDO INTERFACES
interface Alumno{
    nombre: string;
    nota: number;
}

var juan: Alumno;
var victor: Alumno;
var jose: Alumno;
var roger: Alumno;
var eduardo: string;
eduardo = "eduardo";

juan.nombre = "Juan";
juan.nota = 100;

victor.nombre = "Victor";
victor.nota = 100;


function mostrarNota(a: Alumno):string{
    let mensaje: string = "El alumno " + a.nombre + " su nota es: " + a.nota.toString();
    return mensaje
}

console.log(mostrarNota(juan));
//error de tipo de dato en el parametro
//console.log(mostrarNota(eduardo));

//objetivo 1
interface Empleado {
    nombre: string;
    montoVentas: number;
    tiempoExp: number;
}

function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//objetivo 2
var sueldoBase: number = 20000;

var jean: Empleado = { nombre: 'Jean Rondon', montoVentas: getRandom(100, 800), tiempoExp: getRandom(1, 20) };
var luis: Empleado = { nombre: 'Marcos Jimenez', montoVentas: getRandom(100, 800), tiempoExp: getRandom(1, 20) };
var marcos: Empleado = { nombre: 'Luis Perez', montoVentas: getRandom(100, 800), tiempoExp: getRandom(1, 20) };

//objetivo 3 y 4
function calcSueldo(persona: Empleado) {
    let sueldoPagar = sueldoBase + (persona.montoVentas * 0.30) + (persona.tiempoExp * 0.01);

    let msg: string = `El empleado ${persona.nombre} tiene un sueldo de ${sueldoPagar.toFixed(2)} USD. Y tiene ${persona.tiempoExp.toFixed(0)} años de servicio en la empresa.`;

    console.log(msg);
}
//objetivo 5
var empleados = [jean, luis, marcos];
for (let i = 0; i < empleados.length; i++)
    calcSueldo(empleados[i])
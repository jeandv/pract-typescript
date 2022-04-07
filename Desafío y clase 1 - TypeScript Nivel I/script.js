function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//objetivo 2
var sueldoBase = 20000;
var jean = { nombre: 'Jean Rondon', montoVentas: getRandom(100, 800), tiempoExp: getRandom(1, 20) };
var luis = { nombre: 'Marcos Jimenez', montoVentas: getRandom(100, 800), tiempoExp: getRandom(1, 20) };
var marcos = { nombre: 'Luis Perez', montoVentas: getRandom(100, 800), tiempoExp: getRandom(1, 20) };
//objetivo 3 y 4
function calcSueldo(persona) {
    var sueldoPagar = sueldoBase + (persona.montoVentas * 0.30) + (persona.tiempoExp * 0.01);
    var msg = "El empleado ".concat(persona.nombre, " tiene un sueldo de ").concat(sueldoPagar.toFixed(2), " USD. Y tiene ").concat(persona.tiempoExp.toFixed(0), " a\u00F1os de servicio en la empresa.");
    console.log(msg);
}
//objetivo 5
var empleados = [jean, luis, marcos];
for (var i = 0; i < empleados.length; i++)
    calcSueldo(empleados[i]);

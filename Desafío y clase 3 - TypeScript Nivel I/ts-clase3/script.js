var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.dibujarPersona = function () {
        console.log('dibujando...');
    };
    Object.defineProperty(Persona.prototype, "name", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());

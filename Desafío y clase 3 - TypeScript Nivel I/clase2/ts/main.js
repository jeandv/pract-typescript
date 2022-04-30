var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    // constructor sin parametros
    // constructor(){
    //     this._nombre = "Anonimo"
    // }
    // constructor con parametros obligatorio.
    // constructor(algo: string){
    //     this._nombre = algo
    // }
    //constructor con parametros opcionales
    function Persona(id, px, py, radio, alto) {
        this._id = id;
        this._puntoInicialX = px;
        this._puntoInicialY = py;
        this._radioCabeza = radio;
        this._altura = alto;
    }
    //metodos
    Persona.prototype.dibujarPersona = function () {
        var canvas = document.getElementById(this._id);
        console.log("Dibujando persona");
        cabeza(canvas, this._puntoInicialX, this._puntoInicialY, this.radio, 0, Math.PI * 2);
        dorso(canvas, this._puntoInicialX, this._puntoInicialY + this.radio, this._puntoInicialX, this._puntoInicialY + this.radio + this.altura);
        //brazo derecho
        extremidades(canvas, this._puntoInicialX, this._puntoInicialY + (0.25 * this.altura) + this.radio, this._puntoInicialX + this.radio, this._puntoInicialY + (0.25 * this.altura) + (2 * this.radio));
        //brazo izquierdo
        extremidades(canvas, this._puntoInicialX, this._puntoInicialY + (0.25 * this.altura) + this.radio, this._puntoInicialX - this.radio, this._puntoInicialY + (0.25 * this.altura) + (2 * this.radio));
        // pierna derecha
        extremidades(canvas, this._puntoInicialX, this._puntoInicialY + this.radio + this.altura, this._puntoInicialX + this.radio, this._puntoInicialY + this.altura + (2 * this.radio));
        // pierna izquierda
        extremidades(canvas, this._puntoInicialX, this._puntoInicialY + this.radio + this.altura, this._puntoInicialX - this.radio, this._puntoInicialY + this.altura + (2 * this.radio));
        cerrarTrazo(canvas);
    };
    Object.defineProperty(Persona.prototype, "radio", {
        //metodo para moverse
        // Setter y Getter
        get: function () {
            return this._radioCabeza;
        },
        set: function (value) {
            if (value <= 0) {
                alert("El valor no puede ser cero ni negativo");
                console.log("El valor no puede ser cero ni negativo");
            }
            else {
                this._radioCabeza = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (value) {
            if (value <= 0) {
                alert("El valor no puede ser cero ni negativo");
                console.log("El valor no puede ser cero ni negativo");
            }
            else {
                this._altura = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "name", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "nome", {
        set: function (value) {
            //SE PUEDEN USAR CONDICIONALES EN ESTAS FUNCIONES?
            //R: Si.
            //EN VISTA DE QUE PUEDO USAR CONDICIONALES...
            //DE QUE ME SERVIRIA ESTO?
            //R: Roger G. Guedez A.: Condicionar el que se pueda cambiar el valor del. Por ejemplo, sólo lo cambio si está vacíoatributo 
            //Victor A. Suarez G. : es que lo veo mas como una funcion al momento de realizar declaraciones, desde las declaraciones hasta su uso.
            //Por ejemplo...
            if (value == "Jose Luis") {
                console.log("Ese nombre esta prohibido!");
            }
            else {
                this._nombre = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(id, px, py, radio, alto) {
        return _super.call(this, id, px, py, radio, alto) || this;
    }
    Hijo.prototype.dibujarHijo = function () {
        this.dibujarPersona();
    };
    return Hijo;
}(Persona));
function cabeza(canvas, cx, cy, radio, angleOpen, angleClose) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.arc(cx, cy, radio, angleOpen, angleClose);
        ctx.stroke();
    }
}
function dorso(canvas, pix, piy, pfx, pfy) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(pix, piy);
        ctx.lineTo(pfx, pfy);
        ctx.stroke();
    }
}
function extremidades(canvas, pix, piy, pfx, pfy) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(pix, piy);
        ctx.lineTo(pfx, pfy);
        ctx.stroke();
    }
}
function cerrarTrazo(canvas) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.closePath();
    }
}
//Instanciamos un objeto del tipo de la clase
var individuo;
individuo = new Persona("lienzo", 200, 200, 50, 100);
var hijoDeIndividuo = new Hijo("lienzo", 80, 80, 25, 50);
//Seteamos el atributo nombre - Write
//individuo.nome = "Eduardo"
//get del nombre (o mostramos el valor) - Read
console.log(individuo.name);
individuo.dibujarPersona();
hijoDeIndividuo.dibujarHijo();

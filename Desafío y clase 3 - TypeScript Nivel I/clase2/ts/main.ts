class Persona {
    //atributos del canvas
    _id: string
    canvas: any
    //atributos del cuerpo
    _puntoInicialX: number
    _puntoInicialY: number
    private _radioCabeza: number
    private _altura: number
    //atributos de personalizacion
    private _nombre: string

    // constructor sin parametros
    // constructor(){
    //     this._nombre = "Anonimo"
    // }

    // constructor con parametros obligatorio.
    // constructor(algo: string){
    //     this._nombre = algo
    // }

    //constructor con parametros opcionales
    constructor(id: string, px?: number, py?: number, radio?: number, alto?: number) {
        this._id = id
        this._puntoInicialX = px
        this._puntoInicialY = py
        this._radioCabeza = radio
        this._altura = alto
    }
    //metodos
    protected dibujarPersona() {
        var canvas = document.getElementById(this._id)
        console.log("Dibujando persona")
        cabeza(canvas, this._puntoInicialX, this._puntoInicialY, this.radio, 0, Math.PI * 2)
        dorso(canvas, this._puntoInicialX, this._puntoInicialY + this.radio, this._puntoInicialX, this._puntoInicialY + this.radio + this.altura)
        //brazo derecho
        extremidades(canvas, this._puntoInicialX, this._puntoInicialY + (0.25 * this.altura) + this.radio, this._puntoInicialX + this.radio, this._puntoInicialY + (0.25 * this.altura) + (2 * this.radio))
        //brazo izquierdo
        extremidades(canvas, this._puntoInicialX, this._puntoInicialY + (0.25 * this.altura) + this.radio, this._puntoInicialX - this.radio, this._puntoInicialY + (0.25 * this.altura) + (2 * this.radio))
        // pierna derecha
        extremidades(canvas, this._puntoInicialX, this._puntoInicialY + this.radio + this.altura, this._puntoInicialX + this.radio, this._puntoInicialY + this.altura + (2 * this.radio))
        // pierna izquierda
        extremidades(canvas, this._puntoInicialX, this._puntoInicialY + this.radio + this.altura, this._puntoInicialX - this.radio, this._puntoInicialY + this.altura + (2 * this.radio))
        cerrarTrazo(canvas)
    }
    //metodo para moverse


    // Setter y Getter
    get radio() {
        return this._radioCabeza
    }
    set radio(value: number) {
        if (value <= 0) {
            alert("El valor no puede ser cero ni negativo")
            console.log("El valor no puede ser cero ni negativo")
        } else {
            this._radioCabeza = value
        }
    }
    get altura() {
        return this._altura
    }
    set altura(value: number) {
        if (value <= 0) {
            alert("El valor no puede ser cero ni negativo")
            console.log("El valor no puede ser cero ni negativo")
        } else {
            this._altura = value
        }
    }
}

class Hijo extends Persona {

    constructor(id: string, px?: number, py?: number, radio?: number, alto?: number) {
        super(id, px, py, radio, alto)
    }
    public dibujarHijo() {
        this.dibujarPersona()
    }
}

function cabeza(canvas, cx, cy, radio, angleOpen, angleClose) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d")
        ctx.arc(cx, cy, radio, angleOpen, angleClose)
        ctx.stroke()
    }
}
function dorso(canvas, pix, piy, pfx, pfy) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d")
        ctx.beginPath()
        ctx.moveTo(pix, piy)
        ctx.lineTo(pfx, pfy)
        ctx.stroke()
    }
}
function extremidades(canvas, pix, piy, pfx, pfy) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d")
        ctx.beginPath()
        ctx.moveTo(pix, piy)
        ctx.lineTo(pfx, pfy)
        ctx.stroke()
    }
}
function cerrarTrazo(canvas) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d")
        ctx.beginPath()
        ctx.closePath()
    }
}

//Instanciamos un objeto del tipo de la clase
let individuo: Persona
individuo = new Persona("lienzo", 200, 200, 50, 100)

let hijoDeIndividuo: Hijo = new Hijo("lienzo", 80, 80, 25, 50)

//Seteamos el atributo nombre - Write
//individuo.nome = "Eduardo"

//get del nombre (o mostramos el valor) - Read

individuo.dibujarPersona()
hijoDeIndividuo.dibujarHijo()
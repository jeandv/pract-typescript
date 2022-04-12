//Buscar el canvas
var canvas = document.getElementById("clase1")

//Definimos la clase Figura
class Figura{
    //Atributos de la clase
    name: string
    x: number
    y: number
    //Metodos de la clase
    mostrarPosicion(){
        console.log("La posicion inicial de la figura " + this.name + " es: " + this.x + ", " + this.y)
    }
}

//Declaramos e instanciamos dos objetos de esa clase
let wave: Figura
wave = new Figura()

let que: Figura = new Figura()

//invocamos el metodo sin inicializar
wave.mostrarPosicion()
//Inicializamos los atributos de la figura "w"
wave.name = "Figura W"
wave.x = 100
wave.y = 400
wave.mostrarPosicion()

//Definamos la clase Circulo
class Circulo{
    public readonly type: string = "circulito"
    public name: string
    private _posX: number
    private _posY: number
    private _ratio: number
    private _startAngle: number
    private _endAngle: number
    //Metodos getter
    get posx(){
        return this._posX
    }
    get posy(){
        return this._posY
    }
    get ratio(){
        return this._ratio
    }
    get startAngle(){
        return this._startAngle
    }
    get endAngle(){
        return this._endAngle
    }
    // Metodos setter
    set posx(val: number){
        this._posX = val
    }
    set posy(val: number){
        this._posY = val
    }
    set ratio(val: number){
        this._ratio = val
    }
    set startAngle(val: number){
        this._startAngle = val
    }
    set endAngle(val: number){
        this._endAngle = val
    }
}

//Definimos un objeto de la clase
let c: Circulo = new Circulo()
//Inicializamos los atributos de c
c.name = "Mi circulito"
c.posx = 500
c.posy = 500
c.ratio = 100
c.startAngle = 0
c.endAngle = 360



//Creamos la condicional que verifica que el contexto del canvas se genera
if(canvas.getContext){
    console.log("Si esta el canvas")
    var cnv = canvas.getContext('2d')
    cnv.beginPath()
    cnv.moveTo(0, 0)
    cnv.lineTo(100, 100)
    cnv.stroke()
    //Reactangulo con fill
    cnv.moveTo(100, 100)
    cnv.lineTo(200, 100)
    cnv.lineTo(200, 300)
    cnv.lineTo(100, 300)
    cnv.lineTo(100, 100)
    cnv.stroke()
    //Pintar un circulo en el centro del rectangulo
    cnv.moveTo(200, 200)
    cnv.arc(150, 200, 50, 0, Math.PI*2)
    cnv.stroke()
    cnv.closePath()
    //Dibujar triangulo
    cnv.beginPath()
    cnv.moveTo(300, 100)
    cnv.lineTo(200, 100)
    cnv.lineTo(200, 200)
    cnv.fill()
    cnv.closePath()
    //Dibujar rectangulo con el metodo
    //fillRect()
    //strokeRect()
    //clearRect()
    cnv.beginPath()
    cnv.moveTo(300, 100)
    cnv.fillStyle = "green"
    cnv.fillRect(300, 100, 100, 200)
    cnv.closePath()
    //Pinto a circulito
    cnv.beginPath()
    cnv.moveTo(c.posx, c.posy)
    cnv.fillStyle = "#B12A34"
    cnv.arc(c.posx, c.posy, c.ratio, Math.PI/180*c.startAngle, Math.PI/180*c.endAngle)
    cnv.fill()
    cnv.closePath()
    //Incluyamos texto dentro del circulo
    cnv.font = "18px SegoeUI"
    cnv.fillStyle = "black"
    cnv.fillText(c.name, c.posx-40, c.posy+5)
}else{
    console.log("No se puede mostrar el canvas")
}
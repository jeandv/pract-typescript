//Buscar el canvas
var canvas = document.getElementById("clase1");
//Definimos la clase Figura
var Figura = /** @class */ (function () {
    function Figura() {
    }
    //Metodos de la clase
    Figura.prototype.mostrarPosicion = function () {
        console.log("La posicion inicial de la figura " + this.name + " es: " + this.x + ", " + this.y);
    };
    return Figura;
}());
//Declaramos e instanciamos dos objetos de esa clase
var wave;
wave = new Figura();
var que = new Figura();
//invocamos el metodo sin inicializar
wave.mostrarPosicion();
//Inicializamos los atributos de la figura "w"
wave.name = "Figura W";
wave.x = 100;
wave.y = 400;
wave.mostrarPosicion();
//Definamos la clase Circulo
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.type = "circulito";
    }
    Object.defineProperty(Circulo.prototype, "posx", {
        //Metodos getter
        get: function () {
            return this._posX;
        },
        // Metodos setter
        set: function (val) {
            this._posX = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circulo.prototype, "posy", {
        get: function () {
            return this._posY;
        },
        set: function (val) {
            this._posY = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circulo.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        set: function (val) {
            this._ratio = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circulo.prototype, "startAngle", {
        get: function () {
            return this._startAngle;
        },
        set: function (val) {
            this._startAngle = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circulo.prototype, "endAngle", {
        get: function () {
            return this._endAngle;
        },
        set: function (val) {
            this._endAngle = val;
        },
        enumerable: false,
        configurable: true
    });
    return Circulo;
}());
//Definimos un objeto de la clase
var c = new Circulo();
//Inicializamos los atributos de c
c.name = "Mi circulito";
c.posx = 500;
c.posy = 500;
c.ratio = 100;
c.startAngle = 0;
c.endAngle = 360;
//Creamos la condicional que verifica que el contexto del canvas se genera
if (canvas.getContext) {
    console.log("Si esta el canvas");
    var cnv = canvas.getContext('2d');
    cnv.beginPath();
    cnv.moveTo(0, 0);
    cnv.lineTo(100, 100);
    cnv.stroke();
    //Reactangulo con fill
    cnv.moveTo(100, 100);
    cnv.lineTo(200, 100);
    cnv.lineTo(200, 300);
    cnv.lineTo(100, 300);
    cnv.lineTo(100, 100);
    cnv.stroke();
    //Pintar un circulo en el centro del rectangulo
    cnv.moveTo(200, 200);
    cnv.arc(150, 200, 50, 0, Math.PI * 2);
    cnv.stroke();
    cnv.closePath();
    //Dibujar triangulo
    cnv.beginPath();
    cnv.moveTo(300, 100);
    cnv.lineTo(200, 100);
    cnv.lineTo(200, 200);
    cnv.fill();
    cnv.closePath();
    //Dibujar rectangulo con el metodo
    //fillRect()
    //strokeRect()
    //clearRect()
    cnv.beginPath();
    cnv.moveTo(300, 100);
    cnv.fillStyle = "green";
    cnv.fillRect(300, 100, 100, 200);
    cnv.closePath();
    //Pinto a circulito
    cnv.beginPath();
    cnv.moveTo(c.posx, c.posy);
    cnv.fillStyle = "#B12A34";
    cnv.arc(c.posx, c.posy, c.ratio, Math.PI / 180 * c.startAngle, Math.PI / 180 * c.endAngle);
    cnv.fill();
    cnv.closePath();
    //Incluyamos texto dentro del circulo
    cnv.font = "18px SegoeUI";
    cnv.fillStyle = "black";
    cnv.fillText(c.name, c.posx - 40, c.posy + 5);
}
else {
    console.log("No se puede mostrar el canvas");
}

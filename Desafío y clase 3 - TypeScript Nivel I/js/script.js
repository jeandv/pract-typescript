var Elemento = /** @class */ (function () {
    function Elemento(id, col, px, py) {
        this._id = id;
        this._color = col;
        this._X = px;
        this._Y = py;
    }
    Elemento.prototype.dibujar = function () {
        var canvas = document.getElementById(this._id);
        estrella(canvas, this._color, this._X, this._Y);
    };
    Object.defineProperty(Elemento.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            if (value = "") {
                this._color = "#000";
            }
            else {
                this._color = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Elemento;
}());
function estrella(canvas, col, px, py) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = col;
        ctx.lineWidth = 5;
        var X = px;
        var Y = py;
        var R = 150;
        var L = 5;
        var paso = 2;
        var estrella = L / paso;
        var rad = (2 * Math.PI) / estrella;
        ctx.translate(canvas.width / 3, canvas.height / 3);
        ctx.rotate(2 * Math.PI / 1);
        ctx.beginPath();
        for (var i = 0; i < L; i++) {
            X = X + R * Math.cos(rad * i);
            Y = Y + R * Math.sin(rad * i);
            ctx.lineTo(X, Y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}
var EstrellaPunteada = new Elemento("lienzo", "#ccc", 0, 0);
EstrellaPunteada.dibujar();

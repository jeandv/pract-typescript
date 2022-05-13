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
function mostrarCanvas(nombre) {
    var Figura = /** @class */ (function () {
        function Figura() {
        }
        return Figura;
    }());
    var Colores;
    (function (Colores) {
        Colores["Yellow"] = "yellow";
        Colores["Black"] = "black";
        Colores["White"] = "white";
        Colores["Gray"] = "gray";
    })(Colores || (Colores = {}));
    var Ventana = /** @class */ (function (_super) {
        __extends(Ventana, _super);
        function Ventana(xt, yt, yp, m, l, ven) {
            var _this = _super.call(this) || this;
            _this._xtamano = xt;
            _this._ytamano = yt;
            _this._conMarco = m;
            _this._luzEncendida = l;
            _this._nroVentanas = ven;
            _this._yposicion = yp;
            return _this;
        }
        Ventana.prototype.dibujar = function () {
            var n = 0;
            for (var i = 0; i < this._nroVentanas; i++) {
                n += this._nroVentanas * 4;
                var c = document.getElementById('lienzo');
                var ctx = c.getContext('2d');
                if (this._luzEncendida == true || this._luzEncendida == null) {
                    //encendido
                    ctx.fillStyle = Colores.Yellow;
                }
                else {
                    //apagado
                    ctx.fillStyle = Colores.Black;
                }
                if (this._conMarco == true || this._conMarco == null) {
                    //con marco
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = Colores.White;
                    ctx.strokeRect(n - -55, 12 + this._yposicion, this._xtamano, this._ytamano);
                }
                ctx.fillRect(n - -55, 12 + this._yposicion, this._xtamano, this._ytamano);
            }
        };
        return Ventana;
    }(Figura));
    var Piso = /** @class */ (function (_super) {
        __extends(Piso, _super);
        function Piso(ven, anc, col, xp, yp, pv) {
            var _this = _super.call(this) || this;
            _this._nroVentanas = ven;
            _this._ancho = anc;
            _this._color = col;
            _this._xposicion = xp;
            _this._yposicion = yp;
            _this._posVentana = pv;
            return _this;
        }
        Object.defineProperty(Piso, "_alto", {
            get: function () { return 50; },
            enumerable: false,
            configurable: true
        });
        ;
        Piso.prototype.dibujar = function () {
            var c = document.getElementById('lienzo');
            var ctx = c.getContext('2d');
            ctx.fillStyle = this._color;
            ctx.fillRect(this._xposicion, this._yposicion, this._ancho, Piso._alto);
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = Colores.Black;
            ctx.strokeRect(this._xposicion, this._yposicion, this._ancho, Piso._alto);
            for (var i = 0; i < this._nroVentanas; i++) {
                var anchoVentana = this._ancho / (this._nroVentanas * 2);
                var v = new Ventana(anchoVentana, 10, this._posVentana, true, true, this._nroVentanas);
                v.dibujar();
            }
        };
        return Piso;
    }(Figura));
    var Edificio = /** @class */ (function (_super) {
        __extends(Edificio, _super);
        function Edificio(nm, np, xp, yp) {
            var _this = _super.call(this) || this;
            _this._nombre = nm;
            _this._nroPisos = np;
            _this._xposicion = xp;
            _this._yposicion = yp;
            _this._ancho = 150;
            _this._color = Colores.Gray;
            return _this;
        }
        Edificio.prototype.dibujar = function () {
            for (var i = 0; i < this._nroPisos; i++) {
                var p = new Piso(6, this._ancho, this._color, this._xposicion, this._yposicion - Piso._alto * i, this._yposicion - 45 * i);
                p.dibujar();
            }
            var mostrarNombre = document.getElementById('nombre');
            mostrarNombre.innerHTML = this._nombre;
        };
        return Edificio;
    }(Figura));
    var e = new Edificio(nombre, 3, 70, 110);
    e.dibujar();
}
document.getElementById('boton').onclick = function () {
    var nombre = window.prompt('Coloca tu nombre');
    mostrarCanvas(nombre);
};

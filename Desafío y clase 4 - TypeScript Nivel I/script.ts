function mostrarCanvas(nombre) {

    abstract class Figura {
        public abstract dibujar();
    }

    enum Colores {
        Yellow = 'yellow',
        Black = 'black',
        White = 'white',
        Gray = 'gray',
    }
    class Ventana extends Figura {
        _xtamano: number;
        _ytamano: number;
        _conMarco: boolean;
        _luzEncendida: boolean;

        _nroVentanas: number;

        _yposicion: number;

        constructor(xt: number, yt: number, yp: number, m?: boolean, l?: boolean, ven?: number) {
            super();

            this._xtamano = xt;
            this._ytamano = yt;
            this._conMarco = m;
            this._luzEncendida = l;

            this._nroVentanas = ven;
            this._yposicion = yp;
        }

        public dibujar() {


            let n = 0;
            for (let i = 0; i < this._nroVentanas; i++) {
                n += this._nroVentanas * 4

                let c = document.getElementById('lienzo');
                let ctx = c.getContext('2d');

                if (this._luzEncendida == true || this._luzEncendida == null) {
                    //encendido
                    ctx.fillStyle = Colores.Yellow;
                } else {
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
        }

    }

    class Piso extends Figura {
        _nroVentanas: number;
        _ancho: number;
        static get _alto(): number { return 50; };

        _color: string;
        _xposicion: number;
        _yposicion: number;

        _posVentana: number;

        constructor(ven: number, anc: number, col: string, xp: number, yp: number, pv: number) {
            super();

            this._nroVentanas = ven;
            this._ancho = anc;
            this._color = col;
            this._xposicion = xp;
            this._yposicion = yp;

            this._posVentana = pv;
        }

        public dibujar() {

            let c = document.getElementById('lienzo');
            let ctx = c.getContext('2d');

            ctx.fillStyle = this._color;
            ctx.fillRect(this._xposicion, this._yposicion, this._ancho, Piso._alto);

            ctx.lineWidth = 1.5;
            ctx.strokeStyle = Colores.Black;
            ctx.strokeRect(this._xposicion, this._yposicion, this._ancho, Piso._alto);

            for (let i = 0; i < this._nroVentanas; i++) {

                let anchoVentana: number = this._ancho / (this._nroVentanas * 2)

                let v: Ventana = new Ventana(anchoVentana, 10, this._posVentana, true, true, this._nroVentanas);

                v.dibujar();
            }
        }
    }

    class Edificio extends Figura {
        _nroPisos: number;
        _ancho: number;
        _nombre: string;
        _color: string;

        _xposicion: number;
        _yposicion: number;

        constructor(nm: string, np: number, xp: number, yp: number) {
            super();

            this._nombre = nm;
            this._nroPisos = np;
            this._xposicion = xp;
            this._yposicion = yp;
            this._ancho = 150;
            this._color = Colores.Gray;
        }


        public dibujar() {

            for (let i = 0; i < this._nroPisos; i++) {
                let p: Piso = new Piso(6, this._ancho, this._color, this._xposicion, this._yposicion - Piso._alto * i, this._yposicion - 45 * i);

                p.dibujar();
            }

            let mostrarNombre = document.getElementById('nombre');
            mostrarNombre.innerHTML = this._nombre;
        }
    }

    let e: Edificio = new Edificio(nombre, 3, 70, 110);

    e.dibujar();
}

document.getElementById('boton').onclick = () => {

    let nombre = window.prompt('Coloca tu nombre');

    mostrarCanvas(nombre)
}
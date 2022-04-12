class Tren {
    nombre: string

    pintar() {
        var canvas = document.querySelector('canvas'),
            ctx = canvas.getContext('2d');

        function generarNum(numero) {
            return (Math.random() * numero).toFixed(0);
        }

        function colorRGB() {
            var color = "(" + generarNum(255) + "," + generarNum(255) + "," + generarNum(255) + ")";
            return "rgb" + color;
        }

        ctx.fillStyle = colorRGB();
        ctx.fillRect(0, 140, 300, 10);

        let n: number = 0;
        for (let i = 0; i < 10; i++) {
            n += 20
            ctx.rotate(45 * Math.PI / 180);
            ctx.fillStyle = colorRGB();
            ctx.fillRect(95 + n, 96 - n, 5, 13);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }

        ctx.fillStyle = colorRGB();
        ctx.fillRect(0, 135, 300, 5);

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.fillRect(10, 100, 150, 8);
        ctx.strokeRect(10, 100, 150, 8);

        n = 0;
        for (let i = 0; i < 3; i++) {
            n += 48
            ctx.lineWidth = 1.5;
            ctx.fillStyle = colorRGB();
            ctx.fillRect(n - 30, 77, 35, 35);
            ctx.strokeRect(n - 30, 77, 35, 35);

            ctx.lineWidth = 1.5;
            ctx.fillStyle = colorRGB();
            ctx.beginPath()
            ctx.arc(n - 13, 120, 16, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.closePath();
            ctx.stroke();
        }

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.fillRect(160, 38, 50, 75);
        ctx.strokeRect(160, 38, 50, 75);

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.fillRect(210, 57, 55, 55);
        ctx.strokeRect(210, 57, 55, 55);

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.fillRect(235, 39, 18, 18);
        ctx.strokeRect(235, 39, 18, 18);

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.fillRect(230, 21, 28, 18);
        ctx.strokeRect(230, 21, 28, 18);

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.fillRect(155, 18, 60, 20);
        ctx.strokeRect(155, 18, 60, 20);

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.fillRect(167, 50, 35, 35);
        ctx.strokeRect(167, 50, 35, 35);

        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(265, 80);
        ctx.lineTo(265, 112);
        ctx.lineTo(295, 112);
        ctx.closePath()
        ctx.fill();
        ctx.stroke();

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.beginPath()
        ctx.arc(185, 115, 20, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.beginPath()
        ctx.arc(223, 122, 13, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.beginPath()
        ctx.arc(253, 122, 13, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.beginPath();
        ctx.moveTo(25, 40);
        ctx.lineTo(45, 40);
        ctx.lineTo(55, 57);
        ctx.lineTo(45, 76);
        ctx.lineTo(25, 76);
        ctx.lineTo(16, 59);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.beginPath();
        ctx.moveTo(85, 37);
        ctx.lineTo(100, 50);
        ctx.lineTo(96, 76);
        ctx.lineTo(72, 76);
        ctx.lineTo(69, 50);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorRGB();
        ctx.beginPath();
        ctx.moveTo(140, 40);
        ctx.lineTo(123, 40);
        ctx.lineTo(115, 52);
        ctx.lineTo(115, 65);
        ctx.lineTo(123, 76);
        ctx.lineTo(140, 76);
        ctx.lineTo(147, 65);
        ctx.lineTo(147, 52);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}

let t: Tren = new Tren();
t.nombre = 'Tren en canvas';
t.pintar();
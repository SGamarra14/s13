var juego = new Phaser.Game(370, 550, Phaser.CANVAS, "bloque_juego");
var fondoJuego;
var boton;
var flappy;

var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var estadoPrincipal = {
    preload: function() {
        //juego.stage.backgroundColor = "#000";
        juego.load.image("fondo", "img/bg.jpeg");
        juego.load.spritesheet("pajaros", "img/pajaro.png", 43, 30);
        //juego.load.image("btn", "img/btn.png");
    },

    create : function() {
        fondoJuego = juego.add.tileSprite(0,0,370,550,"fondo");
        flappy = juego.add.sprite(100, 100,"pajaros");
        flappy.frame = 1;
        flappy.animations.add("vuelo", [0,1,2], 10, true);

        teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

    },

    update: function() {
        fondoJuego.tilePosition.x -= 1;
        flappy.animations.play("vuelo");

        if(teclaDerecha.isDown) {
            flappy.x++;
        } else if (teclaIzquierda.isDown) {
            flappy.x--;
        } else if (teclaArriba.isDown) {
            flappy.y = flappy.y-2;
        } else if (teclaAbajo.isDown) {
            flappy.y = flappy.y+2;
        }
    }
};

juego.state.add("principal", estadoPrincipal);

juego.state.start("principal");
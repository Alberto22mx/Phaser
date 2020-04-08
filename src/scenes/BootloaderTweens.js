class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
    }
    init() {
        console.log("TEST");
    }
    preload() {
        this.load.path = './src/assets/';//Sirve para crear la ruta de las imagenes
        this.load.image(['cubix']);
    }
    create() {
        this.cubix = this.add.image(100, 100, 'cubix');
        this.tweens = this.add.tween({//Los tweens crean una secuencia del estado inicial al final
            targets: [this.cubix],//Permite aplicar la misma animación a varios elementos
            ease: 'Bounce',//tipo de interpolación
            y: 300,//animacion
            // x: {
            //     value: 200,
            //     ease: 'Elastic',
            //     duration: 3000
            // },
            repeat: 1,//Veces que se repite la animación
            yoyo: true, //Va del estado inicial al final y viseversa
            // delay: 1000,
            // hold: 1000,
            repeatDelay: 1000,
            //Esto metodos se ejecutan segun los eventos
            onStart: () => {
                console.log("Start");
            },
            onRepeat: () => {
                console.log("Repet");
            },
            onYoyo: ()=> {
                console.log("Yoyo");
            },
            onComplete: (tween, obj, target) => {
                console.log("Complete");
                //this.cubix.setTint(0xff0000);
                target.setTint(0xff0000);
            },
            onCompleteParams: [this.cubix]
            //onYoyParams: []
        });
    }
    update(time, delta) {
    }
}
export default Bootloader;
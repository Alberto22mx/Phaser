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
        //Segunda forma de declarar linetime
        this.timeline = this.tweens.timeline({
            //paused: true,//Pausa el juego
            //duration: 1000,
            totalDuration: 1000,
            targets: [this.cubix],
            loop: 2,//Solo se jecuta dos veces para infinito -1
            tweens: [
                { x: 300 },
                { 
                    y: 300, 
                    offset: 500 //Se adelanta "-=500"
                },
                { x: 100 },
                { y: 100 },
            ]
        });//Los timeline son multiples tweens
        //this.timeline.play();//Inicia el juego
        //Primera forma de declarar un timeline
        // this.timeline.add({
        //     targets: [this.cubix],
        //     x: 300,
        //     ease: 'Bounce',
        // });
        // this.timeline.add({
        //     targets: [this.cubix],
        //     y: 300
        // });
        // this.timeline.add({
        //     targets: [this.cubix],
        //     x: 100
        // });
        // this.timeline.add({
        //     targets: [this.cubix],
        //     y: 100
        // });

        //this.timeline.play();
    }
    update(time, delta) {
    }
}
export default Bootloader;
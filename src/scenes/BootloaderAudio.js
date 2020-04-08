import SceneC from './../scenes/SceneC.js';
class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
    }
    init() {
        console.log("Bootloader");
    }
    preload() {
        this.load.path = './src/assets/';//Sirve para crear la ruta de las imagenes
        this.load.image(['cubix', 'cubix_fondo']);
        this.load.audio('8bits', ['8bits.ogg']);
    }
    create() {
        this.cubix = this.add.image(100, 100, 'cubix');
        const audio = this.sound.add('8bits');
        const cursor = this.input.keyboard.createCursorKeys();
        this.sound.pauseOnBlur = false; // inpide que no se pause el audio al des enfocar
        cursor.up.on('down', () => {
            /*this.tweens.add({//Crea una animación en el audio
                targets: [audio],
                duration: 2000,
                volume: 0,
                ease: 'Power1'
            });*/
            //audio.pause();
            //audio.rate += 0.1;//Aumenta la velocidad del audio para ir lento se usan valores negativos
            //audio.detune += 100; // Cambia el tono del audio
            //audio.mute = true;
            //audio.volume -= 0.1; //Sube o baja el volume en entre 0 y 1
        });
        cursor.down.on('down', () => {
            //audio.resume();
            //audio.rate = 1;//Regresa el audio a la velocidad normal
            //audio.detune = 1; //Regresa al tono original del audio
            //audio.mute = false;
            //audio.volume = 1;
        });
        cursor.left.on('down', () => {
            //audio.stop();//Detiene un solo audio
            this.sound.stopAll();// Detiene todos los audios
        });
        cursor.right.on('down', () => {
            audio.play();
        });
    }
    update(time, delta) {
    }
}
export default Bootloader;
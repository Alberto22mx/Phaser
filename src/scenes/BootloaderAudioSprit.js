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
        this.load.audioSprite('fx', 'sonidos/spriteAudioGamma.json', ['sonidos/spriteAudioGamma.ogg']);
    }
    create() {
        this.cubix = this.add.image(100, 100, 'cubix');
        //const audio = this.sound.add('fx');
        const cursor = this.input.keyboard.createCursorKeys();
        cursor.up.on('down', () => {
            this.sound.playAudioSprite('fx', 'clap');
        });
        cursor.down.on('down', () => {
            this.sound.playAudioSprite('fx', 'percusion');
        });
        cursor.left.on('down', () => {
            this.sound.playAudioSprite('fx', 'pop');
        });
        cursor.right.on('down', () => {
            audio.play();
        });
    }
    update(time, delta) {
    }
}
export default Bootloader;
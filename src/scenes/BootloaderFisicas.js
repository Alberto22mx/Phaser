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
        this.load.path = './src/assets/';
        this.load.image(['cubix_fondo', 'cubix'])
    }
    create() {
        // Hay dos formas de habilitar las fisicas.
        this.cubix = this.physics.add.image(100, 100, 'cubix'); // 1
        this.cubix_fondo = this.add.image(300, 100, 'cubix_fondo'); // 2
        // this.physics.add.existing(this.cubix_fondo, true); // Se les puede pasar un booleano para que sean plataformas
        this.physics.add.existing(this.cubix_fondo);
        this.cubix.body.setCollideWorldBounds(true);
        this.cubix_fondo.body.setCollideWorldBounds(true);

        this.cubix.setMaxVelocity.x = 50; // this.cubix.setMaxVelocity(100); // Maxima velocidad
        this.cubix.body.setMass(1); // Es la masa se un cuerpo

        this.cubix.body.setCircle(40); // Da forma redonda al area de colicion

        this.cubix_fondo.body.setSize(30, 30); // Modifica el tamaño de la colicion
        this.cubix_fondo.body.setOffset(40, 100); // Cambia la ubicación de la colición

        this.cubix_fondo.body.setMass(20000);

        this.cubix.body.setBounce(0.5) // Se adign arevote

        this.cursor = this.input.keyboard.createCursorKeys();
        this.cursor.right.on('down', () => {
            // this.cubix.body.setAcceleration(400, 10); // Aceleración
            this.cubix.body.setVelocity(400, 0); // Velocidad
        });
        this.cursor.left.on('down', () => {
            // this.cubix.body.setAcceleration(-400, 10); // Aceleración
            this.cubix.body.setVelocity(-400, 0); // Velocidad
        });
        this.cursor.up.on('down', () => {
            // this.cubix.body.setAcceleration(-400, 10); // Aceleración
            this.cubix.body.setVelocity(0, -700); // Velocidad
        });
        this.physics.add.collider(this.cubix, this.cubix_fondo, () => {
            this.cubix.body.setVelocity(0);
        }); // Cuando colicionan se ejecuta una función anonima
    }
    update(time, delta) {
    }
}
export default Bootloader;
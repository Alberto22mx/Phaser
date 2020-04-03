class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
    }
    init() {

    }
    preload() {
        this.load.path = './src/assets/';//Sirve para crear la ruta de las imagenes
        this.load.image(['cubix_fondo', 'cubix'])//Esta es otra opción más corta para cargar imagenes equivalente a las dos lineas anteriores
    }
    create() {
        this.cubix = this.add.image(100, 100, 'cubix');
        this.cursor = this.input.keyboard.createCursorKeys();
        console.log(this.cursor);
        this.cursor.space.on('down', () => {
            this.cubix.setTint(0xff0000);
        });
        this.cursor.space.on('up', () => {
            this.cubix.setTint(0xffffff);//En color blanco no se ven afectados los colores
        });
    }
    update(time, delta) {
        if (this.cursor.right.isDown) {
            this.cubix.x += 2;
            this.cubix.flipX = false;
        }
        if (this.cursor.left.isDown) {
            this.cubix.x -= 2;
            this.cubix.flipX = true;
        }
        if (this.cursor.down.isDown) {
            this.cubix.y += 2;
        }
        if (this.cursor.up.isDown) {
            this.cubix.y -= 2;
        }
    }
}
export default Bootloader;
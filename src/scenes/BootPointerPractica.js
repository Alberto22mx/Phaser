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
        this.load.image(['cubix', 'cubix_fondo'])//Esta es otra opción más corta para cargar imagenes equivalente a las dos lineas anteriores
    }
    create() {
        this.cubix = this.add.image(100, 100, 'cubix').setInteractive();
        this.cubix_fondo = this.add.image(100, 200, 'cubix_fondo').setInteractive();
        const eventos = Phaser.Input.Events;//Tiene los eventos por defecto y se recomiendo usarlos
        const keyboard = Phaser.Input.Keyboard;
        this.input.on(eventos.POINTER_DOWN, ()=>{
            this.input.mouse.requestPointerLock();//Oculta el puntero.
        });
        this.input.on(eventos.POINTER_MOVE, (pointer)=>{
            if(this.input.mouse.locked){
                this.cubix_fondo.x += pointer.movementX;//Se mueve pero solo se ocpupa cuando se blockea el puntero
                this.cubix_fondo.y += pointer.movementY;
            }
        });
        this.input.keyboard.addKey(keyboard.KeyCodes.A)
        .on('down', ()=>{
            this.input.mouse.releasePointerLock();//Muestra el puntero
        });
    }
    update(time, delta) {
    }
}
export default Bootloader;
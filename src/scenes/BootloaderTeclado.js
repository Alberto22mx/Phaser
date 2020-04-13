class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['cubix', 'cubix_fondo']);
    }
    create() {
        this.cubix = this.add.image(100, 100, 'cubix');
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        
        this.teclaA = this.input.keyboard.addKey(keyCodes.A);
        // this.teclaA.on('down', () => {
        //     console.log('Has presionado la tecla A');
        // });
        // this.teclaA.on('up', () => {
        //     console.log('Has soltado la tecla A');
        // });

        // this.teclas = this.input.keyboard.addKeys({
        //     arriba: keyCodes.UP,
        //     abajo: keyCodes.DOWN,
        //     s: keyCodes.S
        // });
        // this.teclas.s.on('down', () => {
        //     console.log('Se ha presionado la S');
        // });
        // this.teclas.arriba.on('down', () => {
        //     console.log('Se ha presionado la ARRIBA');
        // });
        // this.teclas.abajo.on('down', () => {
        //     console.log('Se ha presionado la ABAJO');
        // });
        // this.teclas = this.input.keyboard.addKeys('d,f,UP,DOWN,LEFT,RIGHT');
        // this.teclas.LEFT.on('down', () => {
        //     console.log('Has presionado la tecla LEFT');
        // });
        // this.teclas.f.on('down', () => {
        //     console.log('Has presionado la tecla F');
        // });
        // this.input.keyboard.on('keydown', (evento) => {
        //     if(evento.key === 'e') {
        //         console.log('Se ha tocado la siguiente tecla ', evento);
        //     }
        // });
        // this.cursor = this.input.keyboard.createCursorKeys();
        // this.cursor.left.on('down', () => {
        //     console.log('Se ha clicado el left');
        // });
        // this.cursor.right.on('down', () => {
        //     console.log('Se ha clicado el right');
        // });
        this.combo = this.input.keyboard.createCombo([keyCodes.DOWN, keyCodes.RIGHT], {resetOnMatch: true});
        this.input.keyboard.on('keycombomatch', () => {
            console.log('El combo se ha ejecutado');
        });
    }
    update(time, delta) {
        // if(this.cursor.left.isDown) {
        //     console.log('Se ha presionado la left');
        // }
        // if(this.teclas.arriba.isDown) {
        //     console.log('Se ha presionado la ARRIBA');
        // }
        // if(Phaser.Input.Keyboard.JustDown(this.teclaA)) {
        //     console.log('Has presionado la tecla A');
        // }

        // if(this.teclaA.isDown) {
        //     console.log('Has presionado la tecla A');
        // } else if(this.teclaA.isUp) {
        //     console.log('Has soltado la tecla A');
        // }      
    }
}

export default Bootloader;
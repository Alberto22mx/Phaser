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
        this.load.image(['cubix', 'contenedor']);
    }
    create() {
        this.cubix = this.add.image(300, 100, 'cubix').setDepth(2).setScale(0.7);
        this.contenedor = this.add.image(200, 100, 'contenedor');
        this. texto = this.add.text(90, 90, 'Puntos 0', { color: '#fff', fontSize: 30,});

        const container = this.add.container(0, 0);// Los contenedores agrupan objetos para aplicarles los mismos efectos.
        container.add([//El orden en el que estan los objeto es el orden en el que se van a pintar
            this.contenedor,
            this.cubix,
            this. texto
        ]);

        this.add.tween({
            targets: [container],
            y: 200
        });
    }
    update(time, delta) {
    }
}
export default Bootloader;
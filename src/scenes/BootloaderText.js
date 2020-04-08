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
        /*
        //this.cubix = this.add.image(100, 100, 'cubix');
        const texto = this.add.text(100, 100, 'Hola \nmundo', { // \n = salto de linea
            color: '#000',
            fontSize: 40,
            backgroundColor: '#fff',
            fontStyle: 'Bold', //Italic
            padding: {
                top: 20,
                botoom: 20,
                right: 20,
                left: 20
            },
            //align: 'right'
        });
        texto.setText('Nuevo texto');// Re escribe el texto
        //Podemos manipular el texto como un objeto
        texto.flipX = true;
        texto.alpha = 0.5;
        texto.x = 0;
        */
       const texto = {
            x: 100, 
            y: 100, 
            text: 'Hola \nmundo',
            style: { // \n = salto de linea
                fontFamily: 'IndieFlower',
                color: '#000',
                fontSize: 40,
                backgroundColor: '#fff',
                //fontStyle: 'Bold', //Italic
                padding: {
                    top: 20,
                    botoom: 20,
                    right: 20,
                    left: 20
                },
                //align: 'right'
            }
       }
       this.nuevoTexto = this.make.text(texto);
       this.nuevoTexto.setText('Nuevo Texto');
    }
    update(time, delta) {
    }
}
export default Bootloader;
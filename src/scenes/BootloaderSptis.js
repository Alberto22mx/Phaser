class Bootloader extends Phaser.Scene {
    constructor(){
        super({
            key: 'Bootloader'
        });
    }
    init(){
        console.log("init");
    }
    preload() {
        console.log("preload");
        this.load.path = './src/assets/';//Sirve para crear la ruta de las imagenes
        //load.image('cubix_fondo', 'cubix_fondo.png');//Con esto creamos la imagen
        //this.load.image('cubix');//Tambien phaser internamente crea las extenciones por lo que se puede sar solo su nombre
        this.load.image(['cubix_fondo', 'cubix'])//Esta es otra opción más corta para cargar imagenes equivalente a las dos lineas anteriores
    }
    create(){
        console.log("create");
        this.cubix_fondo = this.add.image(100, 100, 'cubix_fondo');//Crea la imagen y la posiciona
        this.cubix = this.add.image(130, 130, 'cubix');//Crea la imagen y la posiciona

        this.cubix.setOrigin(1);//Cambia el punto de origne de la imagen, 1 toma las coordenadas hasta abajo a la derecha equivalente a transform-origin: bottom left; los valores van de 0 a 1
        this.cubix.flipX = true;//Voltea la imagen, tambien tiene flipY para voltear de cabeza
        this.cubix.setVisible(1);//Oculta una imagen 1 es visible 0 la oculta pero la imagen sigue ahi.
        this.cubix.setScale(2);//Escala una imagen. se puede escalar en X e Y. (2, 1)
        //this.cubix.setAlpha(0);//Transparencia de 1 a 0
        this.cubix.setTint(0xff0000);//Tinta la imagen es decir cambia el color hacia el que se declara pero solo funciona en WEBGl
        this.cubix.x = 200; //Mueve la imagen. tambien exite y
        //this.cubix.angle = 10;//Angulo
        //this.cubix.rotation = 10;//rotación
        this.cubix.setDepth(1);//Propiedades iguales a z-index
        this.cubix_fondo.setDepth(2);//Propiedades iguales a z-index
        //console.log(this.cubix);//Podemos ver que propiedades tiene.
    }
    update(time, delta){

    }
}
export default Bootloader;
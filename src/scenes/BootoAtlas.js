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
//Crea una animación        
        this.load.atlas('tomato', 'tomato/tomato.png', 'tomato/tomato_atlas.json');
        //Se puede crear una animación desde un json
        this.load.animation('tomatoAnim', 'tomato/tomato_anim.json');
    }
    create() {
        this.tomato = this.add.sprite(100, 100, 'tomato').setScale(2);//Se carga el sprite
        this.tomato.anims.play('tomato_walk');// Se tiene que tener cuidado con los nombre ya que si coinciden el nombre de la animación y el sprite no funcionara la animación, el nombre de la animación esta en el archivo json en key
//Todo esto crea una animación
        // this.tomato = this.add.sprite(100, 100, 'tomato').setScale(2);//Se carga el sprite
        // //this.tomato_spacing = this.add.sprite(100, 300, 'tomato_spacing', 3).setScale(2);//Ejemplo con spacing
        // this.anims.create({
        //     key: 'tomato_walk',
        //     frames: this.anims.generateFrameNames('tomato', {//Genera los frames del tomato
        //         prefix: 'tomato_animation_1_',
        //         start: 0,//Indica el inicio del frame
        //         end: 7,//Indica el final del frame
        //         //suffix: '.png'
        //     }),
        //     repeat: 3, //Indica cuantas veces se va a repetir la animación, angulnos parametros son: numero de veces o Infinity o poner -1
        //     frameRate: 15//Indica la velocidad
        // });
        // this.tomato.anims.play('tomato_walk');//Crea la animación
        // this.anims.play('tomato_walk', this.tomato);;//Crea la animación
    }
    update(time, delta) {
    }
}
export default Bootloader;
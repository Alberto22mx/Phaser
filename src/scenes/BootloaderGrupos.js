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
        this.load.atlas('monedas', 'moneda/monedas.png', 'moneda/monedas_atlas.json');
        this.load.animation('monedaAnim', 'moneda/monedas_anim.json');
    }
    create() {
        //this.moneda = this.add.sprite(100, 100, 'monedas').setScale(2);//Se carga el sprite
        
        //Creación del grupo
        this.grupo = this.physics.add.staticGroup({// Se agrega fisica tambien se puede usar add.staticGroup o add.group
            key: 'monedas',
            repeat: 5,//Repite la moneda 5 veces pero estan en el mismo lugar por lo que no se ven
            //maxSize: 3,//Limita la cantidad de monedas
            setXY: {
                x: 150,
                y: 150,
                stepX: 50,
                //stepY: 50
            },
            removeCallback: () => {
                this.grupo.create(200, 100, 'monedas');
            }
        });//Dentro se puede agregar con un json
        //una forma de agregar la moneda a un grupo
        //this.grupo.add(this.moneda);
        //Otra forma de crear las monedas
        //this.grupo.create(150, 200, 'monedas');
        console.log(this.grupo);//Permite ver las propiedades
        //this.grupo.anims.play('moneda');//Inicia la animación para una sola moneda
        //Nos permite aplicar a todas las monedas los mismo estilos
        this.grupo.children.iterate((moneda)=>{
            moneda.setScale(2);
            //moneda.body.setAllowGravity(false);//No funciona, debe desactivar la gravedad
            //moneda.anims.play('moneda');//Anima todas las monedas
        });
        this.add.tween({
            targets: this.grupo.getChildren(),
            y: 200,
            yoyo: true,
            duration: 500,
            repeat: -1,
            ease: 'Power1'
        });
        this.grupo.getChildren()[1].destroy();
        this.grupo.playAnimation('moneda');// Inicio animación
    }
    update(time, delta) {
    }
}
export default Bootloader;
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
        // console.log(eventos);//Imprime los eventos
        this.input.on(eventos.POINTER_DOWN, (evento)=>{
            console.log("Se dio click");
            //console.log(evento);//Se las propiedades que tiene el evento
        });
        this.input.on(eventos.POINTER_UP, (evento)=>{
            console.log("Se levanto el puntero");
            //console.log(evento);//Se las propiedades que tiene el evento
        });
        this.input.on(eventos.POINTER_MOVE, (evento)=>{
            //console.log("Se ha movido");
            //console.log(evento);//Se las propiedades que tiene el evento
            // if(evento.isDown){
            //     this.cubix.x = evento.worldX;//Obtiene las coordenadas del cursor en X
            //     this.cubix.y = evento.worldY;//Obtiene las coordenadas del cursor en Y
            // }
        });
        this.input.on(eventos.GAME_OVER, ()=>{//Detecta cuandoentra el puentero al lienzo
            // console.log("Entraste en el lienzo");
        });
        this.input.on(eventos.GAME_OUT, ()=>{//Detecta sale el puentero al lienzo
            // console.log("Saliste en el lienzo");
        });
        this.input.on(eventos.POINTER_DOWN_OUTSIDE, ()=>{//Detecta das click con el puentero fuera del lienzo
            //console.log("Click fuera");
        });
        this.input.on(eventos.POINTER_UP_OUTSIDE, ()=>{//Detecta das sueltas el click con el puentero fuera del lienzo
            /* console.log("Solto click fuera"); */
        });
        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObjet)=>{//Detecta si es clicado cualquier objeto, recibe dos parametros pointer y gameObjet
            // this.cubix.setTint(0xff0000);
            // console.log(pointer);
            // console.log(gameObjet);
            //gameObjet.setTint(0x00ff00);
        });
        this.input.on(eventos.GAMEOBJECT_UP, (pointer, gameObjet)=>{//Detecta si es clicado cualquier objeto, recibe dos parametros pointer y gameObjet
            //gameObjet.clearTint();
        });
        this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObjet)=>{//Detecta cuando el cursor entra a un objeto
            //gameObjet.setTint(0xff0000);
        });
        this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObjet)=>{//Detecta cuando el cursor sale a un objeto
            //gameObjet.clearTint();
        });
        this.cubix_fondo.on(eventos.POINTER_DOWN, function(){//Se detecta un elemento en especifico, es necesario usar setInteractive en el elemento
            this.setTint(0xff0000);
        });
    }
    update(time, delta) {
    }
}
export default Bootloader;
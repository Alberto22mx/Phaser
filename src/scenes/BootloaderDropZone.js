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
        this.load.image(['cubix', 'cubix_fondo', 'drop'])//Esta es otra opción más corta para cargar imagenes equivalente a las dos lineas anteriores
    }
    create() {
        this.cubix = this.add.image(100, 100, 'cubix').setInteractive();
        this.drop = this.add.image(100, 200, 'drop').setDepth(-1).setInteractive();
        this.drop.input.dropZone = true;//Crea una zona dropzone para poder colocar un objeto
        const eventos = Phaser.Input.Events;//Tiene los eventos por defecto y se recomiendo usarlos
        const keyboard = Phaser.Input.Keyboard;
        this.input.setDraggable(this.cubix);//Permite que un objeto se pueda arrastras
        this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY)=>{//Se ejecuta al arrastras un objeto
            obj.setScale(0.9);
        });
        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY)=>{//Permite arrastras un objeto
            obj.x = dragX;
            obj.y = dragY;
        });
        this.input.on(eventos.DRAG_END, (pointer, obj, drapzone)=>{//Se ejecuta al soltar un objeto y entra en la zona drop
            if(!drapzone){
                obj.x = obj.input.dragStartX;//Devuelva a su lugar original
                obj.y = obj.input.dragStartY;//Devuelva a su lugar original
            }
            obj.setScale(1);
        });
        this.input.on(eventos.DRAG_ENTER, (pointer, obj, drapzone)=>{//Se activa cuando un drag entra en un drop
            drapzone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, drapzone)=>{//Se activa cuando un drag entra en un drop
            drapzone.clearTint();
        });
        this.input.on(eventos.DROP, (pointer, obj, dropzone)=>{//Permite posicionar automaticamente el objeto detro de la zona drop
            obj.x = dropzone.x;
            obj.y = dropzone.y;
        });
    }
    update(time, delta) {
    }
}
export default Bootloader;
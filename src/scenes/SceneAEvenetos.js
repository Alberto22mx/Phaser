class SceneAEventos extends Phaser.Scene {
    constructor() {
        super({
            key: 'SceneAEventos'
        });
    }
    init(dato) {
        console.log("SceneAEventos" + dato);//Recibe los datos
    }

    create() {
        this.registry.events.emit('evento', 'Dato'); // Ejecuta el evento y puede pasar un dato
    }
    update(time, delta) {
        //console.log(time);
    }
}
export default SceneAEventos;
import SceneC from './../scenes/SceneC.js';
class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
    }
    init() {
        console.log("Bootloader");
    }
    preload() {
        this.load.path = './src/assets/';//Sirve para crear la ruta de las imagenes
        this.load.image(['imgA', 'imgB', 'imgC']);
    }
    create() {
        this.scene.add('SceneC', SceneC);//Agrega una scena de forma dinamica

        this.scene.start('SceneA');// Cambia a la scena ScenaA
        this.scene.launch('SceneB');// Permite tener las scenas en paralelo
        this.scene.launch('SceneC');// Permite tener las scenas en paralelo

        

        console.log(this.scene.manager.scenes.map( x => x.scene.key));
        /*
        this.scene.sleep('SceneA');//Duerme una scena, la llama pero no la renderiza
        this.scene.wake('SceneA');//Levanta una scena dormida

        setTimeout(()=>{
            this.scene.pause('SceneA');//Pausa
        }, 2000);
        setTimeout(()=>{
            this.scene.resume('SceneB');//Des pausa
        }, 4000);

        this.scene.stop('SceneC'); //Pausa una scena pero no la quita
        this.scene.remove('SceneC'); // Elimina una scena

        this.scene.moveDown('SceneC');//Mueve una scena una hacia abajo
        this.scene.moveUp('SceneA');//Mueve una scena una hacia arriba
        this.scene.moveUp('SceneA');

        console.log(this.scene.manager.scenes.map( x => x.scene.key));//Imprime por consola el array de las scenas
        this.sceneC = 'SceneC';
        this.scene.swapPosition('SceneA', this.sceneC); // Intercambia una scena por otra
        this.scene.swapPosition('SceneC', 'SceneB');

        this.scene.bringToTop('SceneA');//Brica por encima de todo
        this.scene.bringToTop('SceneB');
        this.scene.moveAbove('SceneA', 'SceneC');//Intercambia una por otra pero al derecho o al reves
        this.scene.moveBelow('SceneA', 'SceneC');//Intercambia una por otra pero al derecho o al reves

        this.scene.sendToBack('SceneC');//Manda atras de todo
        */
    }
    update(time, delta) {
    }
}
export default Bootloader;
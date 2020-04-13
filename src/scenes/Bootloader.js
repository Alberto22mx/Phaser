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
        this.load.path = './src/assets/';
        this.load.image(['bomb', 'life', 'tomato_item'])
    }
    create() {
        this.bomb = this.add.image(10, 10, 'bomb').setOrigin(0);
        this.bomb = this.add.image(200, 200, 'life');
    }
    update(time, delta) {
    }
}
export default Bootloader;
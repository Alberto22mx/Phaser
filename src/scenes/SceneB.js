class SceneB extends Phaser.Scene {
    constructor() {
        super({
            key: 'SceneB'
        });
    }
    init() {
        console.log("SceneB");
    }
    //El preload se aguarda en una sola scena
    create() {
        this.add.image(100, 100, 'imgB');
    }
    update(time, delta) {
    }
}
export default SceneB;
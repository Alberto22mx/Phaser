class SceneA extends Phaser.Scene {
    constructor() {
        super({
            key: 'SceneA'
        });
    }
    init() {
        console.log("SceneA");
    }
    //El preload se aguarda en una sola scena
    create() {
        this.add.image(100, 100, 'imgA');
    }
    update(time, delta) {
        //console.log(time);
    }
}
export default SceneA;
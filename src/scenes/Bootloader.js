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
    }
    create() {
        // Primero se tiene que registrar el evento y luego emitirlo, para solucionar este problema podemos registrar en preload
        this.registry.events.on('evento', (dato)=>{
            console.log('Se ha emitido el evento', dato);
        }); // Se crea un escucha y se le pone como nombre 'evento' el nombre puede ser caulquiera
        this.registry.events.emit('evento', 'Dato'); // Ejecuta el evento y puede pasar un dato








        // this.data.set('vidas', 3); // Setea valores de una propiedad
        // this.data.set('monedas', 3);
        // this.data.setValue('vidas', 5); // Setea valores de una propiedad

        // this.data.list.vidas += 1; // Suma vidas o resta vidas
        // this.data.remove('monedas'); // remueve una propiedad
        // console.log(this.data.list.vidas); // Obtenermos el valor de vidas
        // console.log(this.data.get('vidas')); // Obtenermos el valor de vidas solo que se usa get
        // console.log(this.data.getAll()); //Trae un objeto con todos los valores
        // console.log(this.data.query('mon')); // Realiza una busqueda que conincida con las palabras que se le indiquen
        // this.data.reset(); // Borra todo
        // console.log(this.data.query('mon')); 
    }
    update(time, delta) {
    }
}
export default Bootloader;
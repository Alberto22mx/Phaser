import Bootloader from './scenes/Bootloader.js';
//Esta es la configuración que tendra tu juego los atributos son muy explicitos.
const config = {
    //Con figuración opcional
    title: 'Curso phaser', //Titulo de tu juego
    url: 'http://google.es',//Pagina de tu juego
    version: '0.0.1', //Versión de tu juego
    //Configuración necesaria
    typo: Phaser.AUTO, //Tipo de rencerisado existen Phaser.AUTO, Phaser.CANVAS y Phaser.WEBGL
    width: 640,
    height: 360,
    parent: 'contenedor', //En esta opción se tiene que colocar el id del div de en donde se va a renderizar el juego
    pixelArt: true, //Solo se usa si esta desarrollado para pixelart
    backgroundColor: '#34495e', //Cambia el color de fondo del juego
    //Esto edita la información mostrada del proyecto en consola.
    banner: {
        hidePhaser: true,
        text: '#fff00f',
        background: ['#ff0000'] //Pedemos pasar varios colores
    },
    //Aqui se crean los mundos de phaser por escenas
    scene: [Bootloader]
};

//Por ultimos instanciamos Phaser para crear el primer proyecto
const game = new Phaser.Game(config);

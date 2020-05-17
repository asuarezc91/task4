var articulo = new Articulo();
var articulo2 = new Articulo();

//Artículo 1

function Tittle() {
    var tituloUser = document.getElementById("titulo").value;
    pelicula.titulo = tituloUser;
    console.log(`El título es : ${pelicula.titulo}`);
}

function Anio() {
    var anioUser = document.getElementById("anio").value;
    pelicula.anio = anioUser;
    console.log(`El año es : ${pelicula.anio}`);
}

function numCopias() {
    var numCopiasUser = document.getElementById("numCopias").value;
    var NumcopiasUserN = Number(numCopiasUser);
    pelicula.numCopias = NumcopiasUserN;
    console.log(`El número de copias es : ${pelicula.numCopias}`);
    articulo.hayCopias();
}


function genero() {
    var generoUser = document.getElementById("genero").value;
    pelicula.genero = generoUser;
    console.log(`El genero es : ${pelicula.genero}`);
}

function tipoArt() {
    var tipoArtUser = document.getElementById("tipoArt").value;
    pelicula.tipoArt = tipoArtUser;
    console.log(`El tipo de artículo es : ${pelicula.tipoArt}`);
}


function incrementCopias() {
    var incrementCopiasUser = document.getElementById("incrementarCopias").value;
    var incrementCopiasUserN = Number(incrementCopiasUser);
    pelicula.incrementarCopias(incrementCopiasUserN);
}

class Pelicula extends Articulo {

    constructor(titulo) {
        super(titulo);

    }

    get director() {
        return this._director;
    }
    set director(director) {
        this._director = director;
    }
    get actorPrinc() {
        return this._director;
    }
    set actorPrinc(actorPrinc) {
        this._actorPrinc = actorPrinc;
    }
    get actrizPrinc() {
        return this._actrizPrinc;
    }
    set actrizPrinc(actrizPrinc) {
        this._actrizPrinc = actrizPrinc;
    }
    get distribuidora() {
        return this._distribuidora;
    }
    set distribuidora(distribuidora) {
        this._distribuidora = distribuidora;
    }
    mostrarInfo() {
        console.log(pelicula);
    }
}

var pelicula = new Pelicula();


function director() {
    var directorUser = document.getElementById("director").value;
    pelicula.director = directorUser;
    console.log(`El director de la película es : ${pelicula.director}`);
}


function actorPrinc() {
    var actorPrincUser = document.getElementById("actorPrinc").value;
    pelicula.actorPrinc = actorPrincUser;
    console.log(`El actor principal de la película es : ${pelicula.actorPrinc}`);
}



function actrizPrinc() {
    var actrizPrincUser = document.getElementById("actrizPrinc").value;
    pelicula.actrizPrinc = actrizPrincUser;
    console.log(`La actriz principal de la película es : ${pelicula.actrizPrinc}`);
}


function distribuidora() {
    var distribuidoraUser = document.getElementById("distribuidora").value;
    pelicula.distribuidora = distribuidoraUser;
    console.log(`La distribuidora de la película es : ${pelicula.distribuidora}`);
}


function mostrarPelicula() {
    pelicula.mostrarInfo();
}
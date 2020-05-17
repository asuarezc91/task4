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


//Disco 
class Disco extends Articulo {
    constructor(titulo) {
        super(titulo);

    }
    get grupoArtistaPrinc() {
        return this._grupoArtistaPrinc;
    }
    set grupoArtistaPrinc(grupoArtistaPrinc) {
        this._grupoArtistaPrinc = grupoArtistaPrinc;
    }
    get productora() {
        return this._productora;
    }
    set productora(productora) {
        this._productora = productora;
    }
    mostrarInfo() {
        console.log(disco);
    }
}

var disco = new Disco();


function grupoArtistaPrinc() {
    var grupoArtistaPrincUser = document.getElementById("grupoArtistaPrinc").value;
    disco.grupoArtistaPrinc = grupoArtistaPrincUser;
    console.log(`El artista principal del disco es  : ${disco.grupoArtistaPrinc}`);
}

function productora() {
    var productoraUser = document.getElementById("productora").value;
    disco.productora = productoraUser;
    console.log(`La productora del disco es : ${disco.productora}`);
}


function mostrarDisco() {
    disco.mostrarInfo();
}
class Articulo {

    constructor() {



    }
    get titulo() {
        return this._titulo;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    get anio() {
        return this._anio;
    }
    set anio(anio) {
        this._anio = anio;
    }
    get numCopias() {
        return this._numCopias;
    }
    set numCopias(numCopias) {
        this._numCopias = numCopias;
    }
    get genero() {
        return this._genero;
    }
    set genero(genero) {
        this._genero = genero;
    }
    get tipoArt() {
        return this._tipoArt;
    }
    set tipoArt(tipoArt) {
        this._tipoArt = tipoArt;
    }
    hayCopias() {
        if (this.numCopias === 0) {
            return false;
        } else {
            return true;
        }
    }

    incrementarCopias(numNuevas) {
        var newCopies = this.numCopias + numNuevas;
        this.numCopias = newCopies;
        console.log(`El nuevo número de copias es : ${articulo.numCopias}`);
    }

    comparaTitulo(otroArticulo) {
        try {
            var items = [
                otroArticulo.titulo,
                this.titulo
            ];
            if (items[0] === "" || items[1] === "") {
                var Error = {
                    message: "Inserte dos títulos por favor"
                };
                throw Error;
            } else {
                items.sort(function(a, b) {
                    if (a > b) {
                        console.log(1)
                        return 1;
                    }
                    if (a < b) {
                        console.log(-1)
                        return -1;
                    }
                    console.log(0)
                    return 0;
                });
            }
        } catch (err) {
            console.log("Message: ", err.message);
        }
    }

    comparaAnio(otroArticulo) {
        try {
            var anioArt1 = Number(this.anio);
            var anioArt2 = Number(otroArticulo.anio);
            var items = [
                anioArt1,
                anioArt2
            ];
            console.log(items[0]);
            console.log(items[1]);
            if (items[0] === 0 || items[1] === 0) {
                var Error = {
                    message: "Inserte dos años correctamente por favor"
                };
                throw Error;
            } else {
                items.sort(function(a, b) {
                    if (a > b) {
                        console.log(1)
                        return 1;
                    }
                    if (a < b) {
                        console.log(-1)
                        return -1;
                    }
                    console.log(0)
                    return 0;
                });
            }
        } catch (err) {
            console.log("Message: ", err.message);
        }
    }
}


var articulo = new Articulo();
var articulo2 = new Articulo();

//Artículo 1

function Tittle() {
    var tituloUser = document.getElementById("titulo").value;
    articulo.titulo = tituloUser;
    console.log(`El título es : ${articulo.titulo}`);
}

function Anio() {
    var anioUser = document.getElementById("anio").value;
    articulo.anio = anioUser;
    console.log(`El año es : ${articulo.anio}`);
}

function numCopias() {
    var numCopiasUser = document.getElementById("numCopias").value;
    var NumcopiasUserN = Number(numCopiasUser);
    articulo.numCopias = NumcopiasUserN;
    console.log(`El número de copias es : ${articulo.numCopias}`);
    articulo.hayCopias();
}


function genero() {
    var generoUser = document.getElementById("genero").value;
    articulo.genero = generoUser;
    console.log(`El genero es : ${articulo.genero}`);
}

function tipoArt() {
    var tipoArtUser = document.getElementById("tipoArt").value;
    articulo.tipoArt = tipoArtUser;
    console.log(`El tipo de artículo es : ${articulo.tipoArt}`);
}


function incrementCopias() {
    var incrementCopiasUser = document.getElementById("incrementarCopias").value;
    var incrementCopiasUserN = Number(incrementCopiasUser);
    articulo.incrementarCopias(incrementCopiasUserN);
}


// Artículo 2

function OtroTittle() {
    var tituloUser = document.getElementById("otrotitulo").value;
    articulo2.titulo = tituloUser;
    console.log(`El título es : ${articulo2.titulo}`);
}


function OtroAnio() {
    var anioUser = document.getElementById("otroanio").value;
    articulo2.anio = anioUser;
    console.log(`El año es : ${articulo2.anio}`);
}

function OtronumCopias() {
    var numCopiasUser = document.getElementById("otronumCopias").value;
    var NumcopiasUserN = Number(numCopiasUser);
    articulo2.numCopias = NumcopiasUserN;
    console.log(`El número de copias es : ${articulo2.numCopias}`);
    articulo.hayCopias();
}

function Otrogenero() {
    var generoUser = document.getElementById("otrogenero").value;
    articulo2.genero = generoUser;
    console.log(`El genero es : ${articulo2.genero}`);
}

function OtrotipoArt() {
    var tipoArtUser = document.getElementById("otrotipoArt").value;
    articulo2.tipoArt = tipoArtUser;
    console.log(`El tipo de artículo es : ${articulo2.tipoArt}`);
}

function comparaTitulo() {
    articulo.comparaTitulo(articulo2);
}

function comparaAnio() {
    articulo.comparaAnio(articulo2);
}
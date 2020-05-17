// Llenamos la lista con dos Películas, dos discos y algunos artículos
var discOne = new Disco();
discOne.titulo = "Las que no iban a salir";
discOne.anio = 2020;
discOne.numCopias = 1;
discOne.genero = "urbano";
discOne.tipoArt = "disco";
discOne.grupoArtistaPrinc = "Bad Bunny";
discOne.productora = "Vevo";

var discTwo = new Disco();
discTwo.titulo = "X 100pre";
discTwo.anio = 2018;
discTwo.numCopias = 3;
discTwo.genero = "urbano";
discTwo.tipoArt = "disco";
discTwo.grupoArtistaPrinc = "Myke Towers";
discTwo.productora = "Rimas Entertainment";

var filmOne = new Pelicula();
filmOne.titulo = "Star Wars: Episodio IV";
filmOne.anio = 1977;
filmOne.numCopias = 1;
filmOne.genero = "acción";
filmOne.tipoArt = "pelicula";
filmOne.director = "George Lucas";
filmOne.actorPrinc = "Harrison Ford";
filmOne.actrizPrinc = "Carrie Fisher";
filmOne.distribuidora = "20th Century Studios";

var filmTwo = new Pelicula();
filmTwo.titulo = "Rocky Balboa";
filmTwo.anio = 2006;
filmTwo.numCopias = 2;
filmTwo.genero = "boxeo";
filmTwo.tipoArt = "pelicula";
filmTwo.director = "Sylvester Stallone";
filmTwo.actorPrinc = "Sylvester Stallone";
filmTwo.actrizPrinc = "Talia Shire";
filmTwo.distribuidora = "Columbia Pictures";

var serieVikingos = {
    titulo: "Vikingos",
    anio: 2013,
    tipoArt: "serie",
    genero: "Novela histórica",
    actorPrincipal: "Ragnar Lothbrok"
}

var figuraGoku = {
    titulo: "Goku",
    anio: 2015,
    tipoArt: "figura",
    color: "rojo",
}

var videojuego = {
    titulo: "Pes 2020",
    anio: 2020,
    tipoArt: "videjuego",
    compania: "Konami",
}

var camiseta = {
    titulo: "Nike Shirt",
    anio: 2018,
    tipoArt: "camiseta",
    compania: "Nike",
}

var pc = {
    titulo: "PC Gamer",
    anio: 2019,
    tipoArt: "Ordenador personal",
    compania: "AMD",
}

var teclado = {
    titulo: "Teclado gamer",
    anio: 2017,
    tipoArt: "Teclado",
    compania: "Razer",
}

var discFilmsInitial = [discOne, discTwo, filmOne, filmTwo, serieVikingos, figuraGoku, videojuego, camiseta, pc, teclado];
this.almacen = discFilmsInitial;
//Creamos nuestro objeto lista con el array que contiene los artículos
var listaArticulos = new Lista(this.almacen);
//Comprobamos si la lista está llena o vacía
listaArticulos.estaVacia();
listaArticulos.estaLLena();
//Comprobamos el número de elementos de la lista
listaArticulos.tam();
//Comprobamos la capacidad de la lista
listaArticulos.capacidad();
//Comprobamos los huecos disponibles en la lista
listaArticulos.disponible();


class Tienda {
    constructor() {
        this.almacen = listaArticulos.array;
        this.nombreTienda = "Videoclub Oliver";
    }
    get nombreTienda() {
        return this._nombreTienda;
    }
    set nombreTienda(nombreTienda) {
        this._nombreTienda = nombreTienda;
    }
    get almacen() {
        return this._almacen;
    }
    set almacen(almacen) {
        this._almacen = almacen;
    }

    tam() {
        console.log("El número de artículos en la tiendas es " + this.almacen.length);
    }

    insertarArticulo(art) {
        if (this.almacen.length < 1) {
            this.almacen.push(art);
        } else {
            //Creamos una variable para comprobar si rellenamos el almacén con el núevo artículo o no
            var rellena = true;
            for (let i = 0; i < this.almacen.length; i++) {
                const element = this.almacen[i];
                if (art.titulo === element.titulo && art.anio === element.anio) {
                    alert("no puede hacer dos artículos con el mismo título y el mismo año");
                    rellena = false;
                }
            }
            if (rellena != false && this.almacen.length < 10) {
                listaArticulos.insertar(art);
            } else {
                console.log("no se pueden insertar más artículos en el almacén")
            }

        }
        console.log("El número de artículos en la tiendas es " + this.almacen.length);
        console.log(this.almacen);

    }

    buscarArticulo(titBus, anio) {
        //Creamos una variable para comprobar si encuentra el artículo en el almacén o no
        var encuentra = false;
        for (let i = 0; i < this.almacen.length; i++) {
            const element = this.almacen[i];
            if (titBus === element.titulo && anio === element.anio) {
                console.log(element);
                encuentra = true;
            }
        }
        //Si no lo encuentra devolvemos null
        if (encuentra === false) {
            console.log("No se encuentra el artículo en la tienda");
            return null;
        }
    }
    borrarArticulo(titBor, ano) {
        try {
            let newAlmacen = this.almacen.filter(number => number.titulo !== titBor && number.anio !== ano);
            let newAlmacenLenght = newAlmacen.length;
            //A partir de la comparación de la longitud del nuevo almacen después de intentar borrar y el almacén original 
            //podemos ver si se pudo borrar o no el artículo 
            if (newAlmacenLenght === this.almacen.length) {
                var Error = {
                    message: "No hay ningún artículo a eliminar por ese título y año"
                };
                throw Error;
            } else {
                this.almacen = newAlmacen;
                console.log(this.almacen);
                return true;
            }
        } catch (err) {
            console.log("Message: ", err.message);
            return false;
        }
    }
    ordenarAlmacen() {
        this.almacen.sort((unArticulo, otroArticulo) => unArticulo.titulo.localeCompare(otroArticulo.titulo));
        console.log(this.almacen);
    }
    mostrarAlmacen() {
        //Array vacío para almacenar el nuevo orden de los artículos
        let newOrden = [];
        //Primero añadimos las películas
        for (let i = 0; i < this.almacen.length; i++) {
            const element = this.almacen[i];
            if (element.tipoArt === "pelicula") {
                newOrden.push(element);
            }
        }
        //Luego añadimos los discos
        for (let i = 0; i < this.almacen.length; i++) {
            const element = this.almacen[i];
            if (element.tipoArt === "disco") {
                newOrden.push(element);
            }
        }
        //Luego añadimos el resto de artículos
        for (let i = 0; i < this.almacen.length; i++) {
            const element = this.almacen[i];
            if (element.tipoArt !== "disco" && element.tipoArt !== "pelicula") {
                newOrden.push(element);
            }
        }
        this.almacen = newOrden;
        console.log(this.almacen);
    }
}
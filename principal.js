    //Creamos el objeto tienda
    var shop = new Tienda();
    //Comprobamos el tamaño del almacén
    shop.tam();


    //Para enviar un artículo al almacén de la tienda
    function sendArt() {
        //Recogemos el value de todos los elementos del html
        //propiedades generales
        var tittle = document.getElementById("titulo").value;
        var year = document.getElementById("anio").value;
        var yearN = Number(year);
        var numberCopies = document.getElementById("numCopias").value;
        var numberCopiesN = Number(numberCopies);

        var gender = document.getElementById("genero").value;
        var typeArt = document.getElementById("tipoArt").value;

        //pelicula
        var director = document.getElementById("director").value;
        var mainActor = document.getElementById("actorPrinc").value;
        var mainActress = document.getElementById("actrizPrinc").value;
        var distributor = document.getElementById("distribuidora").value;
        //disco
        var mainArtisGroup = document.getElementById("grupoArtistaPrinc").value;
        var producer = document.getElementById("productora").value;

        //Crearemos un objeto de tipo disco o de tipo película según nos venga 
        var sel = document.getElementById('tipoArt').value;

        if (sel === "disco") {
            //Creamos el objeto disco
            var newDisc = new Disco();
            newDisc.titulo = tittle;
            newDisc.anio = yearN;
            newDisc.numCopias = numberCopiesN;
            newDisc.genero = gender;
            newDisc.tipoArt = typeArt;
            newDisc.grupoArtistaPrinc = mainArtisGroup;
            newDisc.productora = producer;
            shop.insertarArticulo(newDisc);
        } else if (sel === "pelicula") {
            //creamos el objeto película
            var newFilm = new Pelicula();
            newFilm.titulo = tittle;
            newFilm.anio = yearN;
            newFilm.numCopias = numberCopiesN;
            newFilm.genero = gender;
            newFilm.tipoArt = typeArt;
            newFilm.director = director;
            newFilm.actorPrinc = mainActor;
            newFilm.actrizPrinc = mainActress;
            newFilm.distribuidora = distributor;
            shop.insertarArticulo(newFilm);
        } else {
            alert("Debe de elegir un tipo de artículo");
        }
    }


    //Buscamos el artículo por título y año 
    function SearchArt() {
        var tittleSearch = document.getElementById("tittleSearch").value;
        var yearSearch = document.getElementById("yearSearch").value;
        var yearSearchN = Number(yearSearch);
        shop.buscarArticulo(tittleSearch, yearSearchN);
    }


    //Borramos el artículo por título y año 
    function DeleteArt() {
        var tittleSearch = document.getElementById("tittleDelete").value;
        var yearDelete = document.getElementById("yearDelete").value;
        var yearDeleteN = Number(yearDelete);
        shop.borrarArticulo(tittleSearch, yearDeleteN);
    }

    function ordenAlmacen() {
        shop.ordenarAlmacen();
    }

    function muestraAlmacen() {
        shop.mostrarAlmacen();
    }

    //Mostramos un menú u otro en función de el tipo de artículo que elija el usuario
    function selectArt() {
        var sel = document.getElementById('tipoArt').value;
        if (sel === "disco") {
            document.getElementById('peliMenu').style.display = "none";
            document.getElementById('discoMenu').style.display = "block";
        } else {
            document.getElementById('peliMenu').style.display = "block";
            document.getElementById('discoMenu').style.display = "none";
        }
    }

    //Función que se instancia cuando el usuario hace click en el botón "Insertar elemento en"
    function InsertEn() {
        // Índice indicado por el usuario y que se va a enviar al listado 
        var indexEn = document.getElementById("indexEn");
        var index = indexEn.value;
        //Recogemos el value de todos los elementos del html
        //propiedades generales
        var tittle = document.getElementById("titulo").value;
        var year = document.getElementById("anio").value;
        var yearN = Number(year);
        var numberCopies = document.getElementById("numCopias").value;
        var numberCopiesN = Number(numberCopies);

        var gender = document.getElementById("genero").value;
        var typeArt = document.getElementById("tipoArt").value;

        //pelicula
        var director = document.getElementById("director").value;
        var mainActor = document.getElementById("actorPrinc").value;
        var mainActress = document.getElementById("actrizPrinc").value;
        var distributor = document.getElementById("distribuidora").value;
        //disco
        var mainArtisGroup = document.getElementById("grupoArtistaPrinc").value;
        var producer = document.getElementById("productora").value;

        //Crearemos un objeto de tipo disco o de tipo película según nos venga 
        var sel = document.getElementById('tipoArt').value;
        if (sel === "disco") {
            //Creamos el objeto disco
            var newDisc = new Disco();
            newDisc.titulo = tittle;
            newDisc.anio = yearN;
            newDisc.numCopias = numberCopiesN;
            newDisc.genero = gender;
            newDisc.tipoArt = typeArt;
            newDisc.grupoArtistaPrinc = mainArtisGroup;
            newDisc.productora = producer;
            //Enviamos el disco y el índice donde queremos colocarla 
            listaArticulos.insertarEn(newDisc, index);
        } else if (sel === "pelicula") {
            //creamos el objeto película
            var newFilm = new Pelicula();
            newFilm.titulo = tittle;
            newFilm.anio = yearN;
            newFilm.numCopias = numberCopiesN;
            newFilm.genero = gender;
            newFilm.tipoArt = typeArt;
            newFilm.director = director;
            newFilm.actorPrinc = mainActor;
            newFilm.actrizPrinc = mainActress;
            newFilm.distribuidora = distributor;
            //Enviamos la película y el índice donde queremos colocarla 
            listaArticulos.insertarEn(newFilm, index);
        } else {
            alert("Debe de elegir un tipo de artículo");
        }

    }



    //Función que se instancia cuando el usuario hace click en el botón "Obtener elemento"
    function GetElement() {
        var getElement = document.getElementById("getElement");
        var index = getElement.value;
        listaArticulos.obtenerElem(index);
    }

    //Función que se instancia cuando el usuario hace click en el botón "Obtener índice"
    function GetIndex() {
        //Recogemos el value de todos los elementos del html
        //propiedades generales
        var tittle = document.getElementById("titulo").value;
        var year = document.getElementById("anio").value;
        var yearN = Number(year);
        var numberCopies = document.getElementById("numCopias").value;
        var numberCopiesN = Number(numberCopies);
        var gender = document.getElementById("genero").value;
        var typeArt = document.getElementById("tipoArt").value;

        //pelicula
        var director = document.getElementById("director").value;
        var mainActor = document.getElementById("actorPrinc").value;
        var mainActress = document.getElementById("actrizPrinc").value;
        var distributor = document.getElementById("distribuidora").value;
        //disco
        var mainArtisGroup = document.getElementById("grupoArtistaPrinc").value;
        var producer = document.getElementById("productora").value;

        //Crearemos un objeto de tipo disco o de tipo película según nos venga 
        var sel = document.getElementById('tipoArt').value;

        if (sel === "disco") {
            //Creamos el objeto disco
            var newDisc = new Disco();
            newDisc.titulo = tittle;
            newDisc.anio = yearN;
            newDisc.numCopias = numberCopiesN;
            newDisc.genero = gender;
            newDisc.tipoArt = typeArt;
            newDisc.grupoArtistaPrinc = mainArtisGroup;
            newDisc.productora = producer;
            //Enviamos el disco   
            listaArticulos.obtenerIndex(newDisc);
        } else if (sel === "pelicula") {
            //creamos el objeto película
            var newFilm = new Pelicula();
            newFilm.titulo = tittle;
            newFilm.anio = yearN;
            newFilm.numCopias = numberCopiesN;
            newFilm.genero = gender;
            newFilm.tipoArt = typeArt;
            newFilm.director = director;
            newFilm.actorPrinc = mainActor;
            newFilm.actrizPrinc = mainActress;
            newFilm.distribuidora = distributor;
            //Enviamos la película 
            listaArticulos.obtenerIndex(newFilm);
        }
    }

    //Función que se instancia cuando el usuario hace click en el botón "Borrar elemento"
    function Delete() {
        var Delete = document.getElementById("Delete").value;
        var DeleteN = Number(Delete);
        if (Delete === "") {
            alert("Debe colocar un índice");
        } else {
            listaArticulos.borrar(DeleteN);
        }

    }


    //Función que se instancia cuando el usuario hace click en el botón "Borrar elemento"
    function DeleteElement() {
        //Recogemos el value de todos los elementos del html
        //propiedades generales
        var tittle = document.getElementById("titulo").value;
        var year = document.getElementById("anio").value;
        var yearN = Number(year);
        var numberCopies = document.getElementById("numCopias").value;
        var numberCopiesN = Number(numberCopies);
        var gender = document.getElementById("genero").value;
        var typeArt = document.getElementById("tipoArt").value;

        //pelicula
        var director = document.getElementById("director").value;
        var mainActor = document.getElementById("actorPrinc").value;
        var mainActress = document.getElementById("actrizPrinc").value;
        var distributor = document.getElementById("distribuidora").value;
        //disco
        var mainArtisGroup = document.getElementById("grupoArtistaPrinc").value;
        var producer = document.getElementById("productora").value;

        //Crearemos un objeto de tipo disco o de tipo película según nos venga 
        var sel = document.getElementById('tipoArt').value;
        if (sel === "disco") {
            //Creamos el objeto disco
            var newDisc = new Disco();
            newDisc.titulo = tittle;
            newDisc.anio = yearN;
            newDisc.numCopias = numberCopiesN;
            newDisc.genero = gender;
            newDisc.tipoArt = typeArt;
            newDisc.grupoArtistaPrinc = mainArtisGroup;
            newDisc.productora = producer;
            //Enviamos el disco que queremos borrar
            listaArticulos.borrarElemen(newDisc);
        } else if (sel === "pelicula") {
            //creamos el objeto película
            var newFilm = new Pelicula();
            newFilm.titulo = tittle;
            newFilm.anio = yearN;
            newFilm.numCopias = numberCopiesN;
            newFilm.genero = gender;
            newFilm.tipoArt = typeArt;
            newFilm.director = director;
            newFilm.actorPrinc = mainActor;
            newFilm.actrizPrinc = mainActress;
            newFilm.distribuidora = distributor;
            //Enviamos la película que queremos borrar
            listaArticulos.borrarElemen(newFilm);
        } else {
            alert("Debe de elegir un tipo de artículo");
        }
    }
 class Lista {
     constructor(array) {
         this.array = array;
         this.tamMax = 10;
     }
     estaVacia() {
         if (this.array.length === 0) {
             console.log("Está vacía");
             return true;
         } else {
             console.log("No está vacía");
             return false;
         }
     }
     estaLLena() {
         if (this.array.length >= this.tamMax) {
             console.log("Está Llena");
             return true;
         } else {
             console.log("No está Llena");
             return false;
         }
     }
     tam() {
         console.log(`el número de elementos de la lista es ${this.array.length}`);
     }
     capacidad() {
         console.log(`el tamaño máximo de la lista es ${this.tamMax}`);
     }
     disponible() {
         var disponible = this.tamMax - this.array.length;
         console.log(`el número de elementos que se puede insertar aún es: ${disponible}`);
     }
     insertar(elem) {
         try {
             this.array.push(elem);
             if (this.array.length > this.tamMax) {
                 var Error = {
                     message: "estás superando el límite de elementos introducidos"
                 };
                 throw Error;
             } else {
                 console.log(
                     "El número de elementos de la lista es" + " " + this.array.length
                 );
             }
         } catch (err) {
             console.log("Message: ", err.message);
         }
     }
     insertarEn(elem, index) {
             try {
                 if (index > this.array.length - 1) {
                     var Error = {
                         message: "el índice está fuera del rango"
                     };
                     throw Error;
                 } else if (this.array.length >= this.tamMax) {
                     var Error = {
                         message: "estás superando el límite de elementos introducidos"
                     };
                     throw Error;
                     //Devolvemos la nueva lista y además su tamaño
                 } else {
                     this.array.splice(index, 0, elem);
                     console.log(this.array);
                     console.log("El tamaño de la lista es" + " " + this.array.length);
                 }
             } catch (err) {
                 console.log(this.array);
                 console.log("Message: ", err.message);
             }
         }
         //Obtenemos el elemento del array que nos solicita el usuario a través de un índice
     obtenerElem(index) {
             try {
                 //Comprobamos que el índice solicitado está dentro del rango de nuestro array
                 if (this.array[index] === undefined) {
                     var Error = {
                         message: "El índice que se recibe no tiene un elemento al obtener por índice"
                     };
                     throw Error;
                 } else {
                     //Devolvemos el elemento del array solicitado
                     console.log(this.array[index]);
                 }
             } catch (err) {
                 console.log("Message: ", err.message);
                 return null;
             }
         }
         //Se usa indexof() para obtener la posición del valor indicado


     obtenerIndex(elem) {
         try {
             var pos = this.array.map(function(e) { return e.titulo; }).indexOf(elem.titulo);
             if (pos === -1) {
                 var Error = {
                     message: "El elemento no se encuentra en ninguna posición"
                 };
                 throw Error;
             } else {
                 //Devolvemos la posición
                 console.log(pos);
             }
         } catch (err) {
             console.log("Message: ", err.message);
             console.log(-1);
             return -1;
         }
     }

     borrar(index) {
         try {
             const initialLenght = this.array.length;
             //guardamos en una variable la longitud inicial del array para comprobar si se borra o no
             const longitudInicial = initialLenght;
             this.array.splice(index, 1);
             if (longitudInicial === this.array.length) {
                 var Error = {
                     message: "No se puede eliminar porque no corresponde a ninguna posición del array"
                 };
                 throw Error;
             } else {
                 //Devolvemos el array sin el elemento que se desea borrar
                 console.log(this.array);
             }
         } catch (err) {
             console.log("Message: ", err.message);
             return null;
         }
     }

     borrarElemen(elem) {
         try {
             var initLength = this.array.length;
             //Intenta eliminar el elemento indicado por el usuario
             for (var i = 0; i < this.array.length; i++) {
                 if (elem.titulo === this.array[i].titulo) {
                     this.array.splice(i, 1);
                 }
             }
             var finishLength = this.array.length;
             //Comprobamos que el elemento se ha podido borrar
             //Para ello comprobarmos las longitudes del array antes de eliminar el elemento y después para ver si son iguales o no
             if (initLength === finishLength) {
                 var Error = {
                     message: "No se pudo borrar el elemento"
                 };
                 throw Error;
             } else {
                 console.log(true);
                 console.log(this.array);
                 return true;
             }
         } catch (err) {
             console.log("Message: ", err.message);
         }
     }
 }
//Lista de compra de productos inteligentes 
const cantidadProductos = Number (prompt('Ingresa la cantidad de productos a comprar:'));
// Declaracion de variables globales
let cantProductos = 0;
let contadorProductos = 0;
let precio = 0;
let costoTotal = 0;
let productos = {};
let listaCompras = '';
//creacion de los constructores
class Producto {
    constructor (nombreProducto, precioProducto, seccionProducto){
        this.nombre = nombreProducto;
        this.precio = precioProducto;
        this.seccion = seccionProducto;
        if (this.nombre){
            contadorProductos++;}
     }
}
//creacion de la lista de productos a comprar/con condiciones
//le pedimos al usuario que especifique a que seccion pertenece el producto a comprar
// limpieza/comestible/bebidas y lo condicionamos a solo esas secciones.
for (let j = 1; j <= cantidadProductos; j++) {
    const producto = prompt(`Ingresa el producto nº ${j}`);
    const precio = Number (prompt(`Ingresa el precio del producto ${j}`));
    let seccion;
    do {
        seccion = prompt(`Ingrese la inicial la seccion correspondiente ya sea:
         L/C/B/O (Limpieza/Comestible/Bebidas/Otros) =`).toLowerCase();
    } while(!(seccion === 'l' || seccion === 'c' || seccion === 'b' || seccion === 'o'))

    productos [`producto${j}`] = new Producto(producto, precio, seccion);
  
    console.log(`producto nº ${j}: ${producto}`);
    if (j == cantidadProductos){
        listaCompras +=`nº${j}: ${producto}`;
        break;
    }
        listaCompras += `nº${j}: ${producto}`+'\n';

}
//Declaracion de funciones Contador-de-productos/Contador-de-secciones/Precios
function contProductos(contadorProductos){
    document.write(`estan alistandose ${contadorProductos} productos`)
}
function contarSeccion (){
    let contadorL = 0;
    let contadorC = 0;
    let contadorO = 0;
    for (const key in productos) {
        if (productos[key].seccion === 'l'){
            contadorL++;
        }else if (productos[key].seccion === 'c'){
            contadorC++;
        }else if (productos[key].seccion === 'o' ){
            contadorO++;
        }    
    } 
    let contadorB = contadorProductos - contadorL - contadorC - contadorO;
    document.write(`Compraste ${contadorL} producto/s de limpieza, ${contadorC} producto/s comestible/s, ${contadorB} bebida/s y ${contadorO} producto/s Vario/s`)
}
function precios(){
    for (const key in productos) {
         precio += productos[key].precio;
         costoTotal = precio;
    }
  document.write(`El TOTAL de tu compra es: ${costoTotal}`);
}
//Imformamos al usuario cual es su lista definitiva de productos y le damos
// la opcion de ir ingresando cuantos productos se va adquiriendo .
alert(`Tu lista de compras es:
${listaCompras}` );
let productosAcomprar = cantidadProductos;
let opcion;
//Condicionamos que el ingreso del usuario sea una de las dos opciones mostradas y solo esas sin exepcion 
 while (productosAcomprar > 0) {
     if (!opcion){
     opcion = Number(prompt(`Elegí una opción:
     1- Ingresar la cantidad de productos comprados
     2- Ingresa el nº de orden de producto comprado`));
     }
     switch (opcion) {
         case 1:
             const cantProductosComprados = Number(prompt('Ingresa la cantidad de productos que compraste:'));
             if (cantProductosComprados > cantidadProductos) {
                 alert('Te estas saliendo de los productos especificados');
                 continue;
             } else if (isNaN(cantProductosComprados)){
                 alert('Debes ingresar un nº capo');
                 continue;
             }

             productosAcomprar = productosAcomprar - cantProductosComprados;
             if (productosAcomprar > 0) {
                 alert(`Te quedan por comprar ${productosAcomprar} productos` ); 
                }
             break;  
             


         case 2:
            const  ordenProducto = Number(prompt('Ingresa el nº de orden del producto que vas comprando:'));
            if (ordenProducto > cantidadProductos){
                alert('ese nº de orden no existe');
                continue;
            } 
            productosAcomprar--;
            if (productosAcomprar > 0){
                 alert(`Te quedan por comprar ${productosAcomprar} productos` );
                 }      
             break;
     
         default:
             alert('El nº ingresado no corresponde a una opción');
             opcion = undefined;
             break;
     }
     
    }
    //Llamados a las funciones e informamos cuando se tenga todo comprado
 
    alert('Buenísimo, ya tenes todo comprado!!!')
    contProductos(contadorProductos);
    contarSeccion();
    precios();


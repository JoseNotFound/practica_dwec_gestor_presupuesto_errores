// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

var presupuesto = 0;

var gastos = [];
var idGasto = 0;

function actualizarPresupuesto(valor) {
    if(valor >= 0)
    {
        return presupuesto = valor;
    }
    else
    {
        console.log("Error.\nHa introducido un valor negativo");
        return -1;
    }
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor, fecha=Date.now(), ...etiquetas) {
    this.descripcion = descripcion;
    this.etiquetas = [...etiquetas];
    if(typeof fecha == 'string')
    {
        this.fecha = Date.parse(fecha);
    }
    else
    {
        this.fecha = fecha;
    }

    if(valor > -1)
    {
        this.valor = valor;
    }
    else{
        this.valor = 0;
    }
    this.mostrarGasto = function(){
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    };
    this.actualizarDescripcion = function(nueva_descripcion){
        this.descripcion = nueva_descripcion;
    }
    this.actualizarValor = function(nuevo_valor){
        if(nuevo_valor > -1)
        {
            this.valor = nuevo_valor;
        }
    }
    this.anyadirEtiquetas = function(...etiquetas){
        if(etiquetas.length >= 1)
        {
            const aux = set(...etiquetas);
            etiquetas.push(aux);
        }
    }
}

function listarGastos() {
    return gastos;
}
function anyadirGasto(gasto) {
    gasto.id = idGasto;
    idGasto++;

}
function borrarGasto(idGasto) {
    
}
function calcularTotalGastos() {

}
function calcularBalance() {

}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}

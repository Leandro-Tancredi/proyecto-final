/* Programa para calcular cuanto se gastará en concepto de potencia y energía, destinado a afectar
 una partida presupuestaria. */

                                //CONTRASEÑA 1234//
let presupuestoTotal=[];                                         

//OBTENGO DE FORMA LOCAL EL ARRAY DE OBJETOS A UTILIZAR EN EL PROGRAMA DESDE datos.json //
fetch('datos.json')
    .then((respuesta) => respuesta.json())
    .then((data) => {
        presupuestoTotal1(data);
});

//IMPRIMO LA FECHA ACTUAL EN PANTALLA //
fijarFecha();

//DECLARACIÓN DE VARIABLES//
let seleccion1;
let seleccion2;
let valorKWH;
let valorKW;  
let object1;
let object2; 
let eficienciaEnergetica;
   
// HACIENDO CLICK EN EL BOTÓN CALCULAR OBTENGO EL PRESUPUESTO SOLICITADO //
let calcular= document.getElementById("calcular");    
    calcular.addEventListener("click", clickResultado);

//ACCESO AL PROGRAMA GUARDANDO LA CONTRASEÑA EN LA LOCAL STORAGE O LEYENDOLA SI SE ENCUENTRA CARGADA // 
 (!acceso()) ? acceso2(): "";



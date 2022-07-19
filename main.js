/* Programa para calcular cuanto se gastará en concepto de 
potencia y energía,destinado a afectar una partida presupuestaria. Para estimar 
actualmente no se usan valores estadísticos reales ni la totalidad de los meses ni el concepto de potencia solo el de energía(KWH). 
 */

                                //CONTRASEÑA 1234//
const presupuestoTotal=[];

class presupuesto {
    constructor(kwh,kw,mes){
        this.energia=parseInt(kwh);
        this.potencia=parseInt(kw);
        this.mes=mes;    
    }
};
presupuestoTotal.push(new presupuesto("1000","100","enero"));
presupuestoTotal.push(new presupuesto("2000","100","febrero"));
presupuestoTotal.push(new presupuesto("3000","100","marzo"));
presupuestoTotal.push(new presupuesto("4000","100","abril"));
presupuestoTotal.push(new presupuesto("5000","100","mayo"));
presupuestoTotal.push(new presupuesto("6000","100","junio"));

let seleccion1;
let seleccion2; 
let valorKWH;  
let object1;
let object2;  
let calcular= document.getElementById("calcular");
    calcular.addEventListener("click", clickResultado);

    if (!acceso()) {
acceso2()
};


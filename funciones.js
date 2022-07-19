function acceso() {
    
    let password= JSON.parse(localStorage.getItem("password"));
        if (password=="1234"){
        return true};
};
   
function acceso2() {
    
    let pass=document.getElementById("pass");
        pass.innerHTML=` <div class="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" class="sr-only">Password</label>
        <input type="password" class="form-control" id="pass1" placeholder="Password">
        </div>
        <button type="submit" id="boton1" class="btn btn-primary mb-2">Ingresar</button>`;
    let boton1=document.getElementById("boton1");
        password=document.getElementById("pass1");
        boton1.addEventListener("click",pase )
};

function pase() {
   
        localStorage.setItem("password", JSON.stringify(password.value));
        let contraseña=localStorage.getItem("password");
        JSON.parse(contraseña)=="1234" ?   
                                            Swal.fire({                                             
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Accediste Presioná F5 para continuar',
                                            showConfirmButton: false,}) 
                                            :   
                                            Swal.fire({
                                            position: 'center',
                                            icon: 'error',
                                            title: 'Contraseña incorrecta, volvé a intentarlo',
                                            showConfirmButton: false,
                                            timer: 1200})
};
function clickResultado () {  
   
    let mesInicial= document.getElementById("mesInicial");
        seleccion1= mesInicial.options[mesInicial.selectedIndex].value;
            object1=inicio(seleccion1);

    let mesFinal= document.getElementById("mesFinal");
        seleccion2= mesFinal.options[mesFinal.selectedIndex].value;
            object2=fin(seleccion2);

    valorKWH= document.getElementById("valorKWH").value;
        let result= presupuestoTotal2(object1.energia,object2.energia,parseFloat(valorKWH));
    
    Swal.fire({
                title: "Desde " +(seleccion1)+ " hasta "+ (seleccion2)+" el presupuesto será de $"+(result),
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
            })
};
const inicio = (select1) =>{
    
    let desdePeriodoKwh=seleccion1
    switch (desdePeriodoKwh) {
        case "Enero":
        return presupuestoTotal[0]    
        case "Febrero":
        return presupuestoTotal[1]          
        case "Marzo":
        return presupuestoTotal[2]       
        case "Abril":
        return presupuestoTotal[3]       
        case "Mayo":
        return presupuestoTotal[4]      
        case "Junio":
        return presupuestoTotal[5] 
    };
    };

function fin(select2){
    
    let hastaPeriodoKwh=seleccion2
    switch (hastaPeriodoKwh) {
        case "Enero":
        return presupuestoTotal[0]    
        case "Febrero":
        return presupuestoTotal[1]          
        case "Marzo":
        return presupuestoTotal[2]       
        case "Abril":
        return presupuestoTotal[3]       
        case "Mayo":
        return presupuestoTotal[4]      
        case "Junio":
        return presupuestoTotal[5]    
    };
    }; 

const presupuestoTotal2 =(a,b,c) => { 

    const mesesDeConsumoKWH=[presupuestoTotal[0].energia,presupuestoTotal[1].energia,presupuestoTotal[2].energia,presupuestoTotal[3].energia,presupuestoTotal[4].energia,presupuestoTotal[5].energia];
    let sumaMeses=0; 

if(object1.mes=="enero" && object2.mes=="enero"){sumaMeses=presupuestoTotal[0].energia};

if(object1.mes=="enero" && object2.mes=="febrero"){
    for (let i = 0; i <= 1; i++) {
    sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="enero" && object2.mes=="marzo"){
    for (let i = 0; i <= 2; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="enero" && object2.mes=="abril"){
    for (let i = 0; i <=3; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="enero" && object2.mes=="mayo"){
    for (let i = 0; i <= 4; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="enero" && object2.mes=="junio"){
    for (let i = 0; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="febrero" && object2.mes=="febrero"){sumaMeses=presupuestoTotal[1].energia};

if(object1.mes=="febrero" && object2.mes=="marzo"){
    for (let i = 1; i <= 2; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="febrero" && object2.mes=="abril"){
    for (let i = 1; i <= 3; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="febrero" && object2.mes=="mayo"){
    for (let i = 1; i <= 4; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="febrero" && object2.mes=="junio"){
    for (let i = 1; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
}
};
if(object1.mes=="marzo" && object2.mes=="marzo"){sumaMeses=presupuestoTotal[2].energia}

if(object1.mes=="marzo" && object2.mes=="abril"){
    for (let i = 2; i <= 3; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="marzo" && object2.mes=="mayo"){
    for (let i = 2; i <= 4; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="marzo" && object2.mes=="junio"){
    for (let i = 2; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="abril" && object2.mes=="abril"){sumaMeses=presupuestoTotal[3].energia}

if(object1.mes=="abril" && object2.mes=="mayo"){
    for (let i = 3; i <= 4; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="abril" && object2.mes=="junio"){
    for (let i = 3; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="mayo" && object2.mes=="mayo"){sumaMeses=presupuestoTotal[4].energia};

if(object1.mes=="mayo" && object2.mes=="junio"){ 
    for (let i = 4; i <= 5; i++) {
    sumaMeses+=mesesDeConsumoKWH[i];
}
};
if(object1.mes=="junio" && object2.mes=="junio"){sumaMeses=presupuestoTotal[5].energia}

return (sumaMeses*valorKWH); 
}; 
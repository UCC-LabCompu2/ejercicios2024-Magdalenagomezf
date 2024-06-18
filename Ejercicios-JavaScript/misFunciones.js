/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} nombre - El nombre de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgada
 */
let convertirUnidades=(nombre, valor)=>{
    //TODO: Debería admitir números con coma.
    let metro, pulgada, pie, yarda;
    if (isNaN(valor)){
        alert("El valor ingresado no es correcto")
        metro="";
        pulgada="";
        pie="";
        yarda="";

    }
    else if(nombre==="metro"){
        metro= valor;
        pulgada= valor * 39.3701;
        pie=   valor * 3.28084;
        yarda= valor * 1.09361;
    }
    else if (nombre==="pulgada"){
        pulgada=valor;
        metro = valor * 0.0254 ;
        pie= valor * 0.833333;
        yarda=  valor * 0.02777778;
    }
    else if (nombre==="pie"){
        pie=valor;
       pulgada= valor * 0.3048;
       metro = valor * 12;
        yarda = valor * 0.333333;
    }
    else if (nombre==="yarda"){
        yarda=valor;
       pulgada = valor * 0.9144;
       pie  = valor * 36;
        metro = valor * 3;
    }
    document.getElementById("metro").value= metro;
    document.getElementById("pie").value= pulgada ;
    document.getElementById("pulgada").value=pie;
    document.getElementById("yarda").value=yarda;

}
/**
 * Permite convertir grados a radianes y viceversa.
 * @method convertirGR
 * @param {string} id - grados, radianes
 */
function convertirGR(id){
    let grad,rad;
    //TODO: Agregar mensajes de error cuando se agregan letras.
    //TODO: Debería admitir números con coma.
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
        document.getElementById("radianes").value=rad;
    }
    else if (id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/Math.PI
        document.getElementById("grados").value=grad;
    }

}
let mostrar_ocultar=(valor)=>{
    if(valor==="val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display="block";
    } else if (valor ==="val_ocultar"){
        document.getElementsByName("unDiv")[0].style.display="none";
    }
}
let suma=() =>{
    const s1 = Number(document.getElementById("nums1").value);
    const s2 = Number(document.getElementById("nums2").value);
    document.getElementById("totalS").value=s1+s2;
}
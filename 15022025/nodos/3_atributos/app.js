const body=document.body;
const formulario=document.querySelector(`#formulario`)
const nombre=document.getElementById(`nombre`);
const apellido=document.querySelector(`#apellido`);
const telefono=document.querySelector(`#telefono`);
const documento=document.querySelector(`#documento`);
const usuario=document.querySelector(`#usuario`);
const contrasena=document.querySelector(`#contrasena`);
const btn = document.querySelector(`button`);
const $selector = document.createElement("select");
const ciudades=async()=>{
    const data =await fetch(`data.json`);
    const ciudades=await data.json();

    ciudades.forEach((Element)=>{
        console.log();
        
    })
}


 
const validar = (event)=>{
    // detenemos evento
    event.preventDefault();
    // validamos que el nombre tenga datos
 if (nombre.value ==``) {
    alert(`el nombre es obligatorio`);
    nombre.focus();
 } else {
    
 }
}
const dblclick=()=>{
    alert (`doble click`);
};

const mousedown=()=>{
    alert(`el evento funciona cuando se presona cualquier boton sobre el elemento`)
}
//    const contextmenu=()=>{
//     alert(`?`)
//    }
const keydown=(event)=>{
    // alert(`presiono la tecla ${event.key}`);
    console.log(event)
}
// evento de tecla de sus tres posisiones

// btn.addEventListener(`click`,validar);
// btn.removeEventListener(`click`,validar);
// formulario.addEventListener(`contextmenu`,contextmenu);
// body.addEventListener(`contextmenu`,contextmenu);
// body.addEventListener(`dblclick`,dblclick);
// body.addEventListener(`mousedown`,mousedown);
nombre.addEventListener(`keydown`,keydown);
// btn.addEventListener(`click`,validar);

ciudades();
const formulario=document.querySelector(`#formulario`)
const nombre=document.getElementById(`nombre`);
const apellido=document.querySelector(`#apellido`);
const telefono=document.querySelector(`#telefono`);
const documento=document.querySelector(`#documento`);
const usuario=document.querySelector(`#usuario`);
const contrasena=document.querySelector(`#contrasena`);
const btn_validar = document.querySelector(`button`);

const validar = (event)=>{
    // detenemos evento
    event.preventDefault();
 if (nombre.value ==``) {
    alert(`el nombre es obligatorio`);
    nombre.focus();
 } else {
    
 }
}
   
btn_validar.addEventListener(`click`,validar)

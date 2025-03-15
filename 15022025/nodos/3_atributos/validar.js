export { formulario, nombre, apellido, telefono, documento, usuario, contrasena, email, terminos, validarFormulario };
const formulario = document.querySelector(`#formulario`);
const nombre = document.getElementById(`nombre`);
const apellido = document.querySelector(`#apellido`);
const telefono = document.querySelector(`#telefono`);
const documento = document.querySelector(`#documento`);
const usuario = document.querySelector(`#usuario`);
const contrasena = document.querySelector(`#contrasena`);
const email = document.getElementById("mail");
const terminos = document.createElement(`input`);
terminos.setAttribute("type", "checkbox");

const validarFormulario = (event) => {
    if (nombre.value.trim() === '') {
        alert('El nombre es obligatorio');
    }
    else if (apellido.value.trim() === '') {
        alert('El apellido es obligatorio');
    }
    else if (telefono.value.trim() === '') {
        alert('El teléfono es obligatorio');
    }
    else if (documento.value.trim() === '') {
        alert('El documento es obligatorio');
    }
    else if (usuario.value.trim() === '') {
        alert('El usuario es obligatorio');
    }
    else if (contrasena.value.trim() === '') {
        alert('La contraseña es obligatoria');
    }
    else if (!email.validity.valid) {
        alert('El correo no es válido');
    }
    else if (!terminos.checked) {
        alert('Debe aceptar los términos y condiciones');
    }
    else if{
        for (let i = 0; i < array.length) {
            const element = array[i];
            
        }
    }
    else {
        alert('Formulario enviado correctamente');
        formulario.submit();
    }
    
};


formulario.addEventListener('submit', validarFormulario);



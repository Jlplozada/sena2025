const body = document.body;
const formulario = document.querySelector(`#formulario`);
const nombre = document.getElementById(`nombre`);
const apellido = document.querySelector(`#apellido`);
const telefono = document.querySelector(`#telefono`);
const documento = document.querySelector(`#documento`);
const usuario = document.querySelector(`#usuario`);
const contrasena = document.querySelector(`#contrasena`);
const $selector = document.createElement("select");
const btn = document.querySelector(`button`);
const terminos = document.createElement(`input`);
terminos.setAttribute("type", "checkbox");

if (!terminos.checked) {
    btn.setAttribute("disabled", "");
}
formulario.insertAdjacentElement("beforeEnd", terminos);
formulario.insertAdjacentElement("beforeEnd", btn);

const ciudades = async () => {
    const data = await fetch(`data.json`);
    const ciudades = await data.json();
    const combo = document.createElement(`select`);
    combo.classList.add("formulario_input");
    combo.name = "ciudad_id";
    combo.id = "ciudad_id";
    const defecto = document.createElement(`option`);
    defecto.textContent = "seleccione ciudad...";
    combo.append(defecto);
    const opciones = document.createDocumentFragment();
    ciudades.forEach(({ nombre, id }) => {
        const option = document.createElement(`option`);
        option.textContent = nombre;
        option.value = id;
        const clone = document.importNode(option, true);
        opciones.append(clone);
    });
    combo.append(opciones);
    formulario.insertAdjacentElement("afterbegin", combo);
};
const genero=async()=>{
    const generos =await fetch(`generos.json`);
    const tipo =await generos.json();
    console.log(tipo);
    
}
genero();

const validar = (event) => {
    event.preventDefault();
    if (nombre.value == ``) {
        alert(`el nombre es obligatorio`);
        nombre.focus();
    } else {
        // Add further validation or actions here if needed
    }
};

const dblclick = () => {
    alert(`doble click`);
};

const mousedown = () => {
    alert(`el evento funciona cuando se presiona cualquier botón sobre el elemento`);
};

const keydown = (event) => {
    console.log(event);
};

nombre.addEventListener(`keydown`, keydown);

const validarTerminos = () => {
    // 1
    if (terminos.checked) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "");
    }
    // 2
    // btn.disabled=!terminos.checked;
    // 3
    // (terminos.checked)?btn.removeAttribute("disable"):btn.setAttribute("disable","");
};

ciudades();
terminos.addEventListener("change", validarTerminos);

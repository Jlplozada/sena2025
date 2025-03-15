import { formulario, nombre, apellido, telefono, documento, usuario, contrasena, email, terminos, validarFormulario } from './validar.js';

const body = document.body;
const btn = document.querySelector(`button`);
const css = document.createElement(`input`);
css.setAttribute("type", "checkbox");

if (!terminos.checked) {
    btn.setAttribute("disabled","");
}

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity(
        alert("no es correo")
    );
    } else {
      email.setCustomValidity("");
    }
  });

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
ciudades();

const generos = async () => {
    const gen = await fetch(`generos.json`);
    const generos = await gen.json();
    const combo = document.createElement(`select`);
    combo.classList.add("formulario_input");
    combo.name = "genero_id";
    combo.id = "genero_id";
    const defecto = document.createElement(`option`);
    defecto.textContent = "seleccione genero...";
    combo.append(defecto);
    const opciones = document.createDocumentFragment();
    generos.forEach(({ tipo, id }) => {
        const option = document.createElement(`option`);
        option.textContent = tipo;
        option.value = id;
        const clone = document.importNode(option, true);
        opciones.append(clone);
    });
    combo.append(opciones);
    formulario.insertAdjacentElement("beforeEnd", combo);
    return combo;
};
const generoCombo = await generos();

const validar = (event) => {
    event.preventDefault();
    if (nombre.value == ``) {
        alert(`el nombre es obligatorio`);
        nombre.focus();
    } else {
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
    if (terminos.checked) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "");
    }
};

terminos.addEventListener("change", validarTerminos);

const checkboxJava = document.createElement("input");
checkboxJava.type = "checkbox";
checkboxJava.name = "lenguajes";
checkboxJava.value = "Java";
const labelJava = document.createElement("label");
labelJava.append(checkboxJava, "Java");

const checkboxPython = document.createElement("input");
checkboxPython.type = "checkbox";
checkboxPython.name = "lenguajes";
checkboxPython.value = "Python";
const labelPython = document.createElement("label");
labelPython.append(checkboxPython, "Python");

const checkboxCSharp = document.createElement("input");
checkboxCSharp.type = "checkbox";
checkboxCSharp.name = "lenguajes";
checkboxCSharp.value = "C#";
const labelCSharp = document.createElement("label");
labelCSharp.append(checkboxCSharp, "C#");

const checkboxJavaScript = document.createElement("input");
checkboxJavaScript.type = "checkbox";
checkboxJavaScript.name = "lenguajes";
checkboxJavaScript.value = "JavaScript";
const labelJavaScript = document.createElement("label");
labelJavaScript.append(checkboxJavaScript, "JavaScript");

formulario.insertAdjacentElement("beforeEnd", labelJava);
formulario.insertAdjacentElement("beforeEnd", document.createElement("br"));
formulario.insertAdjacentElement("beforeEnd", labelPython);
formulario.insertAdjacentElement("beforeEnd", document.createElement("br"));
formulario.insertAdjacentElement("beforeEnd", labelCSharp);
formulario.insertAdjacentElement("beforeEnd", document.createElement("br"));
formulario.insertAdjacentElement("beforeEnd", labelJavaScript);
formulario.insertAdjacentElement("beforeEnd", document.createElement("br"));

formulario.insertAdjacentElement("beforeEnd", generoCombo);
formulario.insertAdjacentElement("beforeEnd", usuario);
formulario.insertAdjacentElement("beforeEnd", contrasena);
formulario.insertAdjacentElement("beforeEnd", terminos);
formulario.insertAdjacentElement("beforeEnd", btn);

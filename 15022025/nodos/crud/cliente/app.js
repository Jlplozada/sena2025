import listar from "./app/ciudades/listar.js";
import tipo from "./app/documentos/listar.js";
import insertar from "./app/usuario/crear.js";
import index from "./app/usuario/index.js";

const dom = document;
const tabla = dom.querySelector('#tbody');
const formulario = dom.querySelector('form');
const ciudadSelect = dom.querySelector("#ciudad");
const documentoSelect = dom.querySelector("#tipo");
const nombre = dom.querySelector("#nombre");
const apellidos = dom.querySelector("#apellidos");
const telefono = dom.querySelector("#telefono");
const direccion = dom.querySelector("#direccion");
const numeroDocumento = dom.querySelector("#documento");
const email = dom.querySelector("#email");

const ciudades = await listar();
const documento = await tipo();
const tabla_usuarios = await index();

const llenadoDocumento = (documento, elemento) => {
    const fragmento = document.createDocumentFragment();
    const option = document.createElement("option");
    option.textContent = "seleccione ....";
    fragmento.appendChild(option);
    documento.forEach(({ id, tipo }) => {
        const option = document.createElement("option");
        option.textContent = tipo;
        option.value = id; 
        fragmento.append(option);
    });
    elemento.append(fragmento);
};

const llenadoCiudad = (ciudades, elemento) => {
    const fragmento = document.createDocumentFragment();
    const option = document.createElement("option");
    option.textContent = "seleccione ....";
    fragmento.appendChild(option);
    ciudades.forEach(({ id, nombre }) => {
        const option = document.createElement("option");
        option.textContent = nombre;
        option.value = id; 
        fragmento.append(option);
    });
    elemento.append(fragmento);
};

const guardarUsuario = (event) => {
    event.preventDefault();
    const data = {
        nombre: nombre.value,
        apellido: apellidos.value,
        ciudad: ciudadSelect.selectedIndex,
        telefono: telefono.value,
        direccion: direccion.value,
        tipo_documento: documentoSelect.selectedIndex,
        documento: numeroDocumento.value,
        email: email.value
    }
    insertar(data);
}

formulario.addEventListener("submit", guardarUsuario);
tabla.appendChild(tabla_usuarios);

llenadoDocumento(documento, documentoSelect); 
llenadoCiudad(ciudades, ciudadSelect);
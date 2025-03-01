const formulario = document.querySelector("#formulario");
const btn = document.querySelector("button");
const selector = document.createElement("select");
const listaCiudades = document.createElement("ul");

const cargarCiudades = async () => {
    const response = await fetch("data.json");
    const ciudades = await response.json();
    
    selector.innerHTML = "<option value='' disabled selected>Seleccione una ciudad</option>";
    listaCiudades.innerHTML = "";
    
    for (let i = 0; i < ciudades.length; i++) {
        if (ciudades[i].nombre) {
            const option = document.createElement("option");
            option.value = ciudades[i].id;
            option.textContent = ciudades[i].nombre;
            selector.appendChild(option);
            
            const listItem = document.createElement("li");
            listItem.textContent = ciudades[i].nombre;
            listaCiudades.appendChild(listItem);
        }
    }
    
    formulario.insertBefore(selector, btn);
    formulario.appendChild(listaCiudades);
};

document.addEventListener("DOMContentLoaded", cargarCiudades);

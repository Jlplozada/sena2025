export const ciudades = async () => {
    const data = await fetch(`../json/data.json`);
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
const generos = async () => {
    const response = await fetch(`../json/generos.json`);
    const generos = await response.json();
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
};

import tabla from "./listar.js";

const index = async (usuario) => {
    const tabla_p = await tabla();
    const fragmento = document.createDocumentFragment();
    tabla_p.forEach(({ nombre, apellidos, ciudad, telefono, direccion, tipo_documento, documento, email }) => {
        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = nombre;

        const celdaApellido = document.createElement("td");
        celdaApellido.textContent = apellidos;

        const celdaCiudad = document.createElement("td");
        celdaCiudad.textContent = ciudad;

        const celdaTelefono = document.createElement("td");
        celdaTelefono.textContent = telefono;

        const celdaDireccion = document.createElement("td");
        celdaDireccion.textContent = direccion;

        const celdaTipoDocumento = document.createElement("td");
        celdaTipoDocumento.textContent = tipo_documento;

        const celdaDocumento = document.createElement("td");
        celdaDocumento.textContent = documento;

        const celdaEmail = document.createElement("td");
        celdaEmail.textContent = email;

        const botones = document.createElement("td");

        const editar = document.createElement("button");
        editar.textContent = "editar";

        const borrar = document.createElement("button");
        borrar.textContent = "borrar";

        botones.appendChild(editar);
        botones.appendChild(borrar);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApellido);
        fila.appendChild(celdaCiudad);
        fila.appendChild(celdaTelefono);
        fila.appendChild(celdaDireccion);
        fila.appendChild(celdaTipoDocumento);
        fila.appendChild(celdaDocumento);
        fila.appendChild(celdaEmail);
        fila.appendChild(botones);

        fragmento.appendChild(fila);
    });
    return fragmento;
}

export default index;
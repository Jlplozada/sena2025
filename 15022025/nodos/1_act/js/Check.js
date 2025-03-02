const btn = document.querySelector(`button`);
export const terminos = () => {
    const termino = document.createElement(`input`);
    termino.setAttribute("type", "checkbox");
    if (!termino.checked) {
        btn.setAttribute("disabled", "");
    }
    const validarTerminos = () => {
        if (termino.checked) {
            btn.removeAttribute("disabled");
        } else {
            btn.setAttribute("disabled", "");
        }
    };
    termino.addEventListener('change', validarTerminos);
    document.body.appendChild(termino);
};

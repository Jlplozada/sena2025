import { ciudades } from "./js/listas.js";
import {terminos} from "./js/Check.js";

const nombre = document.getElementById(`nombre`);
const apellido = document.querySelector(`#apellido`);
const telefono = document.querySelector(`#telefono`);
const documento = document.querySelector(`#documento`);
const usuario = document.querySelector(`#usuario`);
const contrasena = document.querySelector(`#contrasena`);
const btn = document.querySelector(`button`);

const body=document.body;

formulario.insertAdjacentElement("afterend",ciudades);
formulario.insertAdjacentElement("afterend",generos);
formulario.insertAdjacentElement("beforeEnd", terminos);
formulario.insertAdjacentElement("beforeEnd", btn);

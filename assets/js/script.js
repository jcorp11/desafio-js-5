// importar funciones desde otro archivo
import { renderTareas, addEventAddBtn } from "./functions.js";

// seleccionar elementos del DOM
const tareasContainer = document.querySelector(".table");
const totalTareasRealizadas = document.querySelector(".totalRealizadas");
const totalTareas = document.querySelector(".total");
const btnAddtarea = document.querySelector("#btn");
const input = document.querySelector("#inputTarea");

// exportar elementos para ocuparlos en funciones
export {
  tareasContainer,
  totalTareasRealizadas,
  totalTareas,
  btnAddtarea,
  input,
};

// hacer render inicial
renderTareas();
// añadir listener al boton de agregar tarea
addEventAddBtn();

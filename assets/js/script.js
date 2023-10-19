import tareas from "./db.js";
import { totalRealizadas, renderTareas, tareaHtml } from "./functions.js";

const tareasContainer = document.querySelector(".table");
const totalTareasRealizadas = document.querySelector(".totalRealizadas");
const totalTareas = document.querySelector(".total");
const btnAddtarea = document.querySelector("#btn");
const input = document.querySelector("#input");

export { tareasContainer, totalTareasRealizadas, totalTareas };

renderTareas();
btnAddtarea.addEventListener("click", (e) => {
  e.preventDefault();
  let newtarea = {
    id: tareas.length + 1,
    nombre: input.value,
    completada: false,
  };
  tareas.push(newtarea);
  renderTareas();
});

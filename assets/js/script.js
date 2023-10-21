import { renderTareas, tareas } from "./functions.js";

let IDs = tareas.length + 1;

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
    id: IDs,
    nombre: input.value,
    completada: false,
  };
  tareas.push(newtarea);
  IDs++;
  renderTareas();
});

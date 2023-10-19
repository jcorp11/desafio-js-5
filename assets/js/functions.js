import tareas from "./db.js";
import {
  tareasContainer,
  totalTareasRealizadas,
  totalTareas,
} from "./script.js";

function totalRealizadas() {
  return tareas.filter((tarea) => tarea.completada).length;
}

function renderTareas() {
  let html = "";
  tareas.forEach((tarea) => {
    html += tareaHtml(tarea);
  });
  tareasContainer.innerHTML = html;

  totalTareasRealizadas.innerHTML = `Realizadas: ${totalRealizadas()}`;

  totalTareas.innerHTML = `Total: ${tareas.length}`;
}

function tareaHtml(tarea) {
  return `
          <tr>
              <td class="id">${tarea.id}</td>
              <td class="nombre">${tarea.nombre}</td>
              <td class="completada">
                  <input type="checkbox" data-id="${tarea.id}" ${
    tarea.completada ? "checked" : ""
  }>
              </td>
              <td>
                  <button data-id="${tarea.id}">Eliminar</button>
              </td>
          </tr>`;
}

export { totalRealizadas, renderTareas, tareaHtml };

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
  let html = `
    <tr>
      <th>ID</th>
      <th>Tarea</th>
      <th></th>
      <th></th>
    </tr>`;
  tareas.forEach((tarea) => {
    html += tareaHtml(tarea);
  });
  tareasContainer.innerHTML = html;
  totalTareasRealizadas.innerHTML = `Realizadas: ${totalRealizadas()}`;
  totalTareas.innerHTML = `Total: ${tareas.length}`;

  addListeners();
}

function addListeners() {
  tareas.forEach((element) => {
    //   console.log(`[data-input="${element.id}"]`);
    let checkbox = document.querySelector(`[data-input="${element.id}"]`);

    checkbox.addEventListener("click", (e) => {
      e.preventDefault();
      element.completada = !element.completada;
      renderTareas();
    });

    const btnDelete = document.querySelector(`[btn-id="${element.id}"]`);
    btnDelete.addEventListener("click", (e) => {
      e.preventDefault();
      let indexDelete = tareas.map((element) => element.id).indexOf(element.id);
      tareas.splice(indexDelete, 1);
      renderTareas();
    });
  });
}

function tareaHtml(tarea) {
  return `
          <tr>
              <td class="id">${tarea.id}</td>
              <td class="nombre">${tarea.nombre}</td>
              <td class="completada">
                  <input type="checkbox" data-input="${tarea.id}" ${
    tarea.completada ? "checked" : ""
  }>
              </td>
              <td>
              <i class="fas fa-times" btn-id="${
                tarea.id
              }" style="color: #dd1313;"></i>
              </td>
          </tr>`;
}

export { totalRealizadas, renderTareas, tareaHtml };

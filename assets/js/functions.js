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
    <thead>
      <tr>
        <th>ID</th>
        <th class="task-text">Tarea</th>
        <th class="columna">Done</th>
        <th class="columna">Delete</th>
      </tr>
    </thead>`;
  tareas.forEach((tarea) => {
    html += tareaHtml(tarea);
  });
  tareasContainer.innerHTML = html;
  totalTareasRealizadas.innerHTML = `Realizadas: <b> ${totalRealizadas()} </b>`;
  totalTareas.innerHTML = `Total: <b>${tareas.length}</b>`;

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
              <td class="completada columna">
                  <input type="checkbox" data-input="${tarea.id}" ${
    tarea.completada ? "checked" : ""
  }>
              </td>
              <td class="columna">
              <i class="fas fa-times" btn-id="${
                tarea.id
              }" style="color: #dd1313;"></i>
              </td>
          </tr>`;
}

export { totalRealizadas, renderTareas, tareaHtml };

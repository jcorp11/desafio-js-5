import tareasDefault from "./db.js";

import {
  tareasContainer,
  totalTareasRealizadas,
  totalTareas,
  btnAddtarea,
  input,
} from "./script.js";

// Revisamos si existe el item tareas en local Storage en casi de que si existe ocupamos ese, en caso de que no ocupamos el estado base
let tareas;
let myData = JSON.parse(localStorage.getItem("tareas"));
myData ? (tareas = myData) : (tareas = tareasDefault);
// ID para las tareas nuevas incial
let IDs = tareas.length + 1;

// funcion que retorna la cantidad de tareas realizadas
function totalRealizadas() {
  return tareas.filter((tarea) => tarea.completada).length;
}

function renderTareas() {
  // crea toda la tabla, luego agrega las tareas totales, realizadas, los listeners y guarda la tarea en local storage
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
  guardarTareas();
}

// funcion guarda la tareas en local storage para una sesion futura
function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
  // console.log(tareas);
  if (!tareas.length) localStorage.removeItem("tareas");
}

// agrega los listeners
function addListeners() {
  // agrega listener a los checkbox que cambian el estado de la tarea
  tareas.forEach((element) => {
    //   console.log(`[data-input="${element.id}"]`);
    let checkbox = document.querySelector(`[data-input="${element.id}"]`);
    checkbox.addEventListener("click", (e) => {
      e.preventDefault();
      element.completada = !element.completada;
      // al cambiar el estado se vuelve a renderiar toda la tabla
      renderTareas();
    });

    // agrega listener al boton de eliminar, cambia el array de tareas y luego vuelve a renderizar
    const btnDelete = document.querySelector(`[btn-id="${element.id}"]`);
    btnDelete.addEventListener("click", (e) => {
      e.preventDefault();
      let indexDelete = tareas.map((element) => element.id).indexOf(element.id);
      tareas.splice(indexDelete, 1);
      renderTareas();
    });
  });
}

// retorna el string html de una nueva fila de la tabla de tareas
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

// agrega listener al boton de agregar tarea, y agrega una tarea nueva en caso de que el input no este vacio
function addEventAddBtn() {
  btnAddtarea.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") return;
    // console.log(input);
    let newtarea = {
      id: IDs,
      nombre: input.value,
      completada: false,
    };
    // revisar
    tareas.push(newtarea);
    IDs++;
    input.value = "";
    renderTareas();
  });
}

export { renderTareas, addEventAddBtn };

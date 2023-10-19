const tareas = [
  {
    id: 1,
    nombre: "Tarea 1",
    completada: true,
  },
  {
    id: 2,
    nombre: "Tarea 2",
    completada: false,
  },
  {
    id: 3,
    nombre: "Tarea 3",
    completada: true,
  },
  {
    id: 4,
    nombre: "Tarea 4",
    completada: false,
  },
];

const tareasContainer = document.querySelector(".table");
const totalTareasRealizadas = document.querySelector(".totalRealizadas");
const totalTareas = document.querySelector(".total");

function totalRealizadas() {
  return tareas.filter((tarea) => tarea.completada).length;
}

function renderTareas() {
  tareas.forEach((tarea) => {
    tareasContainer.innerHTML += tareaHtml(tarea);
  });

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

renderTareas();

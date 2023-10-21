import { renderTareas, addEventAddBtn } from "./functions.js";

const tareasContainer = document.querySelector(".table");
const totalTareasRealizadas = document.querySelector(".totalRealizadas");
const totalTareas = document.querySelector(".total");
const btnAddtarea = document.querySelector("#btn");
const input = document.querySelector("#input");

export {
  tareasContainer,
  totalTareasRealizadas,
  totalTareas,
  btnAddtarea,
  input,
};

renderTareas();
addEventAddBtn();

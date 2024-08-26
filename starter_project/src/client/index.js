import { handleSubmit } from "./js/formHandler";
import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("urlForm").addEventListener("submit", handleSubmit);
});

import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
  check("nombreColor")
    .notEmpty()
    .withMessage("El nombre del color es un dato obligatorio")
    .isLength({
      min: 3,
      max: 20,
    })
    .withMessage(
      "El nombre del color debe contener como minimo 3 caracteres y como maximo 20 caracteres inclusive"
    ),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;

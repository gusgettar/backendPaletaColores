import { Router } from "express";
import { crearColoresAPI, leerColoresAPI, borrarColoresAPI, editarColoresAPI, obtenerColoresAPI} from "../controllers/paletaColores.controllers.js"
import validacionPaletaColores from "../helpers/validacionPaletaColores.js";


const router = Router();

router.route("/colores").post([validacionPaletaColores],crearColoresAPI).get(leerColoresAPI)
router.route("/colores/:id").get(obtenerColoresAPI).delete(borrarColoresAPI).put(editarColoresAPI)



export default router;

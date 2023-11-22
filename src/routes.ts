import { Router } from "express";
import { CreatePlanoController } from "./controllers/CreatePlanoController";
import {CreateMedicoController} from "./controllers/CreateMedicoController";

const router = Router();

const createPlanoController = new CreatePlanoController();
const createMedicoController = new CreateMedicoController();

router.post("/planos", createPlanoController.handle);
router.post("/medicos", createMedicoController.handle)

export {router}
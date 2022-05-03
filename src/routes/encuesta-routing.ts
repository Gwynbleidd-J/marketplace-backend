import { Router } from "express";
import { EncuestaController } from "../controllers/encuesta-controller";

export class EncuestaRouting{
    public router: Router;
    private encuestaController:EncuestaController;

    constructor(){
        this.router = Router();
        this.encuestaController = new EncuestaController();
        this.routes();
    }

    private routes():void{
        this.router.post('/', this.encuestaController.Encuesta);
    }
}
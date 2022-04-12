import { RedesController } from '../controllers/redes-controller';
import { Router } from "express";

export class RedesRouting{
    public router: Router;
    private redesController:RedesController;

    constructor(){
        this.router = Router();
        this.redesController = new RedesController();
        this.routes();
    }

    private routes():void{
        this.router.get('/', this.redesController.SelectNetwork);
    }
}
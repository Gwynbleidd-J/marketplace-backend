import { RedesController } from '../controllers/redes-controller';
import { Router } from "express";
import cors from "cors";
import { TokenValidation } from '../libs/verify-token';

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
        this.router.post('/branch', this.redesController.SelectBranch);
        this.router.post('/player', this.redesController.SelectPlayer);
        this.router.post('/stock', this.redesController.Stock);
    }
}
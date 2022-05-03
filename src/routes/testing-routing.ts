import { Router } from "express";
import { TestingController } from "../controllers/testing-controller";
import { TokenValidation } from "../libs/verify-token";

export class TestingRouting{
    public router:Router;
    private testingController: TestingController;

    constructor(){
        this.router = Router();
        this.testingController = new TestingController();
        this.routes();
    }

    private routes():void{
        this.router.get('/', this.testingController.Testing);
    }
}
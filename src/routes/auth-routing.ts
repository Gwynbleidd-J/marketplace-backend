import { Router } from "express";
import { AuthController } from "../controllers/auth-controller";
import { TokenValidation } from "../libs/verify-token";

export class AuthRouting{
    public router: Router;
    private authController:AuthController;

    constructor(){
        this.router = Router();
        this.authController = new AuthController();
        this.routes();
    }

    private routes():void{
        this.router.post('/singup', this.authController.SingUp);
        this.router.post('/singin', this.authController.SingIn);
        this.router.get('/profile',TokenValidation, this.authController.Profile);
    }
}
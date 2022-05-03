import { Router } from "express";
import { CotizacionController } from "../controllers/cotizacion-controller";

export class CotizacionRouting{
     public router: Router;
     private cotizacionController: CotizacionController;

     constructor(){
         this.router = Router();
         this.cotizacionController = new CotizacionController();
         this.routes();
     }

     public routes(){
         this.router.get('/', this.cotizacionController.Cotizacion);
     }
}


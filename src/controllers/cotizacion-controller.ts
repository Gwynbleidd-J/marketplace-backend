import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { CatTarifa } from "../models/tarifa";

export class CotizacionController{
    //* EN ESTE METODO JACOBO ME MANDAR EL ID DE DE LA RED PARA ASÍ PODER GUARDARLA EN LA TABLA
    //* NO IMPORTA ASI SE GARANTIZA QUE SE GUARDE EL ID DE LA RED Y DE QUE SIEMPRE SE VAN A ESTAR MANDANDO
    //* EL ID DESDE LA BASE DE DATOS DEL SERVIDOR 1.
    public async Cotizacion(req:Request, res:Response): Promise<void>{
        //req.body.idRed
        // const red = await getRepository(CatTarifa)
        // .createQueryBuilder()
        // .insert()
        // .into(CatTarifa)
        // .values({
        // })
        // .execute();
    }
}

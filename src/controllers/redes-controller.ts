import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import { Resolver } from "../services/resolver";

export class RedesController{
    public async SelectNetwork(req:Request, res:Response):Promise<void>{
        try{
            // const redes = await getRepository(VistaCatNegocio, "second")
            // .createQueryBuilder()
            // .getMany()

            // new Resolver().success(res, "Redes Obtenidas", redes);
            res.send('redes');
        }
        catch(ex){
            console.log(`Error RedesController: ${ex}`);
        }
    }
}

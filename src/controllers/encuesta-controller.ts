import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { CatEncuesta } from "../models/encuesta";
import { Resolver } from "../services/resolver";

export class EncuestaController{

    public async Encuesta(req:Request, res:Response):Promise<void>{
        try{
            //GUARDANDO DATOS DE LA ENCUESTA EN LA BASE DE DATOS
            //SAVING SURVEY DATA ON DATABBASE
            await getRepository(CatEncuesta)
            .createQueryBuilder()
            .insert()
            .into(CatEncuesta)
            .values({
                Giro: req.body.giro,
                NumEmpleados: req.body.empleados,
                TipoNegocio: req.body.negocio,
                IngresoMensual: req.body.ingreso,
                Usuario: req.body.idUsuario
            })
            .execute();

            const encuesta = await getRepository(CatEncuesta)
            .query('SELECT TOP 1 * FROM cat_encuesta ORDER BY idEncuesta DESC')

            new Resolver().success(res, 'Encuesta Guardada Correctamente', encuesta);
        }
        catch(ex){
            new Resolver().error(res, 'Error al guardar los datos de la encuesta');
            console.log(`Error EncuestaController[Encuesta]: ${ex}`);
        }
    }
}

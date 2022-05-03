import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Resolver } from "../services/resolver";

export class TestingController{
    public async Testing(req:Request, res:Response): Promise<void>{

        //*Información importante 
        //!Advertencias
        //TODO:Tareas a hacer
        //?Cuestiones que se deben de discutir

        //!PREGUTANLE AL HÉCTOR BIEN QUE SON ESTÁS STORED PROCEDURES
        //!CREO QUE ME DIJO DESPUES DE LA COMIDA
        //* SP_Sucursales_Bloquear_Inventario_New
        //* SP_Sucursales_Bloquear_Inventario_Modificar_New

        /**
         *TODO1: MAÑANA LE TENGO QUE PREGUNTAR A ISRA COMO SE LE HACE CON EL INVENTARIO DE CADA SUCURSAL O PLAYER
         *TODO1 CONTINUACIÓN: TAMBIEN SI SE TIENE QUE CAMBIAR ALGO PARA LAS DIFERENTES REDES
         */
        try{
            // let data = req.body;
            // console.log(data);
            // new Resolver().success(res, 'Inventario consultado correctamente', data);

            // //TODO: JALAR EL INVENTARIO POR SUCURSAL O PREGUNTARLE A ZEN BIEN COMO MOSTRAR EL INVENTARIO
            // //? CONTEMPLAR CUAL CONSULTA ES LA QUE VOY A UTLIZAR
            // //* CONSULTA ISRA

            const inventario = await getConnection('second')
            .query(`SELECT s.Id_Negocio,s.Id_Sucursal,p.Id_Player, s.Nombre_Sucursal, Segundos,fecha FROM lst_sucursales_sac s 
            JOIN Lst_Sucursales_Inventario i ON i.Id_Sucursal=s.Id_Sucursal 
            JOIN Lst_Sucursales_Bitacora_SAC bi ON bi.Id_Sucursal=s.Id_Sucursal 
            JOIN Lst_Players p ON p.Id_Sucursal = s.Id_Sucursal
            WHERE s.Id_Sucursal IN(301, 100, 312001)
            AND bi.Remodelacion <> 1 
            AND bi.PorInstalar <> 1 
            AND bi.Cierre_Administrativo <> 1
            AND bi.Sin_Enlace <> 1 
            AND bi.Factibilidad = 1 
            AND s.Activa = 1 
            AND i.fecha BETWEEN '2022-04-11' AND '2022-04-16' 
            ORDER BY i.fecha,s.id_sucursal`);
            // const inventario = await getConnection('second')
            // .query(`SELECT s.Id_Sucursal,s.Nombre_Sucursal ,Segundos,fecha FROM lst_sucursales_sac s 
            // JOIN Lst_Sucursales_Inventario i ON i.Id_Sucursal=s.Id_Sucursal 
            // JOIN Lst_Sucursales_Bitacora_SAC bi ON bi.Id_Sucursal=s.Id_Sucursal 
            // WHERE s.Id_Negocio= ${req.body.idRed}
            // AND bi.Remodelacion <> 1 
            // AND bi.PorInstalar <> 1 
            // AND bi.Cierre_Administrativo <> 1
            // AND bi.Sin_Enlace <> 1 
            // AND bi.Factibilidad = 1 
            // AND s.Activa = 1 
            // AND i.fecha BETWEEN '${req.body.fechaInicio}' AND '${req.body.fechaFinal}' 
            // ORDER BY i.fecha,s.id_sucursal`)

            // //*CONSULTA HÉCTOR
            
            //const inventario = await getConnection('second')
            //.query(`SELECT T.Id_Sucursal, T.Fecha, T.Segundos
            //FROM (SELECT *, (Segundos) nuevaOcupacion
            //FROM Lst_Sucursales_Inventario
            //WHERE Id_Sucursal IN(SELECT item FROM fnSplit('100,107,110, 312005',',')) 
            //AND Fecha BETWEEN '2022-02-22' 
            //AND '2022-02-24')T`)
            new Resolver().success(res, 'Inventario consultado correctamente', inventario);
        }
        catch(ex){
            res.writeHead(401, {'content-type':'image/jpg'});
            console.log(`[¿Qué cómo que no?]: Error TestingController[Testing]: ${ex}`);
        }
    }
}
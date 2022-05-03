import { Request, Response } from "express";
import { getConnection } from 'typeorm';
import { Resolver } from "../services/resolver";
import { Inventario } from "../libs/interfaces";
export class RedesController{
    public async SelectNetwork(req:Request, res:Response):Promise<void>{
        try{
            // const redes = await getConnection('second')
            // .query('SELECT Nombre_Negocio FROM Cat_Negocio WHERE Id_Negocio IN (1,18,29,35)')

            const redes = await getConnection('second')
            .query('SELECT Nombre_Negocio, Id_Negocio FROM Cat_Negocio WHERE Id_Negocio IN (1,18,29,35)')

            // const redes = await getConnection('second')
            // .query('SELECT * FROM Lst_Sucursales_SAC WHERE Id_Negocio = 1')


            new Resolver().success(res, "Redes Obtenidas", redes);
            // res.send('redes');
        }
        catch(ex){
            new  Resolver().error(res, 'Error al obtener las redes');
            console.log(`Error RedesController[SelectNetwork]: ${ex}`);
        }
    }

    public async SelectBranch(req:Request, res:Response):Promise<void>{
        try{

            //SF = 50,000 es para que traiga todas las sucursales.
            //SF = A 
            console.log(req.body);

            if(req.body.IdNegocio == 1){
                console.log('Se selecciono banco Azteca');
                const sucursal = await getConnection('second')
                .query(`SELECT a.Nombre_Sucursal AS Nombre_Sucursal, a.Id_Sucursal ,a.Latitud, a.Longitud, a.Id_Negocio, a.Ciudad, a.CP, a.Estado, a.Colonia FROM Lst_Sucursales_SAC a
                INNER JOIN Lst_Sucursales_Bitacora_SAC b
                ON a.Id_Sucursal=b.Id_Sucursal
                WHERE a.Id_Negocio= ${req.body.IdNegocio} AND Activa=1 AND b.Cierre_administrativo<>1 AND PorInstalar<>1 AND Cerrada<>1 AND a.Id_Sucursal < 50000`)
    
                //req.body.IdNegocio
                new Resolver().success(res, 'Sucursales Obtenidas', sucursal);
            }
            else{
                console.log('No se selecciono banco azteca');
                const sucursal = await getConnection('second')
                .query(`SELECT a.Nombre_Sucursal AS Nombre_Sucursal, a.Id_Sucursal ,a.Latitud, a.Longitud, a.Id_Negocio, a.Ciudad, a.CP, a.Estado, a.Colonia FROM Lst_Sucursales_SAC a
                INNER JOIN Lst_Sucursales_Bitacora_SAC b
                ON a.Id_Sucursal=b.Id_Sucursal
                WHERE a.Id_Negocio= ${req.body.IdNegocio} AND Activa=1 AND b.Cierre_administrativo<>1 AND PorInstalar<>1 AND Cerrada<>1`)
    
                
                //req.body.IdNegocio
                new Resolver().success(res, 'Sucursales Obtenidas', sucursal);              
            }

        }
        catch(ex){
            new  Resolver().error(res, 'Error al obtener las redes');
            console.log(`Error RedesController[SelectBranch]: ${ex}`);
        }
    }

    public async SelectPlayer(req:Request, res:Response):Promise<void>{
        try{
            const player = await getConnection('second')
            .query(`SELECT * FROM Lst_Players a 
            INNER JOIN Lst_Sucursales_Bitacora_SAC b
            ON a.Id_Sucursal = b.Id_Sucursal 
            WHERE b.Nombre_Sucursal = '${req.body.NombreSucursal}' 
            AND activo = 1
            AND a.Id_Negocio IN(${req.body.IdRed}) 
            AND b.Cierre_administrativo<>1 AND Cerrada<>1 
            AND PorInstalar<>1`)

            // const player1 = await getConnection('second')
            // .query(`SELECT * FROM Lst_Players a
            // INNER JOIN Lst_Sucursales_Bitacora_SAC b
            // ON a.Id_Sucursal=b.Id_Sucursal
            // WHERE activo=1 
            // AND a.Id_Negocio in(${req.body.IdNegocio}) 
            // AND b.Cierre_administrativo<>1 
            // AND Cerrada<>1 
            // AND PorInstalar<>1
            // AND a.Id_Sucursal = ${req.body.IdSucursal}`)

            new Resolver().success(res, 'Players Obtenidos', player);
        }
        catch(ex){
            new Resolver().error(res, 'Error al obtener los players');
            console.log(`Error RedesController[SelectPlayer]: ${ex}`);
        }
    }

    public async Stock(req:Request, res:Response): Promise<void>{
        try{
            let data:Inventario = req.body;
            let fechaInicio = data.FechaInicio;
            let fechaFin = data.FechaFin;
            let sucursal = data.Sucursal;
            
            let sucursales = ''
            sucursal.forEach(element => {
                sucursales += element.idSucursal + ',';
            });
            // console.log(sucursales);

            let datos = sucursales.slice(0,-1);
            // console.log(datos);

            const inventario = await getConnection('second')
            .query(`SELECT s.Id_Negocio,s.Id_Sucursal,p.Id_Player, s.Nombre_Sucursal, Segundos,fecha FROM lst_sucursales_sac s 
            JOIN Lst_Sucursales_Inventario i ON i.Id_Sucursal=s.Id_Sucursal 
            JOIN Lst_Sucursales_Bitacora_SAC bi ON bi.Id_Sucursal=s.Id_Sucursal 
            JOIN Lst_Players p ON p.Id_Sucursal = s.Id_Sucursal
            WHERE s.Id_Sucursal IN(${datos})
            AND bi.Remodelacion <> 1 
            AND bi.PorInstalar <> 1 
            AND bi.Cierre_Administrativo <> 1
            AND bi.Sin_Enlace <> 1 
            AND bi.Factibilidad = 1 
            AND s.Activa = 1 
            AND i.fecha BETWEEN '${fechaInicio}' AND '${fechaFin}' 
            ORDER BY i.fecha,s.id_sucursal`);
            new Resolver().success(res, 'Inventario consultado correctamente', inventario);
        }
        catch(ex){
            new Resolver().error(res, 'Error al obtener el inventario');
            console.log(`Error RedesController[Stock]: ${ex}`);
        }
    }
}

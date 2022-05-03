import { Request, Response } from "express";
import { LstUsuario } from "../models/usuario";
import { getRepository } from "typeorm";
import jwt from 'jsonwebtoken';
import { Resolver } from "../services/resolver";

export class AuthController{
    //*registrar usuario
    public async SingUp(req:Request, res:Response):Promise<void>{
        try{
            //SAVING NEW USER
            await getRepository(LstUsuario)
            .createQueryBuilder()
            .insert()
            .into(LstUsuario)
            .values({
                NombreUsuario: req.body.username,
                Correo: req.body.email,
                Contrasenia: await new LstUsuario().encryptPassword(req.body.password),//req.body.password
            })
            .execute();
            
            const user = await getRepository(LstUsuario).find({
                where:{ Correo: req.body.email},
            })

            let payload = {
                user: user
            }
            
            payload['token'] = jwt.sign(payload, process.env.TOKEN_SECRET, {
                expiresIn: process.env.EXPIRATION
            })
            console.log(payload);
            new Resolver().success(res, 'Usuario Guardado Correctamente', payload);
            // console.log(user[0].idUsuario);
            // let userId = user[0].idUsuario;
            // const token:string = jwt.sign({id: userId}, process.env.TOKEN_SECRET);
            // res.json(token);
            
            // console.log(`$Token SingUp: ${token}`);
            // res.header('auth-token', token).json(user);
        }
        catch(ex){
            console.log(`Error método SingUp:${ex}`)
        }
    }
    //*login
    public async SingIn(req:Request, res:Response):Promise<void>{
        try{
            const user = await getRepository(LstUsuario)
            .findOne({
                where:{NombreUsuario : req.body.username}
            });
            
            if(!user){
                new Resolver().error(res, 'username or password is wrong')
            }
            
            const correctPassword:boolean = await user.validatePassword(req.body.password);
            if(!correctPassword){
                new Resolver().error(res, 'invalid password');
            }
            
            let payload = {
                user:user
            }
            payload['token'] = jwt.sign(payload, process.env.TOKEN_SECRET, { 
                expiresIn: process.env.EXPIRATION,
                
            })
            console.log(payload);
            new Resolver().success(res, 'User authorized', payload)
            //let userId = user.idUsuario;
            //console.log(userId);
            //const token = jwt.sign({id: user}, process.env.TOKEN_SECRET,{
                //expiresIn:60 *60 *24})
            //res.header('auth-token', token).json(user);
           //console.log(`Token SingIn:${token}`);
        }
        catch(ex){
            console.log(`Error método SingIn:${ex}`)
        }
    }

    //*Logout
    public async LogOut(req:Request, res:Response):Promise<void>{
        
    }
}
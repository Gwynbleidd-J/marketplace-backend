import { Request, Response } from "express";
import { LstUsuario } from "../models/usuario";
import { getRepository, getTreeRepository } from "typeorm";
import jwt from 'jsonwebtoken';
import { CatEmpresa } from '../models/empresa';

export class AuthController{

    //registrar usuario
    public async SingUp(req:Request, res:Response): Promise<void> {
        try{
            // //SAVING NEW USER
            // await getRepository(LstUsuario)
            // .createQueryBuilder()
            // .insert()
            // .into(LstUsuario)
            // .values({
            //     NombreUsuario: req.body.username,
            //     Correo: req.body.email,
            //     Contrasenia: await new LstUsuario().encryptPassword(req.body.password)//req.body.password
            // })
            // .execute();

            // const user = await getRepository(LstUsuario).find({
            //     where:{ Correo: req.body.email},
            //     select:['idUsuario', "NombreUsuario", "Correo", "Contrasenia"]
            // })
            // console.log(user[0].idUsuario);
            // let userId = user[0].idUsuario;
            // const token:string = jwt.sign({id: userId}, process.env.TOKEN_SECRET);
            // console.log(`$Token SingUp: ${token}`);
            // res.header('auth-token', token).json(user);
        }
        catch(ex){
            console.log(`Error método SingUp:${ex}`)
        }
    }

    //login
    public async SingIn(req:Request, res:Response): Promise<any>{
        try{
            const user = await getRepository(LstUsuario)
            .findOne({
                where:{NombreUsuario : req.body.username}
            });

            if(!user){
                return res.status(400).json('username or password is wrong');
            }

            const correctPassword:boolean = await user.validatePassword(req.body.password);
            if(!correctPassword){
                return res.status(400).json('Invalid Password');
            }
            let userId = user.idUsuario;
            console.log(userId);

           const token = jwt.sign({id: user.idUsuario}, process.env.TOKEN_SECRET,{
                expiresIn:60 *60 *24
            })

            res.header('auth-token', token).json(user);
            console.log(`Token SingIn:${token}`);
        }
        catch(ex){
            console.log(`Error método SingIn:${ex}`)
        }
    }

    //Dato del Usuario
    public async Profile(req:Request, res:Response){
        // //Apartir de aquí vamos a mandarle al servidor un token
        // //para que nos deje hacer cosas y decirle que estamos autorizados.
        try{
            res.send('profile')
            // const user = await getRepository(LstUsuario).findByIds(req.userId)
            // console.log(user);
        }
        catch(ex){
            console.log(`Error método Profile:${ex}`)
        }

    }
//signup
//signin
//otras rutas
//profile

}
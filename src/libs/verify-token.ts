import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { Resolver } from "../services/resolver";

export const  TokenValidation = (req:Request, res:Response, next:NextFunction)  =>{
    let token = req.headers['authorization']
    token = token?.replace('Bearer', '').trim();

    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, (err, data) =>{
            if(err){
                new Resolver().error(res, 'Unahutorized token');
            }

            else{
                next();
            }
        })
    }
    else{
        new Resolver().error(res, 'Token not found in headers');
    }
    // const token = req.header('auth-token');
    // if(!token){
    //     return res.status(401).json('Access denied');
    // }

    // const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    // console.log('Payload TokenValidation:', payload);
}
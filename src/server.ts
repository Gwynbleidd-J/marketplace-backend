require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { createConnection } from "typeorm";
import { AuthRouting } from './routes/auth-routing';
import { Resolver } from './services/resolver';

export class Server{
    public app:express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.loadRoutes();
    }

    public config():void{
        this.app.set('port', process.env.SERVER_PORT || 3000);
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cors());
        this.app.use(express.json());
    }

    public loadRoutes():void{
        this.app.get('/', (req, res) => {res.send({message: 'API MarketPlace'})})
        this.app.get('/api', (req, res) =>{res.send({message: process.env.WELCOME_MESSAGE})});
        this.app.use('/api/auth', new AuthRouting().router);
        this.app.get('*', (req, res) => new Resolver().notFound(res, 'Oops! This route not exists.'));
    }

    public initDatabase():void{
        createConnection().then(connect =>{
            console.log(`SQL Server Database connected on ${connect.name}`);
        }).catch(error =>{
            console.log(`Can't connect to Database: ${error}`);
        });
    }

    public start():void{
        this.app.listen(this.app.get('port'), () =>{
            console.log(`Server listen on port ${this.app.get('port')}`);
            this.initDatabase();
        });
    }
}

const server = new Server();
server.start();
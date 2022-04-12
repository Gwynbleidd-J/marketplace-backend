require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { createConnection } from "typeorm";
import { AuthRouting } from './routes/auth-routing';
import { Resolver } from './services/resolver';
import morgan from 'morgan';
import { RedesRouting } from './routes/redes-routing';

export class Server{
    public app:express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.loadRoutes();
    }

    public config():void{
        //config
        this.app.set('port', process.env.SERVER_PORT || 3000);
        
        //middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    public loadRoutes():void{
        this.app.get('/', (req, res) => {res.send({message: 'API MarketPlace'})})
        this.app.get('/api', (req, res) =>{res.send({message: process.env.WELCOME_MESSAGE})});
        this.app.use('/api/auth', new AuthRouting().router);
        this.app.use('/api/redes', new RedesRouting().router);
        this.app.get('*', (req, res) => new Resolver().notFound(res, "D'oh! This route not exists."));
    }

    public initDatabase():void{
        createConnection("default").then(connect =>{
            console.log(`SQL Server Database connected on ${connect.name}`);
        }).catch(error =>{
            console.log(`Can't connect to Database: ${error}`);
        });

        // createConnection("second").then(connect =>{
        //     console.log(`Second SQL Connection connected on ${connect.name}`)
        // }).catch(error =>{
        //     console.log(`Can't connect to Second Database: ${error}`);
        // });
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
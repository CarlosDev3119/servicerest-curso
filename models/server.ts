import express, { Application } from 'express';	
import { ServerInterface } from '../interfaces';

import cors from 'cors';


export class Server implements ServerInterface {

    public port: string | number;
    public app: Application;

    constructor (){
        this.port = process.env.PORT || 8080;
        this.app = express();
    }

    middlewares(){

        //cors domain
        this.app.use( cors() );

        //parse body
        this.app.use( express.json() );

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Listening on port: ${this.port}`)
        })
    }

}
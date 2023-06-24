import { Application } from "express";

type PathObject = {
    [key: string]: string;
}

export interface ServerInterface {
    port: string | number;
    app: Application;
    paths?: PathObject;
}
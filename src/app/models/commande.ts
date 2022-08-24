import { Client } from "./client";
import { User } from "./user";

export interface Commande {
    numCmd:string,
    date:Date,
    client:Client,
    montantTTC:number,
    status:Boolean,
    caissier:User

}

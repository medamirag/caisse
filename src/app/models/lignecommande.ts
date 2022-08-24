import { Commande } from "./commande";
import { Product } from "./product";

export interface Lignecommande {
    commande:Commande,
    qte:number,
    product:Product,
    price:number,
    unit:string
}

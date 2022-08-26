import { Commande } from "./commande";
import { Product } from "./product";

export interface LigneCommande {
    commande:Commande,
    qte:number,
    product:Product,
    price:number,
    unit:string
}

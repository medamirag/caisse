import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LignecommandeService {
  getAllByIDCommande(idCommande: number) {
    throw new Error('Method not implemented.');
  }
  remove(idLigneCommande: Number) {
    throw new Error('Method not implemented.');
  }
  addByCommande(idCommande: number) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}

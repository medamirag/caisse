import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  create() {
    throw new Error('Method not implemented.');
  }
  add(commande: Commande) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}

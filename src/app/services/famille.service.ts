import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {
  getAll(): import("../models/famille").Famille[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}

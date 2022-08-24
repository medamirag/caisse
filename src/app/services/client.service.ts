import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients!:Client[];
  
  getClientByCodeClient(codeClient:string):Client|any{
  return this.clients.find(abcd=>abcd.codeClient==codeClient)
    
  }


  constructor() {
this.clients=[
  {codeClient:"2233",nameClient:'nameclient'},
  {codeClient:"2225",nameClient:'Hela'},
  {codeClient:"2255",nameClient:'issam'},
]


  }


    
}

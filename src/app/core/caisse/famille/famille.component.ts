import { Component, OnInit } from '@angular/core';
import { Famille } from 'src/app/models/famille';
import { FamilleService } from 'src/app/services/famille.service';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.scss']
})
export class FamilleComponent implements OnInit {
allFamilles!:Famille[];
  constructor(private famService:FamilleService) { }

  ngOnInit(): void {
    this.allFamilles=this.famService.getAll()
  }
  setSelectedFamille(idFamille:number){
    localStorage.setItem('selectFam',idFamille.toString())
  }

}

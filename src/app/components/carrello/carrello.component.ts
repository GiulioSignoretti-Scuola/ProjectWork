import { Component } from '@angular/core';
import { prodotto } from '../../models/prodotto';
import { CarrelloService } from '../../services/carrello.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {
  carrello:prodotto []=[];

  constructor(public carrelloService:CarrelloService){
    this.carrello=this.carrelloService.getAll();
  }

  elimina(prodotto:prodotto){
    this.carrelloService.remove(prodotto);
    this.carrello=this.carrelloService.getAll();
  }

}

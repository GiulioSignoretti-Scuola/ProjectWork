import { Component } from '@angular/core';
import { prodotto } from '../../models/prodotto';
import { CarrelloService } from '../../services/carrello.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';

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

  aggiungiQuantita(i: prodotto){
    i.Quantita++;
  }

  diminuisciQuantita(i: prodotto){
    if (i.Quantita >= 1)
      i.Quantita--;
  }

  diminuisci_elimia(prodotto:prodotto){
    if (prodotto.Quantita == 0){
      this.carrelloService.remove(prodotto);
      this.carrello=this.carrelloService.getAll();
    }
      
  }

}

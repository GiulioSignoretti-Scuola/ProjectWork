import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { prodotto } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';
import { CommonModule } from '@angular/common';
import { Ingrediente } from '../../models/ingredienti';
import { CarrelloComponent } from '../carrello/carrello.component';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-singolo-prodotto',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './singolo-prodotto.component.html',
  styleUrl: './singolo-prodotto.component.css'
})

export class SingoloProdottoComponent {
  
  prodotto: prodotto | undefined;

  constructor(private prodottiServices: ProdottiService, private routes: ActivatedRoute, private carrelloService: CarrelloService){
    this.routes.paramMap.subscribe(params => {
      let Id = routes.snapshot.params['id'];
      if (Id != undefined)
        this.prodotto = prodottiServices.getProdottiById(Id);
    })
  }
  aggiungiIngrediente(i: Ingrediente){
    if (i.Quantita != i.QuantitaMax)
      i.Quantita++;
  }
  diminuisciIngrediente(i: Ingrediente){
    if (i.Quantita != i.QuantitaMin)
      i.Quantita--;
  }
  aggiungiAlCarrello(prodotto: prodotto | undefined){
    if (prodotto != undefined){
      prodotto.Quantita = 1;
      this.carrelloService.add(prodotto)
    }      
  }
}

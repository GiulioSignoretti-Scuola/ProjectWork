import { Component } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { prodotto } from '../../models/prodotto';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodotto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodotto.component.html',
  styleUrl: './prodotto.component.css'
})
export class ProdottoComponent {

  prodotti: prodotto[] = [];

  constructor(private prodottiServices: ProdottiService, private routes: ActivatedRoute){

    this.routes.paramMap.subscribe(params => {
      let categoria = routes.snapshot.params['categoria'];
      if (categoria != undefined)
        this.prodotti = prodottiServices.getProdottiByCategoria(categoria);
    })
  }
} 
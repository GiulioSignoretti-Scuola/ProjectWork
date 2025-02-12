import { Component } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { prodotto } from '../../models/prodotto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodotto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodotto.component.html',
  styleUrl: './prodotto.component.css'
})
export class ProdottoComponent {

  prodotti: prodotto[] = [];

  constructor(private prodottiServices: ProdottiService){
    this.prodotti = prodottiServices.getProdottiByCategoria('panini');
  }
} 
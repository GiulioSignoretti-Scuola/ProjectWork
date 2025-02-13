import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { prodotto } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singolo-prodotto',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './singolo-prodotto.component.html',
  styleUrl: './singolo-prodotto.component.css'
})
export class SingoloProdottoComponent {
    prodotto: prodotto | undefined;
  
    constructor(private prodottiServices: ProdottiService, private routes: ActivatedRoute){
  
      this.routes.paramMap.subscribe(params => {
        let Id = routes.snapshot.params['id'];
        if (Id != undefined)
          this.prodotto = prodottiServices.getProdottiById(Id);
      })
    }
}

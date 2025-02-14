import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { ProdottoComponent } from "../prodotto/prodotto.component";
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { prodotto } from '../../models/prodotto';
import { SingoloProdottoComponent } from "../singolo-prodotto/singolo-prodotto.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent, SideBarComponent, ProdottoComponent, SingoloProdottoComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  singoloProdotto: boolean = false;

  constructor(private prodottiServices: ProdottiService, private routes: ActivatedRoute){
    this.routes.paramMap.subscribe(params => {
      this.singoloProdotto = routes.snapshot.params['id'] != undefined;
    })
  }
}

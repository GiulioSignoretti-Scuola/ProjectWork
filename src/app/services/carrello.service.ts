import { Injectable } from '@angular/core';
import { prodotto } from '../models/prodotto';
import { Ingrediente } from '../models/ingredienti';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private carrello:prodotto[] = [];

  private ingrediente: Ingrediente[] = [];

  constructor() { }

  getAll():prodotto[] {
    return this.carrello;
  }

  add(book:prodotto) : boolean {
    if( this.carrello.find(b => b.Id === book.Id)==undefined ) 
    {
      this.carrello.push(book);
      return true;
    }
    return false;
  } 

  remove(book:prodotto) {
    this.carrello = this.carrello.filter(b => b.Id !== book.Id);
  }

  get count():number {
    return this.carrello.length;
  }

  get totaleProdotti(): number {
    return this.carrello.reduce((total, prodotto) => total + prodotto.Quantita, 0);
  }

  get totaleImporto(): number {
    const totaleProdotti = this.carrello.reduce(
    (total, prodotto) => total + (
    (prodotto.Prezzo +
      
    ( prodotto.Ingredienti!=undefined ? prodotto.Ingredienti.reduce((t,i) => t + i.IncrementoPrezzo*Math.max(i.Quantita-i.quantitaIniziale,0),0) : 0)

    ) * prodotto.Quantita), 0);
    return totaleProdotti;
  }

  getimportoProdotto(prodotto: prodotto): number{
    const importoProdotto = prodotto.Prezzo + ( prodotto.Ingredienti!=undefined ? prodotto.Ingredienti.reduce((t,i) => t + i.IncrementoPrezzo*Math.max(i.Quantita-i.quantitaIniziale,0),0) : 0)
    return importoProdotto;
  }
}

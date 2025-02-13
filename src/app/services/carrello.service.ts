import { Injectable } from '@angular/core';
import { prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private carrello:prodotto[] = [];

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
}

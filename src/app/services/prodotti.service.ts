import { Injectable } from '@angular/core';
import { prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor() { }

  

  private prodotti: prodotto[] = [
    {
        Id: 1,
        Descrizione: "Cheeseburger",
        Prezzo: 5.99,
        Categoria: "Panini",
        Immagine:"Cheeseburger.png",
        Ingredienti: [
            { Id: 101, Descrizione: "Pane Burger", Quantita: 1, QuantitaMin: 1, QuantitaMax: 1, IncrementoPrezzo: 0,Immagine:'PaneBurger.png', quantitaIniziale: 1  },
            { Id: 102, Descrizione: "Carne di manzo", Quantita: 1, QuantitaMin: 1, QuantitaMax: 2, IncrementoPrezzo: 1, Immagine:"CarneManzo.png", quantitaIniziale: 1 },
            { Id: 103, Descrizione: "Formaggio Cheddar", Quantita: 1, QuantitaMin: 0, QuantitaMax: 2, IncrementoPrezzo: 0.4, Immagine:"FormaggioCheddar.png", quantitaIniziale: 1 },
            { Id: 104, Descrizione: "Ketchup", Quantita: 1, QuantitaMin: 0, QuantitaMax: 2, IncrementoPrezzo: 0.4, Immagine:"Ketchup.png", quantitaIniziale: 1 }
        ],
        Quantita: 1,
    },
    {
        Id: 2,
        Descrizione: "Chicken Burger",
        Prezzo: 6.49,
        Categoria: "Panini",
        Immagine:"ChickenBurger.png",
        Ingredienti: [
            { Id: 201, Descrizione: "Pane Burger", Quantita: 1, QuantitaMin: 1, QuantitaMax: 1, IncrementoPrezzo: 0,Immagine:"PaneBurger.png", quantitaIniziale: 1 },
            { Id: 202, Descrizione: "Petto di pollo fritto", Quantita: 1, QuantitaMin: 1, QuantitaMax: 2, IncrementoPrezzo: 1, Immagine:"PolloFritto.png", quantitaIniziale: 1 },
            { Id: 203, Descrizione: "Maionese", Quantita: 1, QuantitaMin: 0, QuantitaMax: 2, IncrementoPrezzo: 0.4, Immagine:"Maionese.png", quantitaIniziale: 1 },
            { Id: 204, Descrizione: "Insalata", Quantita: 1, QuantitaMin: 0, QuantitaMax: 2, IncrementoPrezzo: 0.4, Immagine:"Insalata.png", quantitaIniziale: 1 }
        ],
        Quantita: 1,
    },
    {
        Id: 3,
        Descrizione: "Bacon Burger",
        Prezzo: 7.49,
        Categoria: "Panini",
        Immagine:"BaconBurger.png",
        Ingredienti: [
            { Id: 301, Descrizione: "Pane Burger", Quantita: 1, QuantitaMin: 1, QuantitaMax: 1, IncrementoPrezzo: 0,Immagine:"PaneBurger.png", quantitaIniziale: 1  },
            { Id: 302, Descrizione: "Carne di manzo", Quantita: 1, QuantitaMin: 1, QuantitaMax: 2, IncrementoPrezzo: 1, Immagine:"CarneManzo.png", quantitaIniziale: 1 },
            { Id: 303, Descrizione: "Bacon", Quantita: 2, QuantitaMin: 1, QuantitaMax: 3,IncrementoPrezzo:0.6, Immagine:"Bacon.png", quantitaIniziale: 2 },
            { Id: 304, Descrizione: "Formaggio Cheddar", Quantita: 1, QuantitaMin: 0, QuantitaMax: 2,IncrementoPrezzo:0.4, Immagine:"FormaggioCheddar.png", quantitaIniziale: 1 }
        ],
        Quantita: 1,
    },
    {
        Id: 4,
        Descrizione: "BBQ Burger",
        Prezzo: 7.99,
        Categoria: "Panini",
        Immagine:"BBQBurger.png",
        Ingredienti: [
            { Id: 601, Descrizione: "Pane Burger", Quantita: 1, QuantitaMin: 1, QuantitaMax: 1, IncrementoPrezzo: 0, Immagine:"PaneBurger.png", quantitaIniziale: 1  },
            { Id: 602, Descrizione: "Carne di manzo", Quantita: 1, QuantitaMin: 1, QuantitaMax: 2, IncrementoPrezzo: 1, Immagine:"CarneManzo.png", quantitaIniziale: 1 },
            { Id: 603, Descrizione: "Salsa BBQ", Quantita: 1, QuantitaMin: 0, QuantitaMax: 2,IncrementoPrezzo:0.4, Immagine:"SalsaBBQ.png", quantitaIniziale: 1 },
            { Id: 604, Descrizione: "Cipolle fritte", Quantita: 1, QuantitaMin: 0, QuantitaMax: 2,IncrementoPrezzo:0.6, Immagine:"CipolleFritte.png", quantitaIniziale: 1 }
        ],
        Quantita: 1,
    },
    {
        Id: 5,
        Descrizione: "Guacamole Burger",
        Prezzo: 8.49,
        Categoria: "Panini",
        Immagine:"GuacamoleBurger.png",
        Ingredienti: [
            { Id: 701, Descrizione: "Pane Integrale", Quantita: 1, QuantitaMin: 1, QuantitaMax: 1, IncrementoPrezzo: 0,Immagine:"PaneBurger.png", quantitaIniziale: 1},
            { Id: 702, Descrizione: "Carne di manzo", Quantita: 1, QuantitaMin: 1, QuantitaMax: 2, IncrementoPrezzo: 1, Immagine:"CarneManzo.png", quantitaIniziale: 1 },
            { Id: 703, Descrizione: "Guacamole", Quantita: 1, QuantitaMin: 0, QuantitaMax: 2,IncrementoPrezzo:0.4, Immagine:"Guacamole.png", quantitaIniziale: 1 },
            { Id: 704, Descrizione: "Pomodoro", Quantita: 1, QuantitaMin: 0, QuantitaMax: 2,IncrementoPrezzo:0.4, Immagine:"Pomodoro.png", quantitaIniziale: 1 },
        ],
        Quantita: 1,
    },
    { Id: 6, Descrizione: "Patatine Fritte", Prezzo: 2.99, Categoria: "Contorni", Immagine:"PatatineFritte.png", Quantita: 1},
    { Id: 7, Descrizione: "Anelli di Cipolla", Prezzo: 3.49, Categoria: "Contorni", Immagine:"AnelliCipolla.png", Quantita: 1},
    { Id: 8, Descrizione: "Nuggets di Pollo", Prezzo: 4.99, Categoria: "Contorni", Immagine:"NuggetsPollo.png", Quantita: 1},
    { Id: 9, Descrizione: "Insalata Mista", Prezzo: 3.99, Categoria: "Contorni", Immagine:"InsalataMista.png", Quantita: 1},
    { Id: 10, Descrizione: "Mozzarella Sticks", Prezzo: 4.49, Categoria: "Contorni", Immagine:"MozzarellaSticks.png", Quantita: 1},
    { Id: 11, Descrizione: "Coca Cola", Prezzo: 1.99, Categoria: "Bevande", Immagine:"CocaCola.png", Quantita: 1},
    { Id: 12, Descrizione: "Acqua Naturale", Prezzo: 1.49, Categoria: "Bevande", Immagine:"AcquaNaturale.png", Quantita: 1},
    { Id: 13, Descrizione: "Acqua Frizzante", Prezzo: 1.49, Categoria: "Bevande", Immagine:"AcquaFrizzante.png", Quantita: 1},
    { Id: 14, Descrizione: "Sprite", Prezzo: 1.99, Categoria: "Bevande", Immagine:"Sprite.png", Quantita: 1},
    { Id: 15, Descrizione: "Tè Freddo al Limone", Prezzo: 2.49, Categoria: "Bevande", Immagine:"TeLimone.png", Quantita: 1},
    { Id: 16, Descrizione: "Espresso", Prezzo: 1.99, Categoria: "Caffè e Dolci", Immagine:"Espresso.png", Quantita: 1},
    { Id: 17, Descrizione: "Cappuccino", Prezzo: 2.99, Categoria: "Caffè e Dolci", Immagine:"Cappuccino.png" , Quantita: 1},
    { Id: 18, Descrizione: "Latte Macchiato", Prezzo: 3.49, Categoria: "Caffè e Dolci", Immagine:"LatteMacchiato.png", Quantita: 1 },
    { Id: 19, Descrizione: "Cheesecake", Prezzo: 4.99, Categoria: "Caffè e Dolci", Immagine:"Cheesecake.png", Quantita: 1 },
    { Id: 20, Descrizione: "Brownie al Cioccolato", Prezzo: 3.99, Categoria: "Caffè e Dolci", Immagine:"Brownie.png", Quantita: 1 }
];

getProdottiByCategoria(categoria: string): prodotto[] {
    return this.prodotti.filter(prodotto => prodotto.Categoria.toLowerCase() === categoria.toLowerCase());
}

getProdottiById(Id: number): prodotto | undefined {
    return this.prodotti.find(prodotto => prodotto.Id == Id);
}

}
import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../services/prodotti.service';
import { Ingrediente } from './ingredienti';

export interface prodotto {
    Id: number;
    Descrizione: string;
    Prezzo: number;
    Categoria: string;
    Ingredienti?: Ingrediente[];
    Immagine: string;
    Quantita: number;
}

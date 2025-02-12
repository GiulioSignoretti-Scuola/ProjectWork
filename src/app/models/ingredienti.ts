export interface Ingrediente {
    Id: number;
    Descrizione: string;
    Quantita: number;
    QuantitaMin: number;
    QuantitaMax: number;
    IncrementoPrezzo?: number;
    Immagine: string;
    }
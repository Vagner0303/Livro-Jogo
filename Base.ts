import { Personagem } from "../../Downloads/beta"
import { Item } from "./Inventario"
import { Inventario } from "./Inventario"

// --------------------- Página Base --------------------
export abstract class Paginabase {
  constructor(public id: number, public texto: string) {}
  abstract executar(): void;
}

export class PaginaComun extends Paginabase {
  escolhas: any[];
  constructor(id: number, texto: string, escolhas: any[]) {
    super(id, texto);
    this.escolhas = escolhas;
  }

  executar(): void {
    console.log(this.texto);
  }
}



class Paginabatalha extends Paginabase {
     constructor(
         id: number,
         texto: string,
         public inimigo: Personagem,
         public recompensa: Item[]
     ) {
         super(id, texto);
     }
     executar(): void {
         console.log(this.texto);
         console.log(`enfrentando: ${this.inimigo.nome} (vida: ${this.inimigo.vida}`);
         const heroi = new Personagem(1, "Frodo", 100, 60);

         while (heroi.estavivo() && this.inimigo.estavivo()) {
             heroi.atacar(this.inimigo);
             if (this.inimigo.estavivo()) {
                 this.inimigo.atacar(heroi);
             }
         }
         if (heroi.estavivo()) {
             console.log(`${heroi.nome} ganhou ${this.inimigo.nome}`);
             console.log("recompensa obtida:");
             this.recompensa.forEach(item => console.log(- `${item.nome}`));
         } else {
             console.log(`${heroi.nome} foi morto por ${this.inimigo.nome}`);
         }
     }
 }

 class Paginaquebracabeca extends Paginabase {
     constructor(
         id: number,
         texto: string,
         public solucao: string,
         public dica: string
     ) {
         super(id, texto);
     }

     executar(): void {
         console.log(this.texto);
         console.log("desvende o enigma");
         console.log(`dica: ${this.dica}`);
         console.log((`a resposta certa Ã©: ${this.solucao}`));
     }
 }
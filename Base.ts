import { Personagem } from "../../Downloads/beta"

abstract class Paginabase {
    constructor(public id: number, public texto: string) {
        this.id = id
        this.texto = texto
    }
    abstract executar(): void;
}

export class PaginaComun implements Paginabase {
    constructor(public id: number, public texto: string, public escolha: []) {
        this.id = id
        this.texto = texto
    }
    
    executar(): void {
        console.log(this.texto) 
    }

    Escolher(minhaEscolha: number): void {
        console.log(this.escolha[minhaEscolha])
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
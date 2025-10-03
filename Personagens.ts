
export class Personagem {
    constructor(
        private id: number,
        public nome: string,
        public vida: number,
        public ataque: number
    ) { }

    atacar(alvo: Personagem): void {
        console.log(`${this.nome} ataca ${alvo.nome} causando ${this.ataque} de dano`);
        alvo.vida -= this.ataque;
    }
    estavivo(): boolean {
        return this.vida > 0;
    }

    getID(): number{
        return this.id
    }
}


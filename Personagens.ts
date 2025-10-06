
export class Personagem {
    constructor( public id: number, public nome: string, public vida: number, public forca: number) { }

    atacar(alvo: Personagem): void {
        console.log(`${this.nome} ataca ${alvo.nome} causando ${this.forca} de dano`);
        alvo.vida -= this.forca;
    }
    estavivo(): boolean {
        return this.vida > 0;
    }

    getID(): number{
        return this.id
    }
}

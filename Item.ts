// Representa qualquer item do jogo
// Itens podem ser armas, armaduras, consumíveis ou miscelânea
export class Item {
    constructor(
        public id: number,                                  // ID único do item
        public nome: string,                                // Nome exibido
        public tipo: 'arma' | 'armadura' | 'consumivel' | 'misc', // Categoria
        public valor: number,                               // Valor ou poder
        public descricao: string                            // Descrição do item
    ) {}

    // Ação de usar o item - retorna mensagem descritiva
    usar(): string {
        return `Usando ${this.nome}: ${this.descricao}`;
    }
}
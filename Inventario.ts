import { Item } from "./Item";

// Gerencia os itens que o jogador carrega
// Controla capacidade, adição e remoção de itens
export class Inventario {
    private itens: Item[] = [];      // Lista de itens atuais
    private capacidade: number = 20; // Limite máximo de itens

    // Tenta adicionar um item, retorna true se conseguiu
    adicionarItem(item: Item): boolean {
        if (this.itens.length < this.capacidade) {
            this.itens.push(item);
            return true;
        }
        return false; // Inventário cheio
    }

    // Remove item pelo ID, retorna o item removido ou null
    removerItem(id: number): Item | null {
        const index = this.itens.findIndex(item => item.id === id);
        if (index !== -1) {
            return this.itens.splice(index, 1)[0];
        }
        return null; // Item não encontrado
    }

    // Retorna cópia da lista de itens (para não modificar diretamente)
    listarItens(): Item[] {
        return [...this.itens];
    }

    // Procura item pelo nome (busca parcial)
    encontrarItemPorNome(nome: string): Item | undefined {
        return this.itens.find(item => 
            item.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    // Retorna quantos itens estão no inventário
    getQuantidadeItens(): number {
        return this.itens.length;
    }
}
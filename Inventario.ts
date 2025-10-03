 export class Item {
    constructor(public nome: string, public descricao: string) {}
    usar(): void {
        console.log(`Você usou ${this.nome}: ${this.descricao}`);
    }
}

export class Inventario {
    private itens: Item[] = [];
    adicionarItem(item: Item): void {
        this.itens.push(item);
        console.log(`${item.nome} foi adicionado ao Inventario`);
    }

    usarItem(nome: string): boolean {
        const itemIndex = 
        this.itens.findIndex(item => item.nome === nome);
        if (itemIndex > -1) {
            this.itens[itemIndex].usar();
            this.itens.splice(itemIndex,1);
            return true;
        }
        console.log(`${nome} não foi encontrado no Inventario`);
        return false;
    }
      listaritens(): void {
        if (this.itens.length === 0) {
            console.log("Inventario vazio");
            return;
        }
        console.log("Itens no seu inventario");
        this.itens.forEach(item => {
            console.log(`${item.nome} ${item.descricao}`);
        });
    }
}

const anel = new Item("anel", "concede invisibilidade, mas corrompe o portador"); 
const espada = new Item("Espada de Aragorn", "uma lamina poderosa forjada para reis");
const lembas = new Item("pão de lembas", "restaura energia");
const capaelfica = new Item("capa elfica","camufla o usuario em florestas e montanhas");

const inventario = new Inventario();

inventario.adicionarItem(anel);
inventario.adicionarItem(espada);
inventario.adicionarItem(lembas);
inventario.adicionarItem(capaelfica);

inventario.listaritens();

inventario.usarItem("anel");
inventario.listaritens();

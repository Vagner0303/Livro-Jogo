import { Personagem } from "./Personagens";
import { Inventario } from "./Inventario";
import readlineSync from 'readline-sync';

// Classe base para todas as páginas do jogo
// Define a estrutura comum que todas as páginas devem ter
export abstract class Pagina {
    constructor(
        public id: number,           // Identificador único da página
        public texto: string,        // História que será mostrada ao jogador
        public opcoes: string[]      // Lista de escolhas disponíveis
    ) {}

    // Método que toda página deve implementar
    // Retorna a escolha do jogador como número
    abstract executar(personagem: Personagem, inventario: Inventario): number;
}

// Página comum do jogo - mostra texto e opções para o jogador
export class PaginaComun extends Pagina {
    constructor(
        id: number,
        texto: string,
        opcoes: string[]
    ) {
        super(id, texto, opcoes);
    }

    // Mostra o texto da página e as opções disponíveis
    // Captura a escolha do jogador via terminal
    executar(personagem: Personagem, inventario: Inventario): number {
        console.log(`\n ${this.texto}\n`);
        
        if (this.opcoes.length > 0) {
            console.log("Opções:");
            this.opcoes.forEach((opcao, index) => {
                console.log(`${index + 1}. ${opcao}`);
            });
            
            // Pega a resposta do jogador e converte para número
            const resposta = readlineSync.question('\nEscolha uma opção: ');
            return parseInt(resposta);
        }
        // Se não tem opções, só espera o jogador continuar
        readlineSync.question('\nPressione Enter para continuar...');
        return 0;
    }
}
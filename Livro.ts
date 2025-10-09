// Livro.ts
import { Personagem } from "./Personagens";
import { Inventario } from "./Inventario";
import { PaginaComun } from "./Base";
import { paginas } from "./Paginas";
import { Item } from "./Item";

// Classe principal que controla o fluxo do jogo
export class Livro {
    private personagem: Personagem;
    private inventario: Inventario;
    private paginaAtualId: number;

    constructor() {
        // Inicializa o personagem do jogador
        this.personagem = new Personagem(1, "Sasi", 100, 100);
        this.inventario = new Inventario();
        this.paginaAtualId = 1; // Começa na página 1
    }

    // Inicia o jogo
    iniciar(): void {
        console.log("=== A JORNADA DO ANEL ANTIGO ===");
        console.log("Bem-vindo, viajante! Suas escolhas moldarão este mundo...\n");

        this.executarCicloJogo();
    }

    // Loop principal do jogo
    private executarCicloJogo(): void {
        while (this.paginaAtualId !== 100) { // 100 é o ID final
            const paginaEncontrada = paginas.find(p => p.id === this.paginaAtualId);
            
            if (!paginaEncontrada) {
                console.log("❌ Erro: Página não encontrada!");
                break;
            }

            // Converte a página do banco de dados para uma PaginaComun
            const pagina = new PaginaComun(
                paginaEncontrada.id,
                paginaEncontrada.texto,
                this.obterOpcoesTexto(paginaEncontrada)
            );

            // Executa a página atual e obtém a escolha do jogador
            const escolhaIndex = pagina.executar(this.personagem, this.inventario);
            
            // Processa a escolha do jogador
            this.processarEscolha(paginaEncontrada, escolhaIndex);
        }

        // Mostra página final
        const paginaFinal = paginas.find(p => p.id === 100);
        if (paginaFinal) {
            const pagina = new PaginaComun(
                paginaFinal.id,
                paginaFinal.texto,
                this.obterOpcoesTexto(paginaFinal)
            );
            pagina.executar(this.personagem, this.inventario);
        }
    }

    // Obtém o texto das opções da página
    private obterOpcoesTexto(pagina: any): string[] {
        const escolhas = pagina.escolhas || pagina.choices || [];
        return escolhas.map((e: any) => e.texto);
    }

    // Processa a escolha do jogador e atualiza o estado do jogo
    private processarEscolha(pagina: any, escolhaIndex: number): void {
        const escolhas = pagina.escolhas || pagina.choices || [];
        
        if (escolhas.length === 0) {
            // Página sem escolhas - vai para próxima página padrão
            this.paginaAtualId = 100; // Vai para o final
            return;
        }

        if (escolhaIndex < 1 || escolhaIndex > escolhas.length) {
            console.log("❌ Escolha inválida! Continuando com a primeira opção...");
            escolhaIndex = 1;
        }

        const escolhaSelecionada = escolhas[escolhaIndex - 1];
        
        // Verifica se o jogador tem o item necessário
        if (escolhaSelecionada.requerItem && !this.verificarItem(escolhaSelecionada.requerItem)) {
            console.log(`\n⚠️  Você precisa de "${escolhaSelecionada.requerItem}" para esta escolha!`);
            console.log("Escolhendo uma opção alternativa...");
            
            // Tenta encontrar uma opção alternativa sem requisitos
            const opcaoAlternativa = escolhas.find((e: any) => !e.requerItem);
            if (opcaoAlternativa) {
                this.aplicarEfeitosItem(opcaoAlternativa);
                this.paginaAtualId = opcaoAlternativa.destino;
            } else {
                this.paginaAtualId = 100; // Vai para final se não houver opção
            }
            return;
        }

        // Aplica efeitos de itens (ganhar/perder)
        this.aplicarEfeitosItem(escolhaSelecionada);

        // Atualiza para a próxima página
        this.paginaAtualId = escolhaSelecionada.destino;
    }

    // Verifica se o jogador tem um item específico
    private verificarItem(nomeItem: string): boolean {
        return this.inventario.encontrarItemPorNome(nomeItem) !== undefined;
    }

    // Aplica efeitos de ganhar/perder itens
    private aplicarEfeitosItem(escolha: any): void {
        // Ganhar item
        if (escolha.ganhaItem) {
            const novoItem = new Item(
                Date.now(), // ID único baseado no timestamp
                escolha.ganhaItem,
                'misc',
                0,
                `Item obtido: ${escolha.ganhaItem}`
            );
            
            if (this.inventario.adicionarItem(novoItem)) {
                console.log(`\n🎁 Você ganhou: ${escolha.ganhaItem}`);
            } else {
                console.log(`\n💼 Inventário cheio! Não foi possível adicionar: ${escolha.ganhaItem}`);
            }
        }

        // Perder item
        if (escolha.perdeItem) {
            const itemParaRemover = this.inventario.encontrarItemPorNome(escolha.perdeItem);
            if (itemParaRemover) {
                this.inventario.removerItem(itemParaRemover.id);
                console.log(`\n📤 Você perdeu: ${escolha.perdeItem}`);
            }
        }
    }

    // Mostra status atual do personagem
    mostrarStatus(): void {
        console.log(`\n=== STATUS ===`);
        console.log(`Personagem: ${this.personagem.nome}`);
        console.log(`Vida: ${this.personagem.vida}/100`);
        console.log(`Energia: ${this.personagem.energia}/100`);
        console.log(`Nível: ${this.personagem.nivel}`);
        
        const itens = this.inventario.listarItens();
        if (itens.length > 0) {
            console.log(`Itens: ${itens.map(item => item.nome).join(', ')}`);
        } else {
            console.log(`Itens: Nenhum item`);
        }
        console.log(`==============\n`);
    }
}

// Inicia o jogo quando o arquivo é executado
if (require.main === module) {
    const jogo = new Livro();
    jogo.iniciar();
}
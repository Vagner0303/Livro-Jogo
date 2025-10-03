import { Personagem } from "./Personagens";
import { PaginaComun } from "./Base";
import readlineSync from 'readline-sync';


const sasi = new Personagem(1, "Sasi", 100, 50);
const number = 1
const pagina1 = new PaginaComun(1, `Você ${sasi.nome}, um viajante do Oeste, que acaba de receber uma missão: levar uma`
    + `mensagem secreta até Minas Tirith, antes que os exércitos de Sauron a interceptem.`
    + `A jornada começa quando você chega a uma encruzilhada:`
    +  `\n ------------------ Opçôes -----------------------`
    + ` \n Ao norte, o Caminho das Montanhas da Névoa, mais curto, mas cheio de criaturas estranhas.`
    + ` \n Ao sul, a Estrada Velha dos Homens, mais longa, mas aparentemente mais segura.`
    +  `\n -------------------- Escolha ---------------------`
    + ` \n Qual caminho você vai seguir?`
    + `\n digite 1 para ir ao Norte, e digite 2 para ir ao Sul`, []);

pagina1.executar()
const Resposta = readlineSync.question()

console.log(Resposta)

function verificarResposta(): void {
  if (Resposta === "1") {
    console.log( "Você chegou ao Caminho das Montanhas da Névoa, e encontrou 4 cachorros do inferno.");
  } else {
    console.log( "Você chegou à Estrada Velha dos Homens, e não encontrou nenhum inimigo.");
 
  }
}
console.log(Resposta)
import { Personagem } from "./Personagens";
import { PaginaComun } from "./Base";
import { Item } from "./Inventario";
import { Inventario } from "./Inventario";
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


if (Resposta === "1") {
    console.log( "Você chegou ao Caminho das Montanhas da Névoa, e encontrou 2 cachorros do inferno.");
  } else {
    console.log( "Você chegou à Estrada Velha dos Homens, e não encontrou nenhum inimigo.");
 
  }

console.log(Resposta)


export interface Escolha {
  texto: string;
  destino: number; // id da página destino
  requerItem?: string; // nome do item necessário (opcional)
  ganhaItem?: string;   // item ganho ao escolher (opcional)
  perdeItem?: string;   // item perdido ao escolher (opcional)
}

interface Pagina {
  id: number;
  texto: string;
  escolhas?: any[];   // <- se você usa 'escolhas'
  choices?: any[];    // <- se você quer aceitar 'choices' também

}

export const paginas: Pagina[] = [
  {
    id: 1,
    texto: `Você é Sasi, um viajante do Oeste. Numa noite calma, no vilarejo de Alvoresta, um velho mensageiro chega com uma encomenda de valor e um aviso sombrio: há forças que procuram algo enterrado nas sombras do Norte. O seu destino começa aqui.`,
    escolhas: [
      { texto: 'Investigar o remetente', destino: 2 },
      { texto: 'Aceitar a missão imediatamente', destino: 3 },
      { texto: 'Ignorar e seguir sua vida', destino: 4 }
    ]
  },

  {
    id: 2,
    texto: `No remetente você descobre um selo quebrado com um símbolo que lembra um anel escuro. Entre os papéis há um pequeno mapa e uma tira de couro: a trilha parece apontar para as Montanhas Cinzentas ao norte.`,
    escolhas: [
      { texto: 'Levar o mapa e preparar partida', destino: 3, ganhaItem: 'Mapa' },
      { texto: 'Mostrar o mapa ao ferreiro local', destino: 5 },
      { texto: 'Queimar o mapa — medo do que pode atrair', destino: 6 }
    ]
  },

  {
    id: 3,
    texto: `Você aceita a missão. Antes de partir pega do baú velho algumas coisas: uma capa grossa, a espada curta que herdou e, escondido, um pequeno anel que sempre incomodou desde criança. Não sabe ainda seu poder, apenas que atraiu olhares estranhos.`,
    escolhas: [
      { texto: 'Partir pela estrada principal', destino: 7, ganhaItem: 'Capa' },
      { texto: 'Seguir pela trilha do mapa (se tiver)', destino: 8, requerItem: 'Mapa' },
      { texto: 'Procurar um companheiro em Alvoresta', destino: 9 }
    ]
  },

  {
    id: 4,
    texto: `Você tenta ignorar, mas rumores se espalham. Tropas de saqueadores começam a rondar; a vila sofre. Sua inação tem custo.`,
    escolhas: [
      { texto: 'Reparar seu erro e partir agora', destino: 3 },
      { texto: 'Ficar e defender a vila', destino: 10 }
    ]
  },

  {
    id: 5,
    texto: `O ferreiro, Barbren, examina o selo e arregala os olhos. "Isso é do Norte antigo", ele diz. Oferece forjar uma lâmina reforçada se você levar a mensagem ao mercado central.`,
    escolhas: [
      { texto: 'Aceitar a forja e pagar com trabalho', destino: 11, ganhaItem: 'EspadaReforcada' },
      { texto: 'Recusar e partir com o que tem', destino: 3 }
    ]
  },

  {
    id: 6,
    texto: `Ao queimar o mapa você sente um alívio momentâneo. À noite ouve passos — alguém esteve no seu quintal. Você percebe que o perigo já vem atrás do papel, não do mapa.`,
    escolhas: [
      { texto: 'Seguir pistas dos rastros', destino: 12 },
      { texto: 'Ir embora da vila durante a noite', destino: 7 }
    ]
  },

  {
    id: 7,
    texto: `A estrada principal leva a pontes guardadas e viajantes cautelosos. Um mensageiro alquebrado o alcança: "Não levem o anel ao leste", sussurra, e cai. As palavras lhe dão pressa.`,
    escolhas: [
      { texto: 'Ignorar o aviso e seguir', destino: 13 },
      { texto: 'Investigar quem quer o anel', destino: 14 },
      { texto: 'Esconder o anel e seguir disfarçado', destino: 15 }
    ]
  },

  {
    id: 8,
    texto: `A trilha do mapa corta florestas e pântanos. O mapa o conduz a uma antiga árvore com marcas. Dentro do tronco acha uma pequena adaga e um bilhete: "Queime quando for necessário".`,
    escolhas: [
      { texto: 'Guardar a adaga', destino: 16, ganhaItem: 'Adaga' },
      { texto: 'Queimar o bilhete, por precaução', destino: 17 },
      { texto: 'Seguir mais a norte', destino: 18 }
    ]
  },

  {
    id: 9,
    texto: `No alvorecer você encontra Meren, arqueira de olhos claros, que aceita acompanhar por causa de uma dívida antiga. Ela traz coragem e conhecimento de trilhas.`,
    escolhas: [
      { texto: 'Seguir com Meren pela trilha do mapa', destino: 8, requerItem: 'Mapa' },
      { texto: 'Ir pela estrada principal com Meren', destino: 7 },
      { texto: 'Negociar para que ela fique e treine os aldeões', destino: 10 }
    ]
  },

  {
    id: 10,
    texto: `Defender a vila é nobre; você afasta saqueadores mas fica preso a responsabilidades. A missão maior segue sem você; pode ser tarde para corrigi-la.`,
    escolhas: [
      { texto: 'Continuar defendendo (Final de Comunidade)', destino: 51 },
      { texto: 'Depois de um tempo partir sozinho', destino: 3 }
    ]
  },

  {
    id: 11,
    texto: `Barbren forja a lâmina e grava um símbolo de proteção. Você parte mais preparado. A espada reforçada tem brilho estranho sob a lua.`,
    escolhas: [
      { texto: 'Seguir pela estrada', destino: 7 },
      { texto: 'Ir ao norte pela trilha', destino: 8 }
    ]
  },

  {
    id: 12,
    texto: `Os rastros levam a um acampamento abandonado. Há pegadas de botas grandes e uma flecha enegrecida. Você sente que foi seguida por algo inteligente.`,
    escolhas: [
      { texto: 'Perseguir as pegadas', destino: 14 },
      { texto: 'Voltar à vila e avisar', destino: 10 }
    ]
  },

  {
    id: 13,
    texto: `Seguir sem investigar aumenta seu risco. Você atravessa um vale e encontra uma ponte guardada por uma figura encapuzada que pergunta sobre seu propósito.`,
    escolhas: [
      { texto: 'Mentir sobre sua missão', destino: 15 },
      { texto: 'Dizer a verdade e confiar', destino: 19 },
      { texto: 'Tentar atravessar furtivamente', destino: 20 }
    ]
  },

  {
    id: 14,
    texto: `Investigar quem quer o anel revela sinais: bandeiras com um emblema negro. Um batedor reconhece o símbolo e foge - dizendo "O Senhor das Sombras cresce".`,
    escolhas: [
      { texto: 'Seguir o batedor', destino: 21 },
      { texto: 'Voltar à estrada e avisar aliados', destino: 22 }
    ]
  },

  {
    id: 15,
    texto: `Disfarçado você atravessa a ponte. Sabe que carregar o anel é perigoso; às vezes parece sussurrar. Estranhos olhares atravessam você.`,
    escolhas: [
      { texto: 'Tentar esconder o anel em sua capa', destino: 23, perdeItem: 'Anel' },
      { texto: 'Levar o anel aberto, aceitar o peso', destino: 24 },
      { texto: 'Entregar o anel a Meren (se estiver com ela)', destino: 25, requerItem: 'Meren' }
    ]
  },

  {
    id: 16,
    texto: `A adaga tem runas que brilham quando inimigos se aproximam. Você a guarda — pode ser útil em confronto.`,
    escolhas: [
      { texto: 'Seguir para as Montanhas', destino: 18 },
      { texto: 'Levar a adaga para um sábio', destino: 26 }
    ]
  },

  {
    id: 17,
    texto: `Queimar o bilhete acalma o seu medo — mas tira uma pista que poderia ter salvado dias de busca. Em compensação, ninguém mais segue você por traz.`,
    escolhas: [
      { texto: 'Seguir sozinho ao norte', destino: 18 },
      { texto: 'Procurar ajuda de caravanistas', destino: 27 }
    ]
  },

  {
    id: 18,
    texto: `As Montanhas Cinzentas revelam cavernas antigas e trilhas traiçoeiras. À entrada de uma caverna há um símbolo igual ao do selo: o frio parece sugar sua coragem.`,
    escolhas: [
      { texto: 'Entrar na caverna', destino: 28 },
      { texto: 'Contornar as cavernas pelo alto', destino: 29 },
      { texto: 'Montar acampamento e observar', destino: 30 }
    ]
  },

  {
    id: 19,
    texto: `A figura encapuzada revela-se Maer, um viajante que entende dos velhos poderes. Ele avisa: "O anel atrai tanto quem protege quanto quem domina" e oferece guiar você por uma rota segura.`,
    escolhas: [
      { texto: 'Aceitar a ajuda de Maer', destino: 31, ganhaItem: 'ConhecimentoMaer' },
      { texto: 'Recusar e seguir sozinho', destino: 20 }
    ]
  },

  {
    id: 20,
    texto: `Tentar atravessar furtivamente faz barulho. Guardas aparecem e você é perseguido. É uma corrida — e você perde o mapa no processo.`,
    escolhas: [
      { texto: 'Lutar e escapar', destino: 32 },
      { texto: 'Rendição e negociação', destino: 33 }
    ]
  },

  {
    id: 21,
    texto: `O batedor corre até um acampamento inimigo. Você observa: há lanternas negras e cânticos baixos. Eles planejam movimentações para o leste.`,
    escolhas: [
      { texto: 'Atacar o acampamento de surpresa', destino: 34 },
      { texto: 'Voltar e avisar as vilas próximas', destino: 22 }
    ]
  },

  {
    id: 22,
    texto: `Ao avisar aliados, você forma uma pequena resistência. Homens e mulheres arregimentam-se para proteger rotas. Isso ganha tempo, mas retarda sua jornada.`,
    escolhas: [
      { texto: 'Ficar liderando a defesa (caminho da comunidade)', destino: 51 },
      { texto: 'Deixar um grupo e partir', destino: 35 }
    ]
  },

  {
    id: 23,
    texto: `Você esconde o anel, mas sente que algo puxou sua capa — alguém tentou encontrá-lo. O anel foi roubado durante a noite.`,
    escolhas: [
      { texto: 'Perseguir o ladrão', destino: 36 },
      { texto: 'Aceitar a perda e seguir', destino: 24 }
    ]
  },

  {
    id: 24,
    texto: `Carregar o anel abertamente faz com que a própria paisagem pareça observar. Em algum momento uma sombra tenta falar com você, oferecendo poder em troca do seu caminho.`,
    escolhas: [
      { texto: 'Aceitar a promessa de poder', destino: 52 },
      { texto: 'Rejeitar e continuar', destino: 35 }
    ]
  },

  {
    id: 25,
    texto: `Se você entrega o anel a Meren (quando ela estiver), ela hesita, o segura e diz: "Tal poder não deve ficar com nenhum de nós." Isso cria tensão entre vocês.`,
    escolhas: [
      { texto: 'Confiar em Meren e permitir que ela o esconda', destino: 37 },
      { texto: 'Exigir que ela devolva', destino: 24 }
    ]
  },

  {
    id: 26,
    texto: `O sábio analisa a adaga: ela foi feita para cortar laços mágicos. Com seu uso correto, pode revelar trechos ocultos e resistir a feitiços.`,
    escolhas: [
      { texto: 'Voltar às Montanhas com a adaga', destino: 28 },
      { texto: 'Levar a adaga ao coração do inimigo', destino: 34 }
    ]
  },

  {
    id: 27,
    texto: `Os caravanistas oferecem escolta por um preço — ou por uma história. Um velho conta que os antigos forjadores podiam destruir objetos de poder em uma forja perdida sob as Chamas de Vhar.`,
    escolhas: [
      { texto: 'Procurar a forja de Vhar (missão decisiva)', destino: 38 },
      { texto: 'Recusar e economizar recursos', destino: 35 }
    ]
  },

  {
    id: 28,
    texto: `Dentro da caverna você encontra inscrições e um guardião petrificado. Ao tocar uma runa, uma passagem secreta se abre para o subsolo.`,
    escolhas: [
      { texto: 'Descer pela passagem secreta', destino: 39 },
      { texto: 'Sair e contornar as cavernas', destino: 29 }
    ]
  },

  {
    id: 29,
    texto: `Contornar pelo alto revela um vale escondido onde um pequeno grupo de forjadores vive em segredo. Eles ouvem sobre o anel e prometem ajudar se você provar coragem.`,
    escolhas: [
      { texto: 'Passar por provas para provar seu valor', destino: 40 },
      { texto: 'Pedir ajuda sem provas', destino: 41 }
    ]
  },

  {
    id: 30,
    texto: `Ao montar acampamento você é surpreendido por noites silenciosas. Sons de algo grande passando ao longe estremecem suas vigas; é um aviso.`,
    escolhas: [
      { texto: 'Seguir o som pela manhã', destino: 18 },
      { texto: 'Partir imediatamente na noite', destino: 20 }
    ]
  },

  {
    id: 31,
    texto: `Maer ensina-te breves rituais para resistir à tentação do anel. Ele pode guiá-lo até caminhos menos vigiados, mas pede algo em troca: sua promessa de não usar o anel para dominar.`,
    escolhas: [
      { texto: 'Prometer e seguir com Maer', destino: 35 },
      { texto: 'Recusar a promessa', destino: 24 }
    ]
  },

  {
    id: 32,
    texto: `Você luta e foge com arranhões. Perde o mapa, mas ganha respeito dos que te viram. A jornada fica mais solitária.`,
    escolhas: [
      { texto: 'Recolher informações em uma taverna', destino: 27 },
      { texto: 'Seguir até as montanhas por trilhas alternativas', destino: 18 }
    ]
  },

  {
    id: 33,
    texto: `Ao se render, negocia: conta uma história triste, e um guarda, comovido, ajuda a deixá-lo passar. No caminho, ouve que as forças do Norte dividem-se em caçadores e cultistas.`,
    escolhas: [
      { texto: 'Usar essa informação para planejar um ataque', destino: 34 },
      { texto: 'Evitar confrontos e seguir furtivamente', destino: 35 }
    ]
  },

  {
    id: 34,
    texto: `Um ataque de surpresa pode enfraquecer os inimigos, mas também alertá-los. Se bem-sucedido, encontrarão cartas que indicam uma aliança com um líder do Leste.`,
    escolhas: [
      { texto: 'Forçar até o acampamento do líder do Leste', destino: 42 },
      { texto: 'Voltar e usar a informação para buscar a forja de Vhar', destino: 38 }
    ]
  },

  {
    id: 35,
    texto: `Você avança com menos aliados, mas com um foco renovado. As trilhas se tornam mais difíceis e a tentação do anel aumenta em momentos de fraqueza.`,
    choices: [],
    escolhas: [
      { texto: 'Seguir para a forja de Vhar', destino: 38 },
      { texto: 'Buscar Maer novamente', destino: 31 },
      { texto: 'Procurar lares antigos de forjadores nas montanhas', destino: 29 }
    ]
  },

  {
    id: 36,
    texto: `Perseguir o ladrão leva a um covil de ladrões. Lá, você encontra o anel... rodeado por aqueles que desejam usá-lo. Uma escolha difícil aparece: a batalha ou diálogo.`,
    escolhas: [
      { texto: 'Lutar por tudo', destino: 43 },
      { texto: 'Tentar convencer com palavras', destino: 44 }
    ]
  },

  {
    id: 37,
    texto: `Meren esconde o anel num vale sagrado; por uns dias você sente alívio. Mas segredos corroem confiança. Vocês discutem caminhos e responsabilidades.`,
    escolhas: [
      { texto: 'Confiar nela para continuar', destino: 38 },
      { texto: 'Ir sozinho recuperar o anel', destino: 36 }
    ]
  },

  {
    id: 38,
    texto: `A busca pela forja de Vhar torna-se central: as lendas dizem que somente nas chamas ancestrais um objeto de poder pode ser quebrado. A rota passa por um desfiladeiro guardado por runas.`,
    escolhas: [
      { texto: 'Entrar no desfiladeiro', destino: 45 },
      { texto: 'Tentar comprar passagem com forjadores locais', destino: 29 }
    ]
  },

  {
    id: 39,
    texto: `Descendo ao subsolo você descobre câmaras com símbolos antigos e um pedestal com moldura para um anel. Há uma inscrição: "Somente quem sacrifica o sorriso vencerá".`,
    escolhas: [
      { texto: 'Ler a inscrição e tentar decifrar', destino: 46 },
      { texto: 'Levar o pedestal como prova', destino: 47 }
    ]
  },

  {
    id: 40,
    texto: `As provas dos forjadores testam coragem e ciência: rachar pedras com inteligência, subir rochas e compreender símbolos. Você supera e ganha aliados e uma ferramenta especial.`,
    escolhas: [
      { texto: 'Aceitar a ajuda dos forjadores', destino: 38, ganhaItem: 'FerramentaForjador' },
      { texto: 'Partir sem aliança', destino: 35 }
    ]
  },

  {
    id: 41,
    texto: `Pedir ajuda sem provar-se pode irritar os forjadores. Alguns ouvirão e ajudarão por troca; outros fecharão portas. Você tem que negociar.`,
    escolhas: [
      { texto: 'Negociar com trabalho', destino: 40 },
      { texto: 'Oferecer o anel (se tiver)', destino: 43, requerItem: 'Anel' }
    ]
  },

  {
    id: 42,
    texto: `Forçar até o acampamento do líder do Leste provoca confronto direto com um comandante vestido de sombras. Na luta, o anel brilha e o líder tenta seduzir você.`,
    escolhas: [
      { texto: 'Resistir ao comandante', destino: 48 },
      { texto: 'Ceder e negociar poder', destino: 52 }
    ]
  },

  {
    id: 43,
    texto: `Na batalha, a adaga mágica prova seu valor e corta vínculos ocultos. Se triunfar, recupera o anel e descobre um caminho secreto até Vhar.`,
    escolhas: [
      { texto: 'Usar o caminho secreto para Vhar', destino: 38, ganhaItem: 'MapaSecreto' },
      { texto: 'Retornar e reunir aliados', destino: 22 }
    ]
  },

  {
    id: 44,
    texto: `Convencer com palavras provoca dúvidas entre os ladrões: alguns fogem, outros aceitam ajudar se você prometer não usar o anel. Você ganha informantes, mas perde tempo.`,
    escolhas: [
      { texto: 'Seguir com os informantes até Vhar', destino: 38 },
      { texto: 'Trair os acordos (perigoso)', destino: 52 }
    ]
  },

  {
    id: 45,
    texto: `O desfiladeiro está cheio de armadilhas. Com cuidado (ou sorte) você encontra uma passagem para um vale subterrâneo onde as chamas de Vhar lambem rochas antigas.`,
    escolhas: [
      { texto: 'Descer ao vale das chamas', destino: 49 },
      { texto: 'Recuar e preparar melhor', destino: 40 }
    ]
  },

  {
    id: 46,
    texto: `Decifrar a inscrição revela que "sorriso" significa renunciar à cobiça — um sacrifício do coração. Para ativar o pedestal você deve renunciar ao anel.`,
    escolhas: [
      { texto: 'Renunciar ao anel no pedestal (tentativa de destruição)', destino: 50, perdeItem: 'Anel' },
      { texto: 'Guardar para si e não tentar', destino: 38 }
    ]
  },

  {
    id: 47,
    texto: `Levar o pedestal é arriscado: ele é pesado e atrai atenção. Ainda assim, com ele em mãos, forjadores podem estudar como destruir o anel.`,
    escolhas: [],
    choices: [
      { texto: 'Levar o pedestal a Vhar', destino: 38, ganhaItem: 'Pedestal' },
      { texto: 'Deixar o pedestal e seguir', destino: 38 }
    ]
  },

  {
    id: 48,
    texto: `Resistir ao comandante é uma luta épica. Você corta a ligação e, no momento decisivo, lança o anel nas trevas do acampamento, tentando destruí-lo — mas não há fogo suficiente.`,
    escolhas: [
      { texto: 'Tentar uma nova rota para Vhar (última esperança)', destino: 45 },
      { texto: 'Aceitar prisão e usar a chance de redenção', destino: 52 }
    ]
  },

  {
    id: 49,
    texto: `As Chamas de Vhar são reais e vivas. Ao enfrentar o fogo, você sente o anel aquecer. Há três opções para selar seu destino: forjar e destruir, sacrifício do portador, ou usá-lo para derrotar o mal (com risco).`,
    escolhas: [
      { texto: 'Forjar o anel na forja — destruir (Final A: Sacrifício do Herói)', destino: 50, requerItem: 'Anel' },
      { texto: 'Lançar o anel nas chamas sem rito (final incerto)', destino: 51, requerItem: 'Anel' },
      { texto: 'Usar o anel contra o inimigo (Final B: Tentação)', destino: 52, requerItem: 'Anel' }
    ]
  },

  {
    id: 50,
    texto: `Você guia o anel às forjas e, com a ajuda dos forjadores e da adaga para cortar vínculos, quebra o laço de poder. As chamas consomem o símbolo — o peso que carregava some, mas a vitória custou-lhe algo muito pessoal.`,
    escolhas: [
      { texto: 'Aceitar o preço e viver como guardião de histórias (Final Bom)', destino: 100 }
    ]
  },

  {
    id: 51,
    texto: `Você opta por proteger e construir comunidades em vez de perseguir o poder. A vila e as vilas amigas prosperam; o mal é contido, mas a ameaça cresce em outros cantos. Você vira lenda local (Final Comunitário)`,
    escolhas: [
      { texto: 'Fim', destino: 100 }
    ]
  },

  {
    id: 52,
    texto: `A tentação ganha. Usar o anel para derrotar inimigos concede vitória imediata, mas corrompe. Você transforma-se num novo tipo de tirano, feroz e solitário (Final Ruim).`,
    escolhas: [
      { texto: 'Fim', destino: 100 }
    ]
  },

  // Página de encerramento padrão
  {
    id: 100,
    texto: `Obrigado por jogar. Estes finais são três resultados principais possíveis: destruição do anel (herói), vida dedicada à comunidade (comunitário), ou a tentação que consome (ruim). Você pode reiniciar para tentar outros caminhos.`,
    escolhas: [
      { texto: 'Reiniciar jogo', destino: 1 }
    ]
  }
];

export default paginas;

// Representa o personagem do jogador com atributos e ações
export class Personagem {
    constructor(
        public id: number,        // ID único
        public nome: string,      // Nome do personagem
        public vida: number,      // Pontos de vida atual
        public energia: number,   // Pontos de energia atual  
        public nivel: number = 1, // Nível de experiência
        public experiencia: number = 0 // XP acumulada
    ) {}

    // Ataque básico - consome energia, retorna dano causado
    atacar(): number {
        if (this.energia >= 10) {
            this.energia -= 10;
            return 20 + (this.nivel * 5); // Dano base + bônus de nível
        }
        return 0; // Sem energia para atacar
    }

    // Recebe dano - reduz vida, não deixa ficar negativo
    receberDano(dano: number): void {
        this.vida -= dano;
        if (this.vida < 0) this.vida = 0;
    }

    // Cura pontos de vida
    curar(cura: number): void {
        this.vida += cura;
    }

    // Recupera energia e vida (descanso)
    descansar(): void {
        this.energia = Math.min(this.energia + 30, 100); // Máximo 100
        this.vida = Math.min(this.vida + 20, 100);
    }

    // Ganha experiência e verifica se subiu de nível
    ganharExperiencia(exp: number): void {
        this.experiencia += exp;
        if (this.experiencia >= this.nivel * 100) {
            this.subirNivel();
        }
    }

    // Aumenta nível e melhora atributos
    private subirNivel(): void {
        this.nivel++;
        this.experiencia = 0;     // Zera XP para próximo nível
        this.vida += 20;          // Aumenta vida máxima
        this.energia += 10;       // Aumenta energia máxima
        console.log(`🎉 ${this.nome} subiu para o nível ${this.nivel}!`);
    }
}
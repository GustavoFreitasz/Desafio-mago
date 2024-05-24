const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Heroi {
  constructor(tipo, ataque) {
    this.tipo = tipo;
    this.ataque = ataque;
  }

  atacar() {
    console.log(`${this.tipo} atacou usando ${this.ataque}`);
  }
}

const mago = new Heroi('Mago', 'Magia');
const guerreiro = new Heroi('Guerreiro', 'Espada');
const monge = new Heroi('Monge', 'Artes marciais');
const ninja = new Heroi('Ninja', 'Shuriken');

rl.question("Escolha um herói: mago, guerreiro, monge, ninja\n", (escolha) => {
  function escolherHeroi(tipo) {
    switch (tipo.toLowerCase()) {
      case 'mago':
        return mago;
      case 'guerreiro':
        return guerreiro;
      case 'monge':
        return monge;
      case 'ninja':
        return ninja;
      default:
        console.log("Herói inválido.");
        return null;
    }
  }
  
  let heroi = escolherHeroi(escolha);
  if (heroi) {
    heroi.atacar();
  } else {
    console.log("Herói inválido. Por favor, escolha entre: mago, guerreiro, monge, ninja.");
}
rl.question ("prefere usar punhos ou pernas?\n", (escolha2)=> {
    console.log ("monge atacou usando",escolha2)
    rl.close();
} );
  
});
// Defina o nome e a quantidade de experiência (XP) do herói
const nomeDoHeroi = "Super Herói";
const xpDoHeroi = 8000;

// Use uma estrutura de decisão para determinar o nível do herói com base na XP
let nivelDoHeroi;

if (xpDoHeroi <= 1000) {
  nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if ( xpDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}

// Apresente a mensagem com base no nível do herói
console.log(`${nomeDoHeroi} atingiu o nível ${nivelDoHeroi} com ${xpDoHeroi} XP.`);

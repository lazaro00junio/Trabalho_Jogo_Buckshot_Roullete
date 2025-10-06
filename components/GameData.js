let balasVivas = 0;
let pontuacao = 0;
let escopeta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function inicializar() {
	console.log("inicializando o jogo...");
	balasVivas = Math.floor(Math.random() * 5) + 6;
	console.log("Balas que podem matar: " + balasVivas);
  escopeta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (let i = balasVivas; i >= 0; i--) {
		console.log("Colocando bala viva na escopeta...", i);
		let posicaoViva = Math.floor(Math.random() * 12);
		while (escopeta[posicaoViva] == 1) {
			posicaoViva = Math.floor(Math.random() * 12);
		}

		escopeta[posicaoViva] = 1;
	}
	console.log("Escopeta inicializada: " + escopeta);
}

function getBalasVivas() {
	return balasVivas;
}

function getEscopeta() {
	return escopeta;
}

function getPontuacao() {
  return pontuacao;
}
function setBalasVivas(valor) {
	balasVivas = valor;
}

function setEscopeta(array) {
	escopeta = array;
}

function setPontuacao(valor) {
	pontuacao = valor;
}

export default {
	inicializar,
	getBalasVivas,
	getEscopeta,
  getPontuacao,
	setBalasVivas,
	setEscopeta,
  setPontuacao
};

const btJogar = document.querySelector('.jogar');
const botoes = document.querySelectorAll('.botoes_escolha');
const marcadorJogador = document.querySelector('.marcador_jogador');
const marcadorAdversario = document.querySelector('.marcador_adversario');
let clicado = false;
let ganhou = null;
let valorJogador;
let valorAdversario;
let contadorJogador = 0;
let contadorAdversario = 0;

function lanceJogador(botoes) {
  const jogador = document.querySelector('.jogador_lance');
  jogador.textContent = botoes.value
  valorJogador = jogador.textContent
  clicado = true;
}

function sortearLanceAdversario() {

  const possibilidades = ['pedra', 'papel', 'tesoura'];
  const i = Math.floor(Math.random() * (2 - 0 + 1));
  const lance = possibilidades[i]
  valorAdversario = lance
  return lance
}

function lanceAdversario() {
  const adversario = document.querySelector('.adversario_lance');
  adversario.textContent = sortearLanceAdversario()

}


function resultadoJogo(jogador, adversario) {
  const anuncioResultado = document.querySelector('.resultado_jogo_titulo');
  if (jogador == adversario) {
    anuncioResultado.textContent = 'EMPATE'
  } else {
    if (jogador == 'pedra' && adversario == 'papel' || jogador == 'papel' && adversario == 'tesoura' || jogador == 'tesoura' && adversario == 'pedra') {
      anuncioResultado.textContent = 'Você perdeu'
      contadorAdversario++
      marcadorAdversario.textContent = contadorAdversario
    } else {
      anuncioResultado.textContent = 'Você ganhou';
      contadorJogador++;
      marcadorJogador.textContent = contadorJogador;
    }

  }


}

botoes[0].addEventListener('click', () => {
  lanceJogador(botoes[0])
})
botoes[1].addEventListener('click', () => {
  lanceJogador(botoes[1])
})
botoes[2].addEventListener('click', () => {
  lanceJogador(botoes[2])
})


btJogar.addEventListener('click', () => {
  const marcador = document.querySelectorAll('.marcador');
  if (clicado) {
    lanceAdversario()
    resultadoJogo(valorJogador, valorAdversario)
  } else {
    alert('Esolha seu lance!')
  }
})
const LINHA = 20;
const COLUNA = 12;
const TAMANHO = 20;
const VAGO = "rgb(36, 34, 34)";

var peca;
var tabuleiro = [];
var pontuacao = 0;

var inicioDescida;
var fimDeJogo = false;

var tela = document.getElementById("tela");
var c = tela.getContext("2d");

onkeydown = controlarPeca;

sons();

musicaTetris.play();
musicaTetris.loop = true;

iniciarTabuleiro();

desenharTabuleiro();

gerarPeca();

inicioDescida = Date.now();

descerPeca();

function gerarPeca() {
  var r = Math.floor(Math.random() * PECAS.length);

  peca = {
    tetramino: PECAS[r][0],
    cor: PECAS[r][1],
    tetraminoN: 0,
    tetraminoAtivo: [[]],
    x: 4,
    y: -2,
  };

  peca.tetraminoAtivo = peca.tetramino[peca.tetraminoN];
}

function colisao(x, y, p) {
  for (var i = 0; i < p.length; i++) {
    for (var j = 0; j < p.length; j++) {
      if (!p[i][j]) {
        continue;
      }

      var novoX = peca.x + j + x;
      var novoY = peca.y + i + y;

      if (novoX < 0 || novoX >= COLUNA || novoY >= LINHA) {
        return true;
      }

      if (novoY < 0) {
        continue;
      }

      if (tabuleiro[novoY][novoX] != VAGO) {
        return true;
      }
    }
  }

  return false;
}

function apagarPeca() {
  preencherPeca(VAGO);
}

function desenharPeca() {
  preencherPeca(peca.cor);
}

function preencherPeca(cor) {
  for (var i = 0; i < peca.tetraminoAtivo.length; i++) {
    for (var j = 0; j < peca.tetraminoAtivo.length; j++) {
      if (peca.tetraminoAtivo[i][j]) {
        desenharQuadrado(peca.x + j, peca.y + i, cor);
      }
    }
  }
}

function travarPeca() {
  for (var i = 0; i < peca.tetraminoAtivo.length; i++) {
    for (var j = 0; j < peca.tetraminoAtivo.length; j++) {
      if (!peca.tetraminoAtivo[i][j]) {
        continue;
      }

      if (peca.y + i < 0) {
        window.location = "http://127.0.0.1:5500/fimDeJogo.html";

        fimDeJogo = true;
        break;
      }

      tabuleiro[peca.y + i][peca.x + j] = peca.cor;
    }
  }

  for (var i = 0; i < LINHA; i++) {
    var linhaCheia = true;

    for (var j = 0; j < COLUNA; j++) {
      linhaCheia = linhaCheia && tabuleiro[i][j] != VAGO;
    }

    if (linhaCheia) {
      for (var y = i; y > 1; y--) {
        for (var j = 0; j < COLUNA; j++) {
          tabuleiro[y][j] = tabuleiro[y - 1][j];
        }
      }

      for (var j = 0; j < COLUNA; j++) {
        tabuleiro[0][j] = VAGO;
      }
      aumentarPontuacao();
    }
  }

  desenharTabuleiro();
}

if (fimDeJogo === true) {
}
function setTopo() {
  $(window).scrollTop(0);
}
$(window).bind("scroll", setTopo);

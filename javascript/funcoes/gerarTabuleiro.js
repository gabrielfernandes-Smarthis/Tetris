function iniciarTabuleiro() {
  for (var i = 0; i < LINHA; i++) {
    tabuleiro[i] = [];

    for (var j = 0; j < COLUNA; j++) {
      tabuleiro[i][j] = VAGO;
    }
  }
}

function desenharTabuleiro() {
  for (var i = 0; i < LINHA; i++) {
    for (var j = 0; j < COLUNA; j++) {
      desenharQuadrado(j, i, tabuleiro[i][j]);
    }
  }
}

function desenharQuadrado(x, y, cor) {
  c.fillStyle = cor;
  c.fillRect(x * TAMANHO, y * TAMANHO, TAMANHO, TAMANHO);

  c.strokeStyle = "rgb(49, 49, 49)";
  c.strokeRect(x * TAMANHO, y * TAMANHO, TAMANHO, TAMANHO);
}

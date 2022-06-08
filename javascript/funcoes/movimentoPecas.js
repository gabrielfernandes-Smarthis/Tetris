function descerPeca() {
  var agora = Date.now();
  var delta = agora - inicioDescida;

  if (delta > 180 && pontuacao === 0) {
    moverAbaixo();
    inicioDescida = Date.now() + 5;
  }
  if (delta > 180 && pontuacao >= 10 && pontuacao < 30) {
    moverAbaixo();
    inicioDescida = Date.now() - 5;
  }
  if (delta > 180 && pontuacao >= 30 && pontuacao < 50) {
    moverAbaixo();
    inicioDescida = Date.now() - 10;
  }
  if (delta > 180 && pontuacao >= 50 && pontuacao < 70) {
    moverAbaixo();
    inicioDescida = Date.now() - 15;
  }
  if (delta > 180 && pontuacao >= 70) {
    moverAbaixo();
    inicioDescida = Date.now() - 20;
  }

  if (!fimDeJogo) {
    requestAnimationFrame(descerPeca);
  }
}

function moverAbaixo() {
  if (!colisao(0, 1, peca.tetraminoAtivo)) {
    apagarPeca();
    peca.y++;
    desenharPeca();
  } else {
    travarPeca();
    gerarPeca();
  }
}

function moverDireita() {
  if (!colisao(1, 0, peca.tetraminoAtivo)) {
    apagarPeca();
    peca.x++;
    desenharPeca();
  }
}

function moverEsquerda() {
  if (!colisao(-1, 0, peca.tetraminoAtivo)) {
    apagarPeca();
    peca.x--;
    desenharPeca();
  }
}
function rodarPeca() {
  var proximoPadrao =
    peca.tetramino[(peca.tetraminoN + 1) % peca.tetramino.length];
  var recuo = 0;

  if (colisao(0, 0, proximoPadrao)) {
    if (peca.x > COLUNA / 2) {
      recuo = -1;
    } else {
      recuo = 1;
    }
  }

  if (!colisao(recuo, 0, proximoPadrao)) {
    apagarPeca();
    peca.x += recuo;
    peca.tetraminoN = (peca.tetraminoN + 1) % peca.tetramino.length;
    peca.tetraminoAtivo = peca.tetramino[peca.tetraminoN];
    desenharPeca();
  }
}

function controlarPeca(evento) {
  var tecla = evento.keyCode;

  if (tecla == 37) {
    moverEsquerda();
    inicioDescida = Date.now();
  } else if (tecla == 38) {
    rodarPeca();
    inicioDescida = Date.now();
  } else if (tecla == 39) {
    moverDireita();
    inicioDescida = Date.now();
  } else if (tecla == 40) {
    moverAbaixo();
  }
}

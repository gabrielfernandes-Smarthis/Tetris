var storage = sessionStorage;
storage.clear();
const pontuacaoTop = document.querySelector("#pontuacao");
const pontuacaoAumentou = document.querySelector(".canva");
pontuacaoTop.textContent = pontuacao;

function aumentarPontuacao() {
  pontuacaoAumentou.classList.add("aumentouPonto");
  pontuacao += 10;
  pontuacaoTop.textContent = pontuacao;
  storage.setItem("pontuacao", JSON.stringify(pontuacao));

  linhaCompleta.play();

  setTimeout(() => {
    pontuacaoAumentou.classList.remove("aumentouPonto");
  }, 500);
}

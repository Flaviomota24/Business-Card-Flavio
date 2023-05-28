// Animação de fundo
const body = document.querySelector('body');

const backgroundAnimation = document.createElement('div');
backgroundAnimation.classList.add('background-animation');

body.insertBefore(backgroundAnimation, body.firstChild);

// Animação de carregamento ao clicar nos botões
const buttons = document.querySelectorAll('main a');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    showLoadingAnimation();
  });
});

// Animação de carregamento antes de redirecionar a página
window.addEventListener('beforeunload', () => {
  showLoadingAnimation();
});

function showLoadingAnimation() {
  const loadingAnimation = document.createElement('div');
  loadingAnimation.classList.add('loading-animation');

  body.appendChild(loadingAnimation);

  // Remover a animação de carregamento após um certo período de tempo (simulando um carregamento)
  setTimeout(() => {
    body.removeChild(loadingAnimation);
  }, 2000);
}

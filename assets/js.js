// Janelas modais dos "Conhecimentos"
function openModal (nomeModal) {
    let modal = document.getElementById(nomeModal);
    modal.showModal();
}
function closeModal(nomeModal) {
    let modal = document.getElementById(nomeModal);
    modal.close();
}
// Fim janelas modais dos "Conhecimentos"

// função animação da imagem ao chegar na class "square"
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
  
      if (entry.isIntersecting) {
        // adiciona o square-transition onde está a class square
        square.classList.add('square-transition');
        return; 
    }
    // remove o square-transition onde está a class square
        square.classList.remove('square-transition');
    });
  });
  observer.observe(document.querySelector('.square-wrapper'));

function MostraMenuMobile() {
    var menu = document.getElementById('menu_mobile');

    if(menu.style.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

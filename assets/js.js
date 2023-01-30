// Janelas modais dos "Conhecimentos"
function openModal (idModal) {
    let modal = document.getElementById(idModal);
    modal.showModal();
}
function closeModal(idModal) {
    let modal = document.getElementById(idModal);
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

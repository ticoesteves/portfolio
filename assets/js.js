function openModal (idModal) {
    let modal = document.getElementById(idModal);
    modal.showModal();
}
function closeModal(idModal) {
    let modal = document.getElementById(idModal);
    modal.close();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
  
      if (entry.isIntersecting) {
        square.classList.add('square-transition');
        return; 
    }
        square.classList.remove('square-transition');
    });
  });
  observer.observe(document.querySelector('.square-wrapper'));

function showHideMenu() {
    var menu = document.getElementById('menu_mobile');

    if(menu.style.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

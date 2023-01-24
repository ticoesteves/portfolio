// Janelas modais dos "Conhecimentos"
const modal_html = document.getElementById("modal_html")
const modal_css = document.getElementById("modal_css")
const modal_js = document.getElementById("modal_js")
const modal_bootstrap = document.getElementById("modal_bootstrap")
const modal_blogger = document.getElementById("modal_blogger")
const modal_wordpress = document.getElementById("modal_wordpress")
const modal_bubble = document.getElementById("modal_bubble")
const modal_inkscape = document.getElementById("modal_inkscape")
const modal_photoshop = document.getElementById("modal_photoshop")
const buttonCloseHTML = document.querySelector("modal_html")
const buttonCloseCSS = document.querySelector("modal_css")
const buttonCloseJS = document.querySelector("modal_js")
const buttonCloseBOOTSTRAP = document.querySelector("modal_bootstrap")
const buttonCloseBLOGGER = document.querySelector("modal_blogger")
const buttonCloseWORDPRESS = document.querySelector("modal_wordpress")
const buttonCloseBUBBLE = document.querySelector("modal_bubble")
const buttonCloseINKSCAPE = document.querySelector("modal_inkscape")
const buttonClosePHOTOSHOP = document.querySelector("modal_photoshop")

function mostraModalHTML() {
    modal_html.showModal()
}
function mostraModalCSS() {
    modal_css.showModal()
}
function mostraModalJS() {
    modal_js.showModal()
}
function mostraModalBOOTSTRAP() {
    modal_bootstrap.showModal()
}
function mostraModalBLOGGER() {
    modal_blogger.showModal()
}
function mostraModalWORDPRESS() {
    modal_wordpress.showModal()
}
function mostraModalBUBBLE() {
    modal_bubble.showModal()
}
function mostraModalINKSCAPE() {
    modal_inkscape.showModal()
}
function mostraModalPHOTOSHOP() {
    modal_photoshop.showModal()
}

function fechaModalHTML() {
    modal_html.close()
} 
function fechaModalCSS() {
    modal_css.close()
} 
function fechaModalJS() {
    modal_js.close()
} 
function fechaModalBOOTSTRAP() {
    modal_bootstrap.close()
} 
function fechaModalBLOGGER() {
    modal_blogger.close()
} 
function fechaModalWORDPRESS() {
    modal_wordpress.close()
} 
function fechaModalBUBBLE() {
    modal_bubble.close()
} 
function fechaModalINKSCAPE() {
    modal_inkscape.close()
} 
function fechaModalPHOTOSHOP() {
    modal_photoshop.close()
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
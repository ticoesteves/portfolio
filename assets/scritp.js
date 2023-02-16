window.sr = ScrollReveal({ reset: true });
sr.reveal(".revealClass", { 
    rotate: { x: 0, y: 80, z: 0 },
    delay: 200,
    duration: 2000 
});

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
      const square = entry.target.querySelector(".square");
  
      if (entry.isIntersecting) {
        square.classList.add("square-transition");
        return; 
    }
        square.classList.remove("square-transition");
    });
  });
  observer.observe(document.querySelector(".square-wrapper"));

function verify() {
    var nameForm = document.getElementById("name").value;
    var emailForm = document.getElementById("email").value;
    var messageForm = document.getElementById("message").value;

    if(nameForm == ""){
        alert("Digite seu nome.");
    }else if(emailForm == ""){
        alert("Digite seu e-mail.");
    }else if(messageForm == ""){
        alert("Digite sua mensagem.");
    }else{
        alert("Mensagem enviada com sucesso!");
    }
}

document.getElementById("submit").addEventListener("click", verify);

function showAbout(){
    document.getElementById("about").classList.add("animate__flash");
}
function showSkills(){
    document.getElementById("skills").classList.add("animate__flash");
}
function showProjects(){
    document.getElementById("projects").classList.add("animate__flash");
}
function showContact(){
    document.getElementById("contact").classList.add("animate__flash");
}
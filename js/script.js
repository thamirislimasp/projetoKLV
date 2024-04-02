// MODAL ABERTURA

  // Função para abrir o modal automaticamente quando a página é carregada
  window.onload = function() {
    document.getElementById('meuModal').style.display = 'block';
  }
 
  // Função para fechar o modal
  function fecharModal() {
      document.getElementById('meuModal').style.display = 'none';
  }

  // MENU MOBILE

  function openNav(element) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "#010326";
    document.getElementById("openNav").style.zIndex = 0;
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "#010326";
    document.getElementById("openNav").style.zIndex = 2;


  }

  // CARROSSEL  TOPO

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
  }

  // ACORDEON Mobile

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  // TAB

  function mostrarServicos(evt, servicos) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(servicos).style.display = "block";
  evt.currentTarget.className += " active";
  }

  
  // MODAL

  // Modal
  var modal = document.getElementById("myModal");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  var modal4 = document.getElementById("myModal4");
  var modal5 = document.getElementById("myModal5");

  // Botao abrir o modal
  var btn = document.getElementById("myBtn");
  var btn2 = document.getElementById("myBtn2");
  var btn3 = document.getElementById("myBtn3");
  var btn4 = document.getElementById("myBtn4");
  var btn5 = document.getElementById("myBtn5");

  // <span> para fechar o modal
  var close1 = document.getElementsByClassName("close1")[0];
  var close2 = document.getElementsByClassName("close2")[0];
  var close3 = document.getElementsByClassName("close3")[0];
  var close4 = document.getElementsByClassName("close4")[0];
  var close5 = document.getElementsByClassName("close5")[0];

  // abrir modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }  

  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  btn3.onclick = function() {
    modal3.style.display = "block";
  }

  btn4.onclick = function() {
    modal4.style.display = "block";
  }

  btn5.onclick = function() {
    modal5.style.display = "block";
  }

  // fechar modal
  close1.onclick = function() {
    modal.style.display = "none";
  }

  close2.onclick = function() {
    modal2.style.display = "none";
  }

  close3.onclick = function() {
    modal3.style.display = "none";
  }

  close4.onclick = function() {
    modal4.style.display = "none";
  }

  close5.onclick = function() {
    modal5.style.display = "none";
  }

  // Quando clicar em qualquer lugar fora do modal irá fecha-lo
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
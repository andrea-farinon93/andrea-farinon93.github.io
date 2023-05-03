//mostrar y ocultar titulo y analítico

var abrir=document.getElementById('abrirtitulo');

abrir.addEventListener("click", function() {
  document.getElementById('carouseltitulo').style.display= 'block';
  document.getElementById('close').style.display= 'block';
  document.getElementById('descarga').style.display= 'block';
});


var cerrar=document.getElementById('close');

cerrar.addEventListener("click", function() {
document.getElementById('carouseltitulo').style.display= 'none';
document.getElementById('close').style.display= 'none';
document.getElementById('descarga').style.display= 'none';
}); 



//mostrar y ocultar cursos//

var abrir=document.getElementById('abrir');

abrir.addEventListener("click", function() {
    document.getElementById('carouselcursos').style.display= 'block';
    document.getElementById('cerrar').style.display= 'block';
    document.getElementById('descarga1').style.display= 'block';
  });


var cerrar=document.getElementById('cerrar');

cerrar.addEventListener("click", function() {
  document.getElementById('carouselcursos').style.display= 'none';
  document.getElementById('cerrar').style.display= 'none';
  document.getElementById('descarga1').style.display= 'none';
  }); 




  //mostrar y ocultar herramientas

var abrir=document.getElementById('abrir1');

abrir.addEventListener("click", function() {
    document.getElementById('herramientas').style.display= 'block';
    document.getElementById('cancelar').style.display= 'block';
  });


var cancelar=document.getElementById('cancelar');

cancelar.addEventListener("click", function() {
  document.getElementById('herramientas').style.display= 'none';
  document.getElementById('cancelar').style.display= 'none';
  }); 




//animación de entrada al scrollear (div seccion 2)
const entrada1=document.getElementById('entrada1');
const entrada2=document.getElementById('entrada2');
const entrada3=document.getElementById('entrada3');
const entrada4=document.getElementById('entrada4');

const exponer= (entradas, observador) => {
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting) {
      entrada.target.classList.add('expuesto');
    } 
  });
}

const vigilante= new IntersectionObserver(exponer, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold:1.0
});


vigilante.observe(entrada1)
vigilante.observe(entrada2)
vigilante.observe(entrada3)
vigilante.observe(entrada4)

 
//animacion de entrada al scrollear (quedo a disposicion para concretar una entrevista)
const final=document.getElementById('final');

const cargarfrase= (entradas, observador) => {
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }

  });
}

const observador= new IntersectionObserver(cargarfrase, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold:1.0
});


observador.observe(final)









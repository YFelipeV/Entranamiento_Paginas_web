const miElemento = document.querySelector('.menu');

// Agrega un evento de desplazamiento a la ventana
window.addEventListener('scroll', function() {
  // Verifica si la página se ha desplazado hacia abajo (por ejemplo, 200 píxeles)
  if (window.scrollY > 50) {
    // Realiza la acción deseada, por ejemplo, cambia el fondo del elemento
  
    miElemento.style.top='0'
  } 
  if(window.scrollY < 200){
    miElemento.style.top='50px'
  }
  
});
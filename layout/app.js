const boton = document.getElementById('btn');
const btnCerrar = document.getElementById('btn-cerrar');

const modal = document.getElementById('modal');
    

boton.addEventListener('click', function() {
    modal.classList.toggle('hidden');
  });

  btnCerrar.addEventListener('click', function() {
    modal.classList.toggle('hidden');
  });
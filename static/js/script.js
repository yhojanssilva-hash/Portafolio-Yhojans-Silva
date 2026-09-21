const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('super-saiyan');
  
  if (document.body.classList.contains('super-saiyan')) {
    themeBtn.textContent = 'Modo Base ⚡';
  } else {
    themeBtn.textContent = 'Modo Super Saiyan 🔥';
  }
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  
  alert(`¡Mensaje recibido, ${nombre}! El radar ha enviado tu información correctamente.`);
  form.reset();
});const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('super-saiyan');
  
  if (document.body.classList.contains('super-saiyan')) {
    themeBtn.textContent = 'Modo Base ⚡';
  } else {
    themeBtn.textContent = 'Modo Super Saiyan 🔥';
  }
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  
  alert(`¡Mensaje recibido, ${nombre}! El radar ha enviado tu información correctamente.`);
  form.reset();
});
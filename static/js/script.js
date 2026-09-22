document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeToggleBtn.textContent = 'Modo Oscuro 🌙';
        } else {
            themeToggleBtn.textContent = 'Modo Claro ☀️';
        }
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            alert(`Gracias ${nombre}, tu mensaje ha sido enviado correctamente.`);
            contactForm.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleInfoButton');
    const additionalInfo = document.getElementById('additionalInfo');

    toggleButton.addEventListener('click', function() {
        if (additionalInfo.style.display === 'none') {
            additionalInfo.style.display = 'block';
        } else {
            additionalInfo.style.display = 'none';
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    var valid = true;

    // Clear previous errors
    document.getElementById('nombreError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('mensajeError').textContent = '';

    // Validate Name
    var nombre = document.getElementById('nombre').value.trim();
    if (nombre === '') {
        document.getElementById('nombreError').textContent = 'El nombre es obligatorio.';
        valid = false;
    }

    // Validate Email
    var email = document.getElementById('email').value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Por favor, introduce un correo electrónico válido.';
        valid = false;
    }

    // Validate Message
    var mensaje = document.getElementById('mensaje').value.trim();
    if (mensaje === '') {
        document.getElementById('mensajeError').textContent = 'El mensaje es obligatorio.';
        valid = false;
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
});

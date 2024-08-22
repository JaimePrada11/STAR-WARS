const starField = document.querySelector('.star-field');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Tamaño aleatorio para cada estrella
    const size = Math.random() * 3 + 1; // Tamaño entre 1px y 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Posición aleatoria en la pantalla
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    
    // Duración de animación aleatoria
    const duration = Math.random() * 5 + 5; // Duración entre 5 y 10 segundos
    star.style.animationDuration = `${duration}s`;
    
    // Añadir la estrella al contenedor
    starField.appendChild(star);
    
    // Eliminar la estrella una vez que la animación termine
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Generar automáticamente más de 1000 estrellas
for (let i = 0; i < 1000; i++) {
    createStar();
}

// Crear estrellas continuamente para un efecto infinito
setInterval(createStar, 100);

document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.header__button');
    const submenuButtons = document.querySelectorAll('.submenu__button');

    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentItem = this.parentElement;
            parentItem.classList.toggle('active');

            // Cierra los demás submenús
            menuButtons.forEach(btn => {
                if (btn !== this) {
                    btn.parentElement.classList.remove('active');
                }
            });
        });
    });

    submenuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

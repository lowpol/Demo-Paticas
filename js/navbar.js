// CONTROLA EL NAVBAR EN EL RESPONSIVE 

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');    //HACE QUE SE DESPLIEGUE UNA BARRA
    });
});

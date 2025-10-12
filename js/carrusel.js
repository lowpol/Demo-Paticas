//CARRUSEL DE IMAGENES

document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.carrusel-3d img');
    let index = 0;
    const interval = 3000; // tiempo entre cambios (ms)

    function actualizarCarrusel() {
        imgs.forEach(img => img.classList.remove('prev', 'active', 'next'));

        const total = imgs.length;
        const prevIndex = (index - 1 + total) % total;
        const nextIndex = (index + 1) % total;

        imgs[prevIndex].classList.add('prev');
        imgs[index].classList.add('active');
        imgs[nextIndex].classList.add('next');
    }

    function siguiente() {
        index = (index + 1) % imgs.length;
        actualizarCarrusel();
    }

    actualizarCarrusel();
    setInterval(siguiente, interval);
});


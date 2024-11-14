
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("nav ul li a");


    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetSection = document.querySelector(this.getAttribute("href"));


            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
        title: '¡Bienvenido a Magia milay!',
        html: `
            <p class="swal-text">Descubre nuestras tarjetas personalizadas, diseñadas para hacer cada ocasión única.</p>
            <p class="swal-text">Ya sea para un cumpleaños, un grado o un mensaje especial, crea la tarjeta perfecta que hable por ti.</p>
        `,
        imageUrl: 'imagenes/header.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Bienvenida',
        confirmButtonText: 'Explorar',
        customClass: {
            container: 'swal-container',
            title: 'swal-title',
            content: 'swal-content',
            confirmButton: 'swal-confirm-button',
            popup: 'swal-popup',
            image: 'swal-image'
        }
    });
});




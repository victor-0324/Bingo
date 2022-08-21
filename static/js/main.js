let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {

    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

// notificação
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () => {
        bell.classList.toggle('active');
    }
    // swiper

var swiper = new Swiper(" .trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,

        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,

        },

        1068: {
            // aqui vc define quantas mine fotos voce vai add na tela 
            slidesPerView: 5,
            // aqui é o espaço entre elas 
            spaceBetween: 20,
            // lembrando que para ter 5 fotos vc deve ter 5 slide no html
        },
    },
});
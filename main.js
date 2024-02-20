const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
// selecionamos nuestro main container. 
const mainContainer = document.querySelector(".main-container");

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);

let options = {
    strings: ["Web Development", "Full-Stack Developer", "Gamer"],
    typeSpeed: 50,
    backSpeed: 25,
    smartBackspace: true,
    loop: true,
    backDelay: 1000,
    startDelay: 1000,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
  };
  
let typed = new Typed('#typed', options);
  

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // mobileMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('active'); // Cambia 'inactive' a 'active'
}

function toogleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

document.querySelector('.icon-button').addEventListener('click', function() {
    const email = 'chuchin1770@gmail.com'; // Asegúrate de usar el método adecuado para obtener este valor si cambia dinámicamente
    navigator.clipboard.writeText(email).then(function() {
    //   alert('Email copied to clipboard!');
    console.log("entra al toastify");
      Toastify({
        text: "Email copiado en el portapapeles!!",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        offset: {
            x: 1, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 100 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  });






const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const closeIconMenu = document.querySelector('.close-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
const copyEmailIcon = document.querySelector('#copyEmailIcon');
const emailIcon = document.getElementById('emailIcon');

const user = 'je.parra.navarrete';
const domain = 'gmail.com';

// selecionamos nuestro main container. 
const mainContainer = document.querySelector(".main-container");

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
closeIconMenu.addEventListener('click', toggleMobileMenu);
copyEmailIcon.addEventListener('click', copyEmailOnClipBoard);
emailIcon.addEventListener('click', copyEmailOnClipBoard);

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const isMobileMenuActive = document.querySelector('.mobile-menu.active') !== null;
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      // Asume que tienes una clase para tu menú de navegación y puedes obtener su altura
      const navHeight = document.querySelector('#navigationBar').offsetHeight;

      const scrollToPosition = () => {
          if (targetElement) {
              const positionToScroll = targetElement.offsetTop - navHeight; // Ajusta aquí según sea necesario
              window.scrollTo({
                  top: positionToScroll,
                  behavior: "smooth"
              });
          }
      };

      if (isMobileMenuActive) {
          toggleMobileMenu();
          setTimeout(scrollToPosition, 300); // Ajusta este tiempo si es necesario
      } else {
          scrollToPosition();
      }
  });
});

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    const emailLinkDesktop = document.querySelector('#emailLinkDesktop');
    emailLinkDesktop.href = 'mailto:' + user+ '@'+ domain;
    if (!desktopMenu.classList.contains('inactive')) {
      
      if (emailIcon) { // Verifica si emailIcon realmente existe para evitar errores
          var emailContainer = document.querySelector('.email-container');
          emailContainer.addEventListener('mouseenter', function() {
              emailIcon.src = 'icons/sendEmail_hover.svg'; // Ruta al ícono que quieres mostrar al pasar el mouse
          });

          emailContainer.addEventListener('mouseleave', function() {
              emailIcon.src = 'icons/sendEmail.svg'; // Ruta al ícono original
          });
      }
  }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active'); // Cambia 'inactive' a 'active'
    closeIconMenu.classList.toggle('inactive');
    burguerMenu.style.display === 'none' ? burguerMenu.style.display = 'block' : burguerMenu.style.display = 'none';

    const emailLinkMobile = document.getElementById('emailLinkMobile');
    emailLinkMobile.textContent = user +'@'+domain;
    emailLinkMobile.href = 'mailto:' + user+ '@'+ domain;
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function copyEmailOnClipBoard() {
  console.log("Copy on clipboard");
  const email = user+'@'+domain; // Asegúrate de usar el método adecuado para obtener este valor si cambia dinámicamente
  navigator.clipboard.writeText(email).then(function() {
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
}





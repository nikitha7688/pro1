
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the icon class
    navbar.classList.toggle('active'); // Toggle the navbar visibility
};

// Select all sections and nav links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let timeout; // Variable for debouncing

window.onscroll = () => {
    clearTimeout(timeout); // Clear previous timeout
    timeout = setTimeout(() => { // Set a new timeout
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
            }
        });

        let header = document.querySelector('header');
        if (top > 50) {
            header.classList.add('scrolled'); // Add class for styles when scrolled
        } else {
            header.classList.remove('scrolled');
        }
    }, 100); // Adjust the delay as needed
};




/*scrollreveal*/

    
        ScrollReveal({
             reset: true ,
             distance:'80px',
             duration:2000,
             delay:200,
            });

            ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
            ScrollReveal().reveal('.home-img, .services-container , .portfolio-box,.contact form', { origin: 'botton' });
            ScrollReveal().reveal('.home-content h1 , .about-img', { origin: 'left' });
            ScrollReveal().reveal('.home-content p , .about-content', { origin: 'right' });


    /*type js */
    const typed =new Typed('.multiple-text',{
        strings: ['Frontend Developer'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true,
    });
    


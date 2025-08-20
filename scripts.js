// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '#e2e8f0';
            }
        });
        
        if (isValid) {
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        }
    });
}

// Back to top button
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createBackToTopButton();

//create whatsapp button
const createWhatsappButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fab fa-whatsapp"></i>';
    button.className = 'whatsapp-button';
    button.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #25D633;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
`;

    document.body.appendChild(button);

    window.addEventListener('scroll',() =>{
        if(window.scrollY > 300){
            button.style.opacity = '1';
            button.style.visibility = 'visible';
            } 
        else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
            }
        });
        button.addEventListener('click', () => {
            window.open('https://api.whatsapp.com/send?phone=+9359539971','_blank');
            });
    };
createWhatsappButton();

//create email button
const createEmailButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-envelope"></i>';
    button.className = 'email-button';
    button.style.cssText = `
    position: fixed;
    bottom: 140px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #fff;
    color: black;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

`;

document.body.appendChild(button);
window.addEventListener('scroll',() =>{
    if(window.scrollY > 300){
    button.style.opacity = '1';
    button.style.visibility = 'visible';
    }
    else {
    button.style.opacity = '0';
    button.style.visibility = 'hidden';
    }
    });
    button.addEventListener('click', () => {
        window.open('mailto:drishtiwebstudio@gmail.com','_blank');
    });
    };

    createEmailButton();


//connect the form to excel sheet
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwRrEO30DPS-a9YSTzwJTT1vXOoJvlXCJ8JcMe-Jf-HBAWEh1s6KNXxH6o4BwIH466f/exec'
    const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert('Thanks for contacting us! We will get back to you soon.'))
            .catch(error => console.error('Error!', error.message))
    });

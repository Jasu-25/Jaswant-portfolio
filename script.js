// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const navLinkItems = document.querySelectorAll('.nav-link');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
        navLinks?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
});

// Smooth Scrolling
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

// Form Submission
function handleFormSubmit(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const projectName = formData.get('project_name');
            const aboutProject = formData.get('about_project');
            
            const subject = `Project Inquiry: ${projectName}`;
            const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AProject Name: ${projectName}%0D%0A%0D%0AProject Details:%0D%0A${encodeURIComponent(aboutProject)}`;
            const mailtoLink = `mailto:jaswant5511246@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            window.location.href = mailtoLink;
            
            alert('Opening your email client. Please send the email to complete your message.');
            form.reset();
        });
    }
}

handleFormSubmit('contactForm');
handleFormSubmit('contactFormPage');

// Scroll Animations (Simple AOS alternative)
function reveal() {
    const reveals = document.querySelectorAll('[data-aos]');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animation state
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    reveal();
});

window.addEventListener('scroll', reveal);

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateX(-50%) translateY(0)';
        navbar.style.top = '20px';
    } else if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateX(-50%) translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateX(-50%) translateY(0)';
        navbar.style.top = '10px';
    }
    
    lastScroll = currentScroll;
});


document.querySelector(".jaswant-karri").addEventListener("click",()=>{
    window.location.href = `index.html`;
})
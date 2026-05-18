// JavaScript Document

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
   navLinks.classList.toggle('active');

   const spans = mobileMenu.querySelectorAll('span');

   spans.forEach((span, index) => {
      span.style.transform = navLinks.classList.contains('active')
         ? (index === 0
            ? 'rotate(45deg) translate(5px, 5px)'
            : index === 1
               ? 'opacity(0)'
               : 'rotate(-45deg) translate(7px, -6px)')
         : 'none';
   });
});

// Active Menu Highlight
function updateActiveMenu() {
   const sections = document.querySelectorAll('section[id]');
   const navLinksItems = document.querySelectorAll('.nav-links a');

   let current = 'home';

   if (window.scrollY > 100) {
      sections.forEach(section => {
         const sectionTop = section.offsetTop;

         if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
         }
      });
   }

   navLinksItems.forEach(link => {
      link.classList.remove('active');

      if (link.getAttribute('href').substring(1) === current) {
         link.classList.add('active');
      }
   });
}

window.addEventListener('scroll', updateActiveMenu);

// Initialize
document.addEventListener('DOMContentLoaded', () => {

   const navLinksItems = document.querySelectorAll('.nav-links a');
   const homeLink = document.querySelector('.nav-links a[href="#home"]');

   navLinksItems.forEach(link => link.classList.remove('active'));

   if (homeLink) {
      homeLink.classList.add('active');
   }

   // HERO TEXT ROTATION
   const headline = document.getElementById('hero-headline');
   const paragraph = document.getElementById('hero-paragraph');

   if (headline && paragraph) {

      const textSets = [
         {
            h1: "PingUp<br>Connect Beyond Limits",
            p: "Experience lightning-fast messaging, crystal-clear voice calls, ultra-HD video chats, and seamless media sharing — all in one powerful communication platform."
         },

         {
            h1: "One App.<br>Infinite Connections.",
            p: "Chat with friends, connect with family, share memories instantly, and enjoy smooth communication anytime anywhere with PingUp."
         },

         {
            h1: "Built For The<br>Future Of Communication",
            p: "PingUp combines speed, privacy, security, and modern technology to create a next-generation communication experience."
         }
      ];

      let currentIndex = 0;

      function changeText() {

         headline.classList.add('text-fade-out');
         paragraph.classList.add('text-fade-out');

         setTimeout(() => {

            currentIndex = (currentIndex + 1) % textSets.length;

            headline.innerHTML = textSets[currentIndex].h1;
            paragraph.innerHTML = textSets[currentIndex].p;

            headline.classList.remove('text-fade-out');
            paragraph.classList.remove('text-fade-out');

         }, 500);
      }

      setInterval(changeText, 5000);
   }

   // SERVICES TAB FIX
   const serviceTabs = document.querySelectorAll('.service-tab');
   const serviceDetails = document.querySelectorAll('.service-details');

   serviceTabs.forEach(tab => {

      tab.addEventListener('click', () => {

         const target = tab.getAttribute('data-target');

         serviceTabs.forEach(t => {
            t.classList.remove('active');
         });

         serviceDetails.forEach(detail => {
            detail.classList.remove('active');
         });

         tab.classList.add('active');

         const activeContent = document.querySelector(
            `.service-details[data-service="${target}"]`
         );

         if (activeContent) {
            activeContent.classList.add('active');
         }
      });
   });
});

updateActiveMenu();

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

      navLinks.classList.remove('active');
   });
});

// Scroll Animations
const observerOptions = {
   threshold: 0.15,
   rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {

   entries.forEach((entry, index) => {

      if (entry.isIntersecting) {

         setTimeout(() => {

            entry.target.classList.add('animate');

            if (entry.target.classList.contains('counter')) {
               animateCounter(entry.target);
            }

         }, index * 100);
      }
   });

}, observerOptions);

// Observe Elements
document.querySelectorAll('.fade-in, .service-tab, .team-member, .testimonial, .counter')
   .forEach(el => {
      observer.observe(el);
   });

// Counter Animation
function animateCounter(element) {

   if (element.classList.contains('animated')) return;

   element.classList.add('animated');

   const target = parseInt(element.getAttribute('data-count'));
   const increment = target / 80;

   let current = 0;

   const timer = setInterval(() => {

      current += increment;

      const value = Math.floor(current);

      element.textContent = target > 100 ? value : value + '%';

      if (current >= target) {

         element.textContent = target > 100
            ? target
            : target + '%';

         clearInterval(timer);
      }

   }, 25);
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {

   const navbar = document.querySelector('.navbar');
   const scrolled = window.scrollY;

   if (scrolled > 50) {

      navbar.style.background = '#FFFFFF';
      navbar.style.borderBottomColor = 'rgba(71, 85, 105, 0.2)';

   } else {

      navbar.style.background = '#FFFFFF';
      navbar.style.borderBottomColor = 'rgba(71, 85, 105, 0.1)';
   }
});

// Contact Form
const contactForm = document.querySelector('.contact-form');

if (contactForm) {

   contactForm.addEventListener('submit', (e) => {

      e.preventDefault();

      const submitBtn = contactForm.querySelector('.submit-btn');

      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Connecting...';

      submitBtn.style.background =
         'linear-gradient(135deg, #10b981, #059669)';

      setTimeout(() => {

         submitBtn.textContent = 'Welcome To PingUp!';

         setTimeout(() => {

            submitBtn.textContent = originalText;

            submitBtn.style.background =
               'linear-gradient(135deg, #64748b, #475569)';

            contactForm.reset();

         }, 3000);

      }, 2000);
   });
}

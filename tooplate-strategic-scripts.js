// ==============================
// MOBILE MENU TOGGLE
// ==============================
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
   mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');

      const spans = mobileMenu.querySelectorAll('span');

      spans.forEach((span, index) => {
         const isActive = navLinks.classList.contains('active');

         span.style.transform = isActive
            ? (
               index === 0
                  ? 'rotate(45deg) translate(5px, 5px)'
                  : index === 1
                     ? 'translateX(-20px)'
                     : 'rotate(-45deg) translate(7px, -6px)'
            )
            : 'none';

         span.style.opacity = (isActive && index === 1) ? '0' : '1';
      });
   });
}


// ==============================
// ACTIVE MENU ON SCROLL
// ==============================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveMenu() {
   let current = 'home';

   sections.forEach(section => {
      const sectionTop = section.offsetTop - 250;

      if (window.scrollY >= sectionTop) {
         current = section.getAttribute('id');
      }
   });

   navItems.forEach(link => {
      link.classList.remove('active');

      if (link.getAttribute('href') === `#${current}`) {
         link.classList.add('active');
      }
   });
}

window.addEventListener('scroll', updateActiveMenu);


// ==============================
// DOM READY
// ==============================
document.addEventListener('DOMContentLoaded', () => {

   // Default active nav
   const homeLink = document.querySelector('.nav-links a[href="#home"]');
   navItems.forEach(link => link.classList.remove('active'));
   if (homeLink) homeLink.classList.add('active');


   // ==========================
   // HERO TEXT ROTATION
   // ==========================
   const headline = document.getElementById('hero-headline');
   const paragraph = document.getElementById('hero-paragraph');

   if (headline && paragraph) {

      const textSets = [
         {
            h1: "PingUp<br>Connect Beyond Limits",
            p: "Lightning-fast messaging, HD calls, and secure communication in one place."
         },
         {
            h1: "One App.<br>Infinite Connections.",
            p: "Stay connected with friends and family anytime, anywhere with PingUp."
         },
         {
            h1: "Built For The<br>Future Of Communication",
            p: "Secure, fast, and modern communication designed for everyone."
         }
      ];

      let currentIndex = 0;

      setInterval(() => {

         headline.classList.add('text-fade-out');
         paragraph.classList.add('text-fade-out');

         setTimeout(() => {
            currentIndex = (currentIndex + 1) % textSets.length;

            headline.innerHTML = textSets[currentIndex].h1;
            paragraph.innerHTML = textSets[currentIndex].p;

            headline.classList.remove('text-fade-out');
            paragraph.classList.remove('text-fade-out');
         }, 500);

      }, 5000);
   }


   // ==========================
   // SERVICES TABS (FIXED)
   // ==========================
   const serviceTabs = document.querySelectorAll('.service-tab');
   const serviceDetails = document.querySelectorAll('.service-details');

   function showService(index) {

      serviceTabs.forEach(t => t.classList.remove('active'));
      serviceDetails.forEach(d => {
         d.classList.remove('active');
         d.style.display = 'none';
      });

      if (serviceTabs[index]) serviceTabs[index].classList.add('active');
      if (serviceDetails[index]) {
         serviceDetails[index].classList.add('active');
         serviceDetails[index].style.display = 'block';
      }
   }

   serviceTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
         showService(index);
      });
   });

   // default first tab
   if (serviceTabs.length > 0) {
      showService(0);
   }


   // ==========================
   // SCROLL ANIMATIONS
   // ==========================
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('animate');
         }
      });
   }, {
      threshold: 0.15
   });

   document.querySelectorAll('.fade-in, .testimonial').forEach(el => {
      observer.observe(el);
   });


   // ==========================
   // TESTIMONIAL HOVER EFFECT
   // ==========================
   document.querySelectorAll('.testimonial-content').forEach(card => {
      card.addEventListener('mouseenter', () => {
         card.style.transform = 'scale(1.02) translateY(-5px)';
      });

      card.addEventListener('mouseleave', () => {
         card.style.transform = 'scale(1) translateY(0)';
      });
   });

});


// ==============================
// SMOOTH SCROLL
// ==============================
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

      if (navLinks) {
         navLinks.classList.remove('active');
      }
   });
});


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================
window.addEventListener('scroll', () => {
   const navbar = document.querySelector('.navbar');
   if (!navbar) return;

   navbar.style.borderBottomColor =
      window.scrollY > 50
         ? 'rgba(71, 85, 105, 0.2)'
         : 'rgba(71, 85, 105, 0.1)';
});

// JavaScript Document

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {

   mobileMenu.addEventListener('click', () => {

      navLinks.classList.toggle('active');

      const spans = mobileMenu.querySelectorAll('span');

      spans.forEach((span, index) => {

         span.style.transform = navLinks.classList.contains('active')
            ? (index === 0
               ? 'rotate(45deg) translate(5px, 5px)'
               : index === 1
                  ? 'translateX(-20px)'
                  : 'rotate(-45deg) translate(7px, -6px)')
            : 'none';

         span.style.opacity =
            navLinks.classList.contains('active') && index === 1
               ? '0'
               : '1';
      });
   });
}


// Active Menu Highlight
function updateActiveMenu() {

   const sections = document.querySelectorAll('section[id]');
   const navLinksItems = document.querySelectorAll('.nav-links a');

   let current = 'home';

   sections.forEach(section => {

      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - 200) {
         current = section.getAttribute('id');
      }
   });

   navLinksItems.forEach(link => {

      link.classList.remove('active');

      if (link.getAttribute('href').substring(1) === current) {
         link.classList.add('active');
      }
   });
}

window.addEventListener('scroll', updateActiveMenu);


// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {

   // Default active nav
   const navLinksItems = document.querySelectorAll('.nav-links a');
   const homeLink = document.querySelector('.nav-links a[href="#home"]');

   navLinksItems.forEach(link => link.classList.remove('active'));
   if (homeLink) homeLink.classList.add('active');


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


   // =========================
   // SERVICES TAB FIX (MAIN FIX)
   // =========================

   const serviceTabs = document.querySelectorAll('.service-tab');
   const serviceDetails = document.querySelectorAll('.service-details');

   function showService(target) {

      serviceTabs.forEach(t => t.classList.remove('active'));
      serviceDetails.forEach(d => d.classList.remove('active'));

      serviceDetails.forEach(d => {
         d.style.display = 'none';
      });

      const activeTab = document.querySelector(`.service-tab[data-target="${target}"]`);
      const activeContent = document.querySelector(`.service-details[data-service="${target}"]`);

      if (activeTab) activeTab.classList.add('active');

      if (activeContent) {
         activeContent.classList.add('active');
         activeContent.style.display = 'block';
      }
   }

   serviceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
         const target = tab.getAttribute('data-target');
         showService(target);
      });
   });

   // Default show first tab
   if (serviceTabs.length > 0) {
      const firstTarget = serviceTabs[0].getAttribute('data-target');
      showService(firstTarget);
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

      if (navLinks) {
         navLinks.classList.remove('active');
      }
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
         }, index * 100);
      }
   });

}, observerOptions);

document.querySelectorAll(
   '.fade-in, .service-tab, .testimonial'
).forEach(el => observer.observe(el));


// Navbar Scroll Effect
window.addEventListener('scroll', () => {

   const navbar = document.querySelector('.navbar');
   if (!navbar) return;

   const scrolled = window.scrollY;

   if (scrolled > 50) {
      navbar.style.borderBottomColor = 'rgba(71, 85, 105, 0.2)';
   } else {
      navbar.style.borderBottomColor = 'rgba(71, 85, 105, 0.1)';
   }
});


// Testimonials Hover
document.querySelectorAll('.testimonial-content').forEach(testimonial => {

   testimonial.addEventListener('mouseenter', () => {
      testimonial.style.transform = 'scale(1.02) translateY(-5px)';
   });

   testimonial.addEventListener('mouseleave', () => {
      testimonial.style.transform = 'scale(1) translateY(0)';
   });
});

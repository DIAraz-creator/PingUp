// PingUp JavaScript File

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = mobileMenu.querySelectorAll('span');
  spans.forEach((span, index) => {
    span.style.transform = navLinks.classList.contains('active')
      ? (index === 0 ? 'rotate(45deg) translate(5px, 5px)' :
         index === 1 ? 'opacity(0)' :
         'rotate(-45deg) translate(7px, -6px)')
      : 'none';
  });
});

// Active Menu Highlight
function updateActiveMenu() {
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a');
  let current = 'home';
  if (window.scrollY > 100) {
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
  }
  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateActiveMenu);

// Hero Text Rotation (PingUp slogans)
document.addEventListener('DOMContentLoaded', () => {
  const headline = document.getElementById('hero-headline');
  const paragraph = document.getElementById('hero-paragraph');
  if (headline && paragraph) {
    const textSets = [
      {
        h1: "Connect Beyond Limits",
        p: "Lightning-fast messaging, crystal-clear calls, and ultra-HD video — all in one app."
      },
      {
        h1: "Your Privacy, Your Power",
        p: "PingUp protects every chat, call, and file with advanced end-to-end encryption."
      },
      {
        h1: "One Platform. Endless Connections.",
        p: "From friends to teams, PingUp makes communication instant, secure, and global."
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
});

// Services Tabs
const serviceTabs = document.querySelectorAll('.service-tab');
const serviceDetails = document.querySelectorAll('.service-details');
serviceTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');
    serviceTabs.forEach(t => t.classList.remove('active'));
    serviceDetails.forEach(d => d.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`.service-details[data-service="${target}"]`).classList.add('active');
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        // Counter animation
        if (entry.target.classList.contains('counter')) {
          animateCounter(entry.target);
        }
      }, index * 100); // stagger animations
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .service-tab, .team-member, .testimonial, .counter').forEach(el => {
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
      element.textContent = target > 100 ? target : target + '%';
      clearInterval(timer);
    }
  }, 25);
}

// Navbar scroll effect
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

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Connecting...';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    submitBtn.classList.add('loading');
    setTimeout(() => {
      submitBtn.textContent = 'Welcome to PingUp!';
      submitBtn.classList.remove('loading');
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = 'linear-gradient(135deg, #64748b, #475569)';
        contactForm.reset();
      }, 3000);
    }, 2000);
  });
}
// Hover effects for service tabs
document.querySelectorAll('.service-tab').forEach((tab) => {
  tab.addEventListener('mouseenter', () => {
    if (!tab.classList.contains('active')) {
      tab.style.transform = 'translateX(5px)';
      tab.style.boxShadow = '0 10px 25px rgba(71, 85, 105, 0.1)';
    }
  });
  tab.addEventListener('mouseleave', () => {
    if (!tab.classList.contains('active')) {
      tab.style.transform = 'translateX(0)';
      tab.style.boxShadow = 'none';
    }
  });
});

// Parallax effect for hero and geometric shapes
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.geometric-shapes, .hero-content');
  parallaxElements.forEach((element, index) => {
    const speed = 0.3 + (index * 0.2);
    if (scrolled < window.innerHeight) {
      element.style.transform = `translateY(${scrolled * speed}px)`;
    }
  });

  // Geometric shapes rotation
  const shapes = document.querySelectorAll('.geo-shape');
  shapes.forEach((shape, index) => {
    const rotation = scrolled * 0.05 * (index + 1);
    shape.style.transform = `rotate(${rotation}deg)`;
  });
});

// Interactive testimonials
document.querySelectorAll('.testimonial-content').forEach(testimonial => {
  testimonial.addEventListener('mouseenter', () => {
    testimonial.style.transform = 'scale(1.02) translateY(-5px)';
    testimonial.style.boxShadow = '0 25px 50px rgba(71, 85, 105, 0.2)';
  });
  testimonial.addEventListener('mouseleave', () => {
    testimonial.style.transform = 'scale(1) translateY(0)';
    testimonial.style.boxShadow = '0 15px 35px rgba(71, 85, 105, 0.1)';
  });
});

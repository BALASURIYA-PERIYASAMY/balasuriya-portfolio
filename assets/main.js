const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const mobileMenu = document.getElementById('mobile-menu');
const navToggle = document.getElementById('nav-toggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
  document.querySelectorAll('.theme-icon').forEach((el) => {
    el.textContent = root.classList.contains('dark') ? '☀️' : '🌙';
  });
}

function toggleTheme() {
  const next = root.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
}

applyTheme('dark');

themeToggle?.addEventListener('click', () => {});
themeToggleMobile?.addEventListener('click', () => {});

navToggle?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach((a) => {
  a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

AOS.init({ duration: 650, once: true, easing: 'ease-out-cubic', offset: 80, debounceDelay: 50, throttleDelay: 50 });

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'Web Developer',
  'DevOps Engineer',
  'AI Enthusiast'
];
const typingEl = document.getElementById('typing');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIndex % roles.length];
  if (!deleting) {
    charIndex++;
    typingEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    charIndex--;
    typingEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex++;
    }
  }
  const delay = deleting ? 50 : 90;
  setTimeout(typeLoop, delay);
}
if (typingEl) typeLoop();

tsParticles.load('tsparticles', {
  background: { color: { value: 'transparent' } },
  fpsLimit: 120,
  particles: {
    number: { value: 28, density: { enable: true, area: 900 } },
    color: { value: ['#22d3ee', '#06b6d4', '#a5f3fc'] },
    links: { enable: true, color: '#22d3ee', distance: 120, opacity: 0.18 },
    move: { enable: true, speed: 0.55, outModes: { default: 'out' } },
    opacity: { value: 0.18 },
    size: { value: { min: 1, max: 2.2 } }
  },
  detectRetina: true
});

const contactForm = document.getElementById('contact-form');
const successNotification = document.getElementById('success-notification');
const closeNotificationBtn = document.getElementById('close-notification');

function showSuccessNotification() {
  successNotification.classList.remove('hidden');
  successNotification.classList.add('animate-slide-in');
  
  setTimeout(() => {
    hideSuccessNotification();
  }, 4000);
}

function hideSuccessNotification() {
  successNotification.classList.add('animate-slide-out');
  setTimeout(() => {
    successNotification.classList.add('hidden');
    successNotification.classList.remove('animate-slide-in', 'animate-slide-out');
  }, 300);
}

closeNotificationBtn?.addEventListener('click', hideSuccessNotification);

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  const formData = new FormData(contactForm);
  
  try {
    const response = await fetch('https://formsubmit.co/balasuriyaperiyasamy@gmail.com', {
      method: 'POST',
      body: formData
    });
    
    if (response.ok) {
      showSuccessNotification();
      contactForm.reset();
    } else {
      alert('Failed to send message. Please try again later.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Failed to send message. Please check your connection and try again.');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card-enhanced');
  
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
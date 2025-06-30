// Initialisation GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation d'entrée de la page
function initPageAnimations() {
  // Timeline principale pour l'animation d'entrée
  const tl = gsap.timeline();

  // Animation du titre hero
  tl.to('.title-line', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })
    .to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .to('.hero-description', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3')
    .to('.hero-stats', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.2')
    .to('.email-form', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.2')
    .to('.hero-visual', {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4');

  // Animation des cartes flottantes
  gsap.to('.floating-card', {
    y: -20,
    duration: 3,
    ease: 'power2.inOut',
    stagger: 0.2,
    repeat: -1,
    yoyo: true
  });

  // Animation de rotation subtile des cartes
  gsap.to('.floating-card', {
    rotation: 5,
    duration: 4,
    ease: 'power2.inOut',
    stagger: 0.3,
    repeat: -1,
    yoyo: true
  });

  // Animation des particules
  gsap.to('.particle', {
    y: -30,
    rotation: 360,
    duration: 8,
    ease: 'power2.inOut',
    stagger: 0.5,
    repeat: -1,
    yoyo: true
  });
}

// Animations au scroll
function initScrollAnimations() {
  // Animation des sections
  gsap.utils.toArray('section').forEach(section => {
    const elements = section.querySelectorAll('.section-title, .step, .benefit, .value, .hotel-benefit, .rule, .footer-pitch, .footer-cta, .footer-links, .testimonial, .value-card');

    elements.forEach(element => {
      gsap.fromTo(element, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  });

  // Animation spéciale pour la section "Comment ça marche"
  gsap.fromTo('.step-icon svg', {
    scale: 0,
    rotation: -180
  }, {
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: 'back.out(1.7)',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.how-it-works',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation des valeurs de marque
  gsap.fromTo('.value', {
    opacity: 0,
    scale: 0.5,
    rotation: 10
  }, {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 0.6,
    ease: 'back.out(1.7)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.brand-values',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation des cartes de valeurs
  gsap.fromTo('.value-card', {
    opacity: 0,
    y: 30,
    scale: 0.9
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.brand-values',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation des témoignages
  gsap.fromTo('.testimonial', {
    opacity: 0,
    y: 40,
    scale: 0.95
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.testimonials',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation des statistiques du hero
  gsap.fromTo('.stat', {
    opacity: 0,
    scale: 0.8
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: 'back.out(1.7)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
}

// Animations des boutons et interactions
function initButtonAnimations() {
  // Animation hover des boutons CTA
  gsap.utils.toArray('.cta-primary, .cta-secondary').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });

  // Animation des liens
  gsap.utils.toArray('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        color: '#8B5CF6',
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        color: '',
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });
}

// Animation de la navigation
function initNavAnimation() {
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll vers le bas
      gsap.to('.navbar', {
        y: -70,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      // Scroll vers le haut
      gsap.to('.navbar', {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    lastScrollY = currentScrollY;
  });
}

// Gestion des formulaires
function initFormHandling() {
  const forms = document.querySelectorAll('.email-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = form.querySelector('input[type="email"]').value;
      const button = form.querySelector('button');
      const originalText = button.textContent;

      // Animation de soumission
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.out'
      });

      button.textContent = 'Envoi...';
      button.disabled = true;

      // Simulation d'envoi (remplacer par votre logique d'API)
      setTimeout(() => {
        button.textContent = 'Envoyé !';
        button.style.background = '#10B981';

        gsap.to(button, {
          scale: 1,
          duration: 0.1,
          ease: 'power2.out'
        });

        // Reset après 3 secondes
        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = '';
          button.disabled = false;
          form.reset();
        }, 3000);
      }, 1500);
    });
  });
}

// Popup exit intent
function initExitIntentPopup() {
  let hasShownPopup = false;

  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !hasShownPopup) {
      hasShownPopup = true;
      showPopup();
    }
  });

  // Fermeture du popup
  document.getElementById('popup-close').addEventListener('click', hidePopup);

  // Fermeture en cliquant à l'extérieur
  document.getElementById('exit-popup').addEventListener('click', (e) => {
    if (e.target.id === 'exit-popup') {
      hidePopup();
    }
  });
}

function showPopup() {
  const popup = document.getElementById('exit-popup');
  popup.classList.add('active');

  gsap.fromTo('.popup', {
    scale: 0.8,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
    ease: 'back.out(1.7)'
  });
}

function hidePopup() {
  const popup = document.getElementById('exit-popup');

  gsap.to('.popup', {
    scale: 0.8,
    opacity: 0,
    duration: 0.2,
    ease: 'power2.in',
    onComplete: () => {
      popup.classList.remove('active');
    }
  });
}

// Smooth scroll pour les ancres
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 70
          },
          ease: 'power3.inOut'
        });
      }
    });
  });
}

// Animation de parallaxe pour l'arrière-plan
function initParallaxEffect() {
  gsap.to('.hero::before', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
}

// Animation des cartes avec effet de profondeur
function initCardDepthEffect() {
  const cards = document.querySelectorAll('.floating-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Animation de chargement des icônes
function initIconAnimations() {
  gsap.utils.toArray('.benefit-icon').forEach(icon => {
    gsap.fromTo(icon, {
      scale: 0,
      rotation: 180
    }, {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: icon,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });
  });
}

// Effet de texte animé pour le titre
function initTextAnimation() {
  const title = document.querySelector('.hero-title');
  const text = title.textContent;
  title.innerHTML = '';

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.opacity = '0';
    span.style.transform = 'translateY(20px)';
    title.appendChild(span);

    gsap.to(span, {
      opacity: 1,
      y: 0,
      duration: 0.1,
      delay: index * 0.05,
      ease: 'power3.out'
    });
  });
}

// Compteurs animés pour les statistiques
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 secondes
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
        counter.classList.add('animate');
      }
    };

    // Démarrer l'animation quand l'élément est visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter);
  });
}

// FAQ interactive
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fermer tous les autres items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Ouvrir/fermer l'item cliqué
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Animation des éléments FAQ
function initFAQAnimations() {
  gsap.fromTo('.faq-item', {
    opacity: 0,
    y: 30,
    scale: 0.95
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.faq',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Attendre un peu pour que tout soit chargé
  setTimeout(() => {
    initPageAnimations();
    initScrollAnimations();
    initButtonAnimations();
    initNavAnimation();
    initFormHandling();
    initExitIntentPopup();
    initSmoothScroll();
    initParallaxEffect();
    initCardDepthEffect();
    initIconAnimations();
    initCounters();
    initFAQ();
    initFAQAnimations();
    // initTextAnimation(); // Décommenter pour l'effet de texte lettre par lettre
  }, 100);
});

// Optimisation des performances
window.addEventListener('load', () => {
  // Préchargement des images si nécessaire
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  });
});

// Gestion du responsive
window.addEventListener('resize', () => {
  // Refresh ScrollTrigger sur resize
  ScrollTrigger.refresh();
});

// Animation de la barre de progression
function initProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #8B5CF6, #A78BFA);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + '%';
  });
}

// Initialiser la barre de progression
initProgressBar(); 
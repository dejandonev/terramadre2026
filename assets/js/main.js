(() => {
  'use strict';

  document.documentElement.classList.replace('no-js', 'js');

  const header = document.querySelector('[data-site-header]');
  const navToggle = document.querySelector('.nav-toggle');
  const navPanel = document.getElementById('primary-navigation');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hero = document.querySelector('.opening');

  if (hero) {
    if (reducedMotion.matches) {
      hero.classList.add('is-hero-ready');
    } else {
      window.requestAnimationFrame(() => hero.classList.add('is-hero-ready'));
    }
  }

  const setHeaderState = () => {
    if (!header) {
      return;
    }

    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  let scrollFrame = 0;
  const handleScroll = () => {
    if (scrollFrame) {
      return;
    }

    scrollFrame = window.requestAnimationFrame(() => {
      setHeaderState();
      scrollFrame = 0;
    });
  };

  setHeaderState();
  window.addEventListener('scroll', handleScroll, { passive: true });

  if (header && navToggle && navPanel) {
    navToggle.hidden = false;
    const navLinks = [...navPanel.querySelectorAll('a')];

    const closeNavigation = (returnFocus = false) => {
      navToggle.setAttribute('aria-expanded', 'false');
      header.classList.remove('is-open');
      document.body.classList.remove('nav-open');

      if (returnFocus) {
        navToggle.focus();
      }
    };

    const openNavigation = () => {
      navToggle.setAttribute('aria-expanded', 'true');
      header.classList.add('is-open');
      document.body.classList.add('nav-open');
      navLinks[0]?.focus();
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeNavigation();
      } else {
        openNavigation();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => closeNavigation());
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeNavigation(true);
      }
    });

    document.addEventListener('click', (event) => {
      if (
        navToggle.getAttribute('aria-expanded') === 'true'
        && !header.contains(event.target)
      ) {
        closeNavigation();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        closeNavigation();
      }
    });
  }

  const faqRoot = document.querySelector('[data-faq]');
  if (faqRoot) {
    const questions = [...faqRoot.querySelectorAll('.faq-question')];

    questions.forEach((question, index) => {
      const answerId = question.getAttribute('aria-controls');
      const answer = answerId ? document.getElementById(answerId) : null;

      if (!answer) {
        return;
      }

      const startsOpen = index === 0;
      question.setAttribute('aria-expanded', String(startsOpen));
      answer.hidden = !startsOpen;

      question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        question.setAttribute('aria-expanded', String(!isExpanded));
        answer.hidden = isExpanded;
      });
    });
  }

  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  if (!revealItems.length || reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  document.body.classList.add('reveal-ready');

  let remainingItems = revealItems.length;
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
      remainingItems -= 1;

      if (remainingItems === 0) {
        revealObserver.disconnect();
      }
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08,
  });

  revealItems.forEach((item) => revealObserver.observe(item));
})();

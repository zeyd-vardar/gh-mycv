/* =====================================================
   Acar Muhendislik - Main JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Preloader ----- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hide'), 800);
  });

  /* ----- Navbar Scroll ----- */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');

  function handleScroll() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 80);
    backToTop.classList.toggle('show', scrollY > 400);
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ----- Mobile Menu ----- */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ----- Active Nav Link on Scroll ----- */
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollY = window.scrollY + 200;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < top + height);
      }
    });
  }
  window.addEventListener('scroll', highlightNav);

  /* ----- Back to Top ----- */
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ----- Counter Animation ----- */
  const statNumbers = document.querySelectorAll('.stat-card__number');
  let statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      statsAnimated = true;
      statNumbers.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current).toLocaleString('tr-TR');
        }, 16);
      });
    }
  }
  window.addEventListener('scroll', animateCounters);

  /* ----- Projects Data & Filter ----- */
  const projectsData = [
    {
      title: 'Trabzon Hukumet Konagi',
      category: 'kamu',
      categoryLabel: 'Kamu',
      desc: 'Trabzon Hukumet Konagi dogalgaz donusum projesi',
      color: '#1b3a5c'
    },
    {
      title: 'Trabzon Ticaret ve Sanayi Odasi',
      category: 'kamu',
      categoryLabel: 'Kamu',
      desc: 'Ticaret ve Sanayi Odasi binasi dogalgaz donusumu',
      color: '#2a5a8c'
    },
    {
      title: 'KTU Fakulte Dogalgaz Donusumu',
      category: 'kamu',
      categoryLabel: 'Kamu',
      desc: 'Karadeniz Teknik Universitesi fakulte binasi dogalgaz donusumu',
      color: '#0f2640'
    },
    {
      title: 'Trabzon Jandarma Komutanligi',
      category: 'kamu',
      categoryLabel: 'Kamu',
      desc: 'Jandarma Komutanligi binasi dogalgaz donusum projesi',
      color: '#1b3a5c'
    },
    {
      title: 'Bayburt Hastanesi',
      category: 'kamu',
      categoryLabel: 'Kamu',
      desc: 'Bayburt Devlet Hastanesi dogalgaz donusum calismalari',
      color: '#3a6b9c'
    },
    {
      title: 'Rize Hukumet Konagi',
      category: 'kamu',
      categoryLabel: 'Kamu',
      desc: 'Rize Hukumet Konagi dogalgaz donusum projesi',
      color: '#2a5a8c'
    },
    {
      title: 'Sera Lake Resort Hotel',
      category: 'otel',
      categoryLabel: 'Otel',
      desc: 'Sera Lake Resort Hotel komple mekanik tesisat projesi',
      color: '#0f2640'
    },
    {
      title: 'Diger Buyuk Devlet Projeleri',
      category: 'kamu',
      categoryLabel: 'Kamu',
      desc: 'Bircok kamu ve devlet binasinda dogalgaz donusum projeleri',
      color: '#1b3a5c'
    }
  ];

  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProjects(filter) {
    const filtered = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filter);

    projectsGrid.innerHTML = filtered.map(p => `
      <div class="project-card">
        <div class="project-card__bg" style="background: linear-gradient(135deg, ${p.color}, ${p.color}dd);"></div>
        <div class="project-card__overlay">
          <span class="project-card__category">${p.categoryLabel}</span>
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.desc}</p>
        </div>
      </div>
    `).join('');
  }

  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });

  /* ----- Testimonials Data & Slider ----- */
  const testimonialsData = [
    {
      name: 'Ahmet Yilmaz',
      role: 'Site Yonetim Baskani',
      initials: 'AY',
      text: 'Acar Muhendislik ekibi sitemizin tum dogalgaz donusumunu kusursuz bir sekilde tamamladi. Profesyonel yaklasim ve zamaninda teslimat icin tesekkurler.',
      stars: 5
    },
    {
      name: 'Fatma Kaya',
      role: 'Apartman Yoneticisi',
      initials: 'FK',
      text: 'Kazan dairemizin dogalgaz donusumunu Acar Muhendislik ile gerceklestirdik. Enerji maliyetlerimiz %35 azaldi. Kesinlikle tavsiye ediyorum.',
      stars: 5
    },
    {
      name: 'Mehmet Demir',
      role: 'Insaat Muh.',
      initials: 'MD',
      text: 'Birden fazla projede calistik. Her seferinde ayni kalitede hizmet aldik. Teknik bilgi ve is guvenceleri ustte.',
      stars: 5
    },
    {
      name: 'Ayse Ozturk',
      role: 'Ev Sahibi',
      initials: 'AO',
      text: 'Evimizin dogalgaz tadilatini cok kisa surede ve temiz bir sekilde tamamladilar. Cok memnun kaldik.',
      stars: 5
    },
    {
      name: 'Mustafa Sahin',
      role: 'Isyeri Sahibi',
      initials: 'MS',
      text: 'Dukkanimizin dogalgaz donusumunu hizli ve guvenli bir sekilde gerceklestirdiler. Profesyonel ve guvenilir bir firma.',
      stars: 5
    },
    {
      name: 'Zeynep Arslan',
      role: 'Ev Sahibi',
      initials: 'ZA',
      text: 'Evimizin kombi bakimini her yil Acar Muhendislik\'e yaptiriyoruz. Dakik, temiz ve uygun fiyatli hizmet.',
      stars: 5
    }
  ];

  const testimonialsTrack = document.getElementById('testimonials-track');
  const testDots = document.getElementById('test-dots');
  const testPrev = document.getElementById('test-prev');
  const testNext = document.getElementById('test-next');

  function getItemsPerSlide() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function buildTestimonials() {
    const perSlide = getItemsPerSlide();
    const slides = [];
    for (let i = 0; i < testimonialsData.length; i += perSlide) {
      slides.push(testimonialsData.slice(i, i + perSlide));
    }

    testimonialsTrack.innerHTML = slides.map(slide => `
      <div class="testimonial-card">
        ${slide.map(t => `
          <div class="testimonial-item">
            <div class="testimonial-item__stars">
              ${'<i class="fas fa-star"></i>'.repeat(t.stars)}
            </div>
            <p class="testimonial-item__text">"${t.text}"</p>
            <div class="testimonial-item__author">
              <div class="testimonial-item__avatar">${t.initials}</div>
              <div>
                <div class="testimonial-item__name">${t.name}</div>
                <div class="testimonial-item__role">${t.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');

    testDots.innerHTML = slides.map((_, i) => `
      <button class="testimonials__dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>
    `).join('');

    return slides.length;
  }

  let currentSlide = 0;
  let totalSlides = buildTestimonials();

  function goToSlide(index) {
    currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
    testimonialsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.testimonials__dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  testPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
  testNext.addEventListener('click', () => goToSlide(currentSlide + 1));

  testDots.addEventListener('click', e => {
    if (e.target.classList.contains('testimonials__dot')) {
      goToSlide(parseInt(e.target.dataset.index, 10));
    }
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      currentSlide = 0;
      totalSlides = buildTestimonials();
      goToSlide(0);
    }, 250);
  });

  /* ----- Contact Form ----- */
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Mesajiniz basariyla gonderildi! En kisa surede donus yapacagiz.');
    contactForm.reset();
  });

  /* ----- Newsletter Form ----- */
  const newsletterForm = document.getElementById('newsletter-form');

  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Bultene basariyla abone oldunuz!');
    newsletterForm.reset();
  });

  /* ----- Toast Notification ----- */
  function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  /* ----- Scroll Reveal ----- */
  const revealEls = document.querySelectorAll(
    '.service-card, .stat-card, .project-card, .contact__card, .about__content, .about__image'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ----- Smooth scroll for anchor links ----- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = navbar.offsetHeight + 20;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});

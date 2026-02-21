/**
 * Portfolio - Kim Jason Juliane
 * Main JavaScript
 */

// ===== Project Data =====
const projects = {
  skedgo: {
    title: 'SkedGo / TripGo',
    type: 'Android / MaaS',
    company: 'SkedGo',
    position: 'Senior Mobile Engineer',
    joined: 'March 2023',
    downloads: '100K+',
    description: 'MaaS platform—TripGo, ODIN PASS, Choose How You Move. Multi-modal journey planning, 400+ cities, 4000+ transport providers. 100K+ downloads. TripGo SDK integrated by 3+ client apps (cities, transport agencies, corporates).',
    images: [
      'projects/Skedgo/screen-0.webp',
      'projects/Skedgo/screen-1.webp',
      'projects/Skedgo/screen-2.webp',
      'projects/Skedgo/screen-3.webp'
    ],
    links: [
      { label: 'SkedGo', url: 'https://skedgo.com/' },
      { label: 'TripGo on Google Play', url: 'https://play.google.com/store/apps/details?id=com.buzzhives.android.tripplanner' }
    ]
  },
  sitecapture: {
    title: 'SiteCapture',
    type: 'Android',
    company: 'Outliant (Client: SiteCapture)',
    position: 'Senior Mobile Engineer',
    joined: 'March 2021',
    downloads: '10K+',
    description: 'Field operations platform for construction—job site photo capture, data organization, CRM integration. 10K+ downloads. Solar, property management, construction industries across the US. (Includes former FotoNotes.)',
    images: [],
    links: [
      { label: 'Website', url: 'https://sitecapture.com/' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.sitecapture.app.sitecapture&hl=en_US' }
    ]
  },
  lalafood: {
    title: 'LalaFood Apps',
    type: 'Android',
    company: 'LalaFood (Lalamove subsidiary)',
    position: 'Lead Android Engineer',
    joined: 'July 2018',
    metric: '800+ merchants',
    description: 'Full User, Driver, and Merchant Android ecosystem for one of Metro Manila\'s largest food delivery platforms. 800+ partner merchants. Real-time order updates and rider tracking. (Platform closed.)',
    images: [
      'projects/LalaFood/Main/1.webp',
      'projects/LalaFood/Main/2.webp',
      'projects/LalaFood/Main/3.webp',
      'projects/LalaFood/Main/4.webp',
      'projects/LalaFood/Driver/0.webp',
      'projects/LalaFood/Driver/1.webp',
      'projects/LalaFood/Driver/2.webp',
      'projects/LalaFood/Driver/3.webp',
      'projects/LalaFood/Driver/4.webp',
      'projects/LalaFood/Partners/0.webp',
      'projects/LalaFood/Partners/1.webp',
      'projects/LalaFood/Partners/2.webp',
      'projects/LalaFood/Partners/3.webp',
      'projects/LalaFood/Partners/4.webp'
    ],
    links: []
  },
  upmood: {
    title: 'Upmood',
    type: 'Android / iOS',
    company: 'Taison Digital',
    position: 'Lead Mobile Engineer',
    joined: 'April 2016',
    downloads: '1K+',
    description: 'First emotion-tracking wearable app; PPG sensor + BLE integration detects 11 emotions from heart rate, stress, vitality. 1K+ downloads. Health & Fitness category.',
    images: [
      'projects/Upmood/screen-0.webp',
      'projects/Upmood/screen-1.webp',
      'projects/Upmood/screen-2.webp',
      'projects/Upmood/screen-3.webp'
    ],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.td.upmood&hl=en' },
      { label: 'Website', url: 'https://www.upmood.com/' }
    ]
  },
  'kingston-media': {
    title: 'Kingston Media',
    type: 'Ionic',
    company: 'Dog and Rooster Inc.',
    position: 'Lead Mobile Engineer',
    joined: 'November 2017',
    metric: 'Retail Marketing',
    description: 'Ionic cross-platform app for retail marketing, project requests & management. Brand-specific visual marketing tool. Fixing permissions and library inconsistencies for Android and iOS; lead on release versions and debugging.',
    images: [
      'projects/Kingston Media/1.webp',
      'projects/Kingston Media/2.webp',
      'projects/Kingston Media/3.webp',
      'projects/Kingston Media/4.webp',
      'projects/Kingston Media/5.webp'
    ],
    links: [
      { label: 'Website', url: 'https://kingston-media.com/' },
      { label: 'App Store', url: 'https://apps.apple.com/app/kingston-media-group/id1329777730' }
    ]
  },
  'hoops247': {
    title: 'Hoops247',
    type: 'Android',
    company: 'Dog and Rooster Inc.',
    position: 'Lead Mobile Engineer',
    joined: 'November 2017',
    metric: 'Basketball Community',
    description: 'Basketball community app—courts, pickup runs, groups. Location and timezone-based functionalities. Connect with the basketball community; search for courts and pickup games.',
    images: [
      'projects/Hoops24Seven/1.webp',
      'projects/Hoops24Seven/2.webp',
      'projects/Hoops24Seven/3.webp',
      'projects/Hoops24Seven/4.webp',
      'projects/Hoops24Seven/5.webp',
      'projects/Hoops24Seven/6.webp'
    ],
    links: [
      { label: 'Website', url: 'https://www.hoops247.com.au/' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.hoop24seven&hl=en' }
    ]
  },
  pos: {
    title: 'POS App',
    type: 'Flutter',
    company: 'Freelance',
    position: 'Cross-Platform Engineer',
    joined: '2024',
    metric: 'In use by food business',
    description: 'Cross-platform Point-of-Sale—Web, Android, iOS, macOS. In use by a food business for inventory management and personal sales tracking. Flutter, Riverpod, GoRouter, Hive, Firebase (Auth, Firestore), PDF/printing.',
    images: (() => {
      const imgs = [];
      for (let i = 1; i <= 17; i++) imgs.push(`projects/Sam's POS App/${i}.png`);
      return imgs;
    })(),
    links: []
  }
};

// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const heroResumeLink = document.getElementById('hero-resume-link');
const LIGHT_RESUME = 'resume/Juliane_Kim_Jason_Resume_Light.html';
const DARK_RESUME = 'resume/Juliane_Kim_Jason_Resume_Dark.html';

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const href = theme === 'dark' ? DARK_RESUME : LIGHT_RESUME;
  if (heroResumeLink) heroResumeLink.href = href;
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
}

function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

initTheme();

// ===== Modal =====
const overlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.querySelector('.modal-meta');
const modalDescription = document.querySelector('.modal-description');
const modalLinks = document.querySelector('.modal-links');
const carouselImg = document.getElementById('carousel-img');
const btnViewFullscreen = document.getElementById('btn-view-fullscreen');
const imageViewer = document.getElementById('image-viewer');
const imageViewerClose = document.getElementById('image-viewer-close');
const imageViewerImg = document.getElementById('image-viewer-img');
const imageViewerPrev = document.getElementById('image-viewer-prev');
const imageViewerNext = document.getElementById('image-viewer-next');
const imageViewerCounter = document.getElementById('image-viewer-counter');

let currentProject = null;
let currentImageIndex = 0;

function openModal(projectId) {
  const p = projects[projectId];
  if (!p) return;

  currentProject = projectId;
  currentImageIndex = 0;

  modalTitle.textContent = p.title;
  const badgeHtml = p.downloads ? ` · <span class="download-badge">${p.downloads} downloads</span>` : (p.metric ? ` · <span class="download-badge">${p.metric}</span>` : '');
  modalMeta.innerHTML = `<strong>Company:</strong> ${p.company} · <strong>Position:</strong> ${p.position} · <strong>Joined:</strong> ${p.joined}${badgeHtml}`;
  modalDescription.textContent = p.description;

  modalLinks.innerHTML = '';
  if (p.links && p.links.length) {
    p.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.label;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'btn btn-outline btn-sm';
      modalLinks.appendChild(a);
    });
  }

  const imgs = p.images || [];
  const carousel = document.getElementById('modal-carousel');
  const carouselPrev = document.getElementById('modal-carousel-prev');
  const carouselNext = document.getElementById('modal-carousel-next');
  if (imgs.length) {
    if (carousel) carousel.style.display = 'block';
    carouselImg.style.display = 'block';
    carouselImg.src = imgs[0];
    carouselImg.alt = p.title;
    if (carouselPrev) carouselPrev.style.display = 'flex';
    if (carouselNext) carouselNext.style.display = 'flex';
  } else {
    if (carousel) carousel.style.display = 'none';
    carouselImg.style.display = 'none';
    carouselImg.src = '';
    if (carouselPrev) carouselPrev.style.display = 'none';
    if (carouselNext) carouselNext.style.display = 'none';
  }

  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateCarouselImage() {
  const p = projects[currentProject];
  if (!p || !p.images || !p.images.length) return;
  currentImageIndex = (currentImageIndex + p.images.length) % p.images.length;
  carouselImg.src = p.images[currentImageIndex];
}

function openImageViewer() {
  const p = projects[currentProject];
  if (!p || !p.images || !p.images.length) return;
  imageViewerImg.src = p.images[currentImageIndex];
  imageViewerImg.alt = p.title;
  updateImageViewerCounter();
  imageViewer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  imageViewerClose.focus();
}

function closeImageViewer() {
  imageViewer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = overlay?.getAttribute('aria-hidden') === 'false' ? 'hidden' : '';
}

function updateImageViewerImage() {
  const p = projects[currentProject];
  if (!p || !p.images || !p.images.length) return;
  currentImageIndex = (currentImageIndex + p.images.length) % p.images.length;
  imageViewerImg.src = p.images[currentImageIndex];
  updateImageViewerCounter();
}

function updateImageViewerCounter() {
  const p = projects[currentProject];
  if (!p || !p.images || !p.images.length) return;
  imageViewerCounter.textContent = `${currentImageIndex + 1} / ${p.images.length}`;
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

const modalCarouselPrev = document.getElementById('modal-carousel-prev');
const modalCarouselNext = document.getElementById('modal-carousel-next');

if (modalCarouselPrev) modalCarouselPrev.addEventListener('click', () => { currentImageIndex--; updateCarouselImage(); });
if (modalCarouselNext) modalCarouselNext.addEventListener('click', () => { currentImageIndex++; updateCarouselImage(); });

if (carouselImg) carouselImg.addEventListener('click', openImageViewer);
if (btnViewFullscreen) btnViewFullscreen.addEventListener('click', openImageViewer);

if (imageViewerClose) imageViewerClose.addEventListener('click', closeImageViewer);
if (imageViewer) imageViewer.addEventListener('click', (e) => { if (e.target === imageViewer) closeImageViewer(); });
if (imageViewerPrev) imageViewerPrev.addEventListener('click', (e) => { e.stopPropagation(); currentImageIndex--; updateImageViewerImage(); });
if (imageViewerNext) imageViewerNext.addEventListener('click', (e) => { e.stopPropagation(); currentImageIndex++; updateImageViewerImage(); });

document.addEventListener('keydown', (e) => {
  if (imageViewer?.getAttribute('aria-hidden') === 'false') {
    if (e.key === 'Escape') closeImageViewer();
    else if (e.key === 'ArrowLeft') { currentImageIndex--; updateImageViewerImage(); }
    else if (e.key === 'ArrowRight') { currentImageIndex++; updateImageViewerImage(); }
    return;
  }
  if (e.key === 'Escape') closeModal();
  if (overlay?.getAttribute('aria-hidden') === 'true') return;
  const p = projects[currentProject];
  if (p && p.images && p.images.length) {
    if (e.key === 'ArrowLeft') { currentImageIndex--; updateCarouselImage(); }
    if (e.key === 'ArrowRight') { currentImageIndex++; updateCarouselImage(); }
  }
});

// Portfolio card clicks
document.querySelectorAll('.portfolio-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('a[href]')) return; // Let links navigate
    const id = card.dataset.project;
    if (id) openModal(id);
  });
});

// ===== Scroll Animations =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.setProperty('--i', entry.target.dataset.index ?? i);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
  el.dataset.index = i;
  scrollObserver.observe(el);
});

// Section scroll animation
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.animate-section').forEach(section => {
  sectionObserver.observe(section);
});

// ===== Skill Tooltip =====
const skillTooltip = document.getElementById('skill-tooltip');
const categoryLabels = { mobile: 'Mobile', cloud: 'Cloud', devops: 'DevOps', data: 'Data & Backend', 'cross-platform': 'Cross-Platform', languages: 'Languages', integrations: 'Integrations' };

function showSkillTooltip(tag) {
  if (!skillTooltip) return;
  const cat = tag.dataset.category;
  const detail = tag.dataset.detail;
  if (cat && detail) {
    skillTooltip.querySelector('.skill-tooltip-category').textContent = categoryLabels[cat] || cat;
    skillTooltip.querySelector('.skill-tooltip-detail').textContent = detail;
    skillTooltip.classList.add('visible');
    skillTooltip.setAttribute('aria-hidden', 'false');
    const rect = tag.getBoundingClientRect();
    const tooltipWidth = 280;
    const padding = 12;
    let left = rect.left + rect.width / 2;
    left = Math.max(tooltipWidth / 2 + padding, Math.min(window.innerWidth - tooltipWidth / 2 - padding, left));
    skillTooltip.style.left = left + 'px';
    skillTooltip.style.top = rect.top + 'px';
    tag.dataset.tooltipActive = '1';
  }
}

function hideSkillTooltip(tag) {
  if (skillTooltip) {
    skillTooltip.classList.remove('visible');
    skillTooltip.setAttribute('aria-hidden', 'true');
    if (tag) delete tag.dataset.tooltipActive;
  }
}

document.querySelectorAll('.skill-tag').forEach((tag, i) => {
  tag.dataset.index = i;
  tag.setAttribute('role', 'button');
  tag.setAttribute('tabindex', '0');
  tag.addEventListener('mouseenter', () => showSkillTooltip(tag));
  tag.addEventListener('mouseleave', () => hideSkillTooltip(tag));
  function handleSkillTap(e) {
    e.preventDefault();
    if (tag.dataset.tooltipActive === '1') {
      hideSkillTooltip(tag);
    } else {
      document.querySelectorAll('.skill-tag').forEach(t => delete t.dataset.tooltipActive);
      showSkillTooltip(tag);
    }
  }
  // touchend: single-tap on Safari/iOS (click requires double-tap on non-interactive elements)
  tag.addEventListener('touchend', (e) => {
    if (e.target.closest('.skill-tag') === tag) {
      handleSkillTap(e);
      e.preventDefault();
    }
  }, { passive: false });
  // pointerdown: mouse + fallback for touch (Safari may not fire touchend in some cases)
  tag.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') handleSkillTap(e);
  });
  tag.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSkillTap(e); } });
});

// Hide tooltip when tapping outside (click + touchend for Safari)
function hideTooltipIfOutside(e) {
  if (!e.target.closest('.skill-tag') && !e.target.closest('.skill-tooltip')) {
    document.querySelectorAll('.skill-tag').forEach(t => hideSkillTooltip(t));
  }
}
document.addEventListener('click', hideTooltipIfOutside);
document.addEventListener('touchend', hideTooltipIfOutside);

// ===== Floating Section Nav =====
const fabTrigger = document.getElementById('fab-trigger');
const fabMenu = document.getElementById('fab-menu');

if (fabTrigger && fabMenu) {
  fabTrigger.addEventListener('click', () => {
    const isOpen = fabTrigger.getAttribute('aria-expanded') === 'true';
    fabTrigger.setAttribute('aria-expanded', !isOpen);
    fabMenu.setAttribute('aria-hidden', isOpen);
  });

  fabMenu.querySelectorAll('.fab-link').forEach(link => {
    link.addEventListener('click', () => {
      fabTrigger.setAttribute('aria-expanded', 'false');
      fabMenu.setAttribute('aria-hidden', 'true');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.fab-nav')) {
      fabTrigger.setAttribute('aria-expanded', 'false');
      fabMenu.setAttribute('aria-hidden', 'true');
    }
  });
}

// ===== Contact Form Modal =====
const contactModalOverlay = document.getElementById('contact-modal-overlay');
const contactModalClose = document.getElementById('contact-modal-close');
const contactFormTrigger = document.getElementById('contact-form-trigger');

function openContactModal() {
  if (contactModalOverlay) {
    contactModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    contactModalClose?.focus();
  }
}

function closeContactModal() {
  if (contactModalOverlay) {
    contactModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

if (contactFormTrigger) contactFormTrigger.addEventListener('click', openContactModal);
if (contactModalClose) contactModalClose.addEventListener('click', closeContactModal);
if (contactModalOverlay) contactModalOverlay.addEventListener('click', (e) => { if (e.target === contactModalOverlay) closeContactModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && contactModalOverlay?.getAttribute('aria-hidden') === 'false') closeContactModal(); });

// ===== Contact Form =====
const contactForm = document.getElementById('contact-form');
const contactFormSubmit = document.getElementById('contact-form-submit');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nFrom: ${name}\nEmail: ${email}`);
    const mailto = `mailto:jsonjuliane@gmail.com?subject=${subject}&body=${body}`;

    // Show loading state
    if (contactFormSubmit) {
      contactFormSubmit.classList.add('is-loading');
      contactFormSubmit.disabled = true;
    }

    // Open mailto (opens user's default email client)
    window.location.href = mailto;

    // Close modal after a short delay so user sees the loading state
    setTimeout(() => {
      closeContactModal();
      if (contactFormSubmit) {
        contactFormSubmit.classList.remove('is-loading');
        contactFormSubmit.disabled = false;
      }
      form.reset();
    }, 800);
  });
}

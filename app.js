/* ═══════════════════════════════════════════════
   Ahmed Abdullah — Portfolio App
   Profile data embedded directly for file:// compatibility
   ═══════════════════════════════════════════════ */

// ── PROFILE DATA (extracted from profile.json) ──────────────
const PROFILE_DATA = {
  "basics": {
    "name": "Ahmed Abdullah",
    "shortName": "AA",
    "label": "Software Development & AI Architect",
    "headline": "I architect quality systems that give Development teams speed, confidence, and executive-level clarity.",
    "summary": "Software Architect based in Karachi, Pakistan. I lead AI automation strategy across web, mobile, desktop, and API ecosystems, build durable frameworks from the ground up, and help organizations turn quality into a delivery advantage instead of a release bottleneck.",
    "location": {
      "country": "Pakistan",
      "countryCode": "PK",
      "region": "Karachi"
    },
    "email": "2622-4cs-047@agu.edu.pk",
    "availability": "Currently leading quality architecture at GUTECH Incubation Center since August 2026.",
    "leadershipNote": "Trusted by product and engineering leaders to bring structure, visibility, and dependable release confidence to complex delivery environments.",
    "profiles": [
      {
        "network": "LinkedIn",
        "username": "ahmed-abdullah-jan",
        "url": "https://www.linkedin.com/in/ahmed-abdullah-jan/",
        "icon": "fa-brands fa-linkedin-in"
      },
      {
        "network": "GitHub",
        "username": "Ahmed72007",
        "url": "https://github.com/Ahmed72007",
        "icon": "fa-brands fa-github"
      },
      {
        "network": "Stack Overflow",
        "username": "Ahmed Abdullah",
        "url": "https://stackoverflow.com/users/33152283/ahmed-abdullah",
        "icon": "fa-brands fa-stack-overflow"
      },
      {
        "network": "Codeforces",
        "username": "AhmedCodzz",
        "url": "https://codeforces.com/profile/AhmedCodzz",
        "icon": "fas fa-chart-column"
      }
    ]
  },
  "codeforces": {
    "handle": "AhmedCodzz",
    "url": "https://codeforces.com/profile/AhmedCodzz"
  },
  "resume": {
    "file": "/resume/Ahmed-Abdullah-Resume.pdf",
    "downloadName": "Ahmed-Abdullah-Resume.pdf",
    "summary": "Computer Science student at GUTECH with a focus on software architecture, AI automation strategy, and quality engineering. Builds full-stack solutions across web, mobile, desktop, and API ecosystems.",
    "highlights": [
      { "label": "Education", "icon": "fas fa-graduation-cap", "value": "BS Computer Science, GUTECH (Ghazali University School of Technology), Karachi" },
      { "label": "Technology", "icon": "fas fa-code", "value": "Python, C++, Full-Stack Web Development, API Development" },
      { "label": "Focus Areas", "icon": "fas fa-bullseye", "value": "Software Architecture, AI Automation Strategy, Quality Engineering" },
      { "label": "Platforms", "icon": "fas fa-layer-group", "value": "Web, Mobile, Desktop, API Ecosystems" },
      { "label": "Languages", "icon": "fas fa-language", "value": "English, Urdu" }
    ]
  },
  "about": {
    "intro": [
      "My Matric and Intermediate background is in Computer Science, where I learned C++ for my Olevels, C++ for my Intermediate, and I've also learned Python independently."
    ],
    "strengths": [
      "Core programming logic and concepts like OOP"
    ]
  },
  "skills": [
    {
      "category": "Languages",
      "items": [
        "C",
        "Python",
        "C++"
      ]
    }
  ],
  "projects": [
    {
      "name": "MARSWALK",
      "tagline": "Interplanetary survival guide for the first people on Mars",
      "category": "Science & Games",
      "icon": "fas fa-user-astronaut",
      "url": "https://martianmap-marswalk.vercel.app",
      "accent": ["#e2683c", "#2f8f7f"],
      "badge": "NASA Space Apps 2026",
      "summary": "A NASA Space Apps 2026 (Challenge #10) entry: a traverse planner for Jezero Crater built on real NASA and USGS data, paired with a Mars field-operations simulation game.",
      "features": [
        "Six data layers: CTX imagery, 20 m DEM and slope, THEMIS, CRISM and USGS geology",
        "Plans multi-stop science routes that avoid slopes above 15°, with instant re-routing",
        "Visor HUD, 3D astronaut view and an EVA time budget",
        "Companion game: pick a landing site and explore on foot, managing oxygen and battery"
      ],
      "tech": ["JavaScript", "HTML", "CSS", "NASA Mars Trek", "USGS data"]
    },
    {
      "name": "Site Builder",
      "tagline": "No-code website builder with live preview and versioned publishing",
      "category": "Web Apps",
      "icon": "fas fa-pen-ruler",
      "url": "https://websitebuilder-psi-sand.vercel.app",
      "accent": ["#8b5cf6", "#06b6d4"],
      "badge": "Full-stack",
      "summary": "A full-stack website builder: create sites from templates, edit pages section by section, preview on desktop, tablet and mobile, and publish versions you can roll back.",
      "features": [
        "Page and section editor with drag-to-reorder, undo/redo and autosave",
        "Theme engine with presets, fonts and automatic colour-contrast warnings",
        "One-click publishing with version history and restore",
        "Custom domains, team roles and built-in form submissions"
      ],
      "tech": ["JavaScript", "Node.js", "REST API", "Auth"]
    },
    {
      "name": "GUtech Learn",
      "tagline": "Learning portal for GUtech students",
      "category": "Education",
      "icon": "fas fa-graduation-cap",
      "url": "https://gutech-lms-omega.vercel.app",
      "accent": ["#6366f1", "#0ea5e9"],
      "badge": "LMS",
      "summary": "A learning management system for GUtech: one place for courses and study material, designed to work well on phones and laptops.",
      "features": [
        "Course and learning-material portal for students",
        "Light and dark themes that remember your choice",
        "Responsive layout for mobile and desktop",
        "Fast single-page app built with React and Vite"
      ],
      "tech": ["React", "Vite", "JavaScript", "CSS"]
    },
    {
      "name": "Hospital Guide",
      "tagline": "Helps patients and visitors find their way around a hospital",
      "category": "Health",
      "icon": "fas fa-hospital",
      "url": "https://hospitalapp-seven.vercel.app",
      "accent": ["#0f766e", "#14b8a6"],
      "badge": "PWA",
      "summary": "A mobile-friendly hospital navigation app that helps visitors and patients find their way around a hospital. It is a Progressive Web App, so it can be installed on a phone like a native app.",
      "features": [
        "Hospital navigation for patients and visitors",
        "Installable Progressive Web App with its own icon",
        "Mobile-first design that opens full-screen like a native app",
        "Built with React and Vite"
      ],
      "tech": ["React", "Vite", "PWA", "JavaScript"]
    },
    {
      "name": "Al-Shams Youth Circle",
      "tagline": "Faith • Fitness • Fellowship for Muslim youth in Karachi",
      "category": "Community",
      "icon": "fas fa-people-group",
      "url": "https://ayc-steel.vercel.app",
      "accent": ["#059669", "#10b981"],
      "badge": "Next.js",
      "summary": "The website of Al-Shams Youth Circle, a Karachi youth movement built around sports, inspiring talks and community. I serve as Programs Lead.",
      "features": [
        "Upcoming-events carousel with online registration",
        "Activities, core team and testimonials sections",
        "Our Story page",
        "Responsive design with Tailwind CSS and optimised images"
      ],
      "tech": ["Next.js", "React", "Tailwind CSS"]
    }
  ],
  "certificates": [
    {
      "name": "CS50's Introduction to Artificial Intelligence with Python",
      "issuer": "Harvard school",
      "url": "https://certificates.cs50.io/12a7dbe1-3b26-4db2-a28f-7cbf7e58c058.pdf?size=letter"
    },
    {
      "name": "CS50's Introduction to Programming with Python (CS50P)",
      "issuer": "Harvard school",
      "url": "https://certificates.cs50.io/8fd7ae92-1068-4165-85e4-49e7b46be679.pdf?size=letter"
    }
  ],
  "education": [
    {
      "institution": "GUTECH",
      "area": "Computer Science",
      "studyType": "BSCS",
      "startDate": "2026-01-01",
      "endDate": "2030-12-01"
    },
    {
      "institution": "Viceroy's",
      "area": "Computer Science",
      "studyType": "Alevels",
      "startDate": "2024-01-01",
      "endDate": "2026-12-01"
    },
    {
      "institution": "Aces Academy",
      "area": "Computer Science",
      "studyType": "O levels",
      "detailsLabel": "Core Courses",
      "details": [
        "Mathematics",
        "Physics",
        "Computer Science"
      ],
      "startDate": "2022-08-01",
      "endDate": "2024-06-01"
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Fluent"
    },
    {
      "language": "Urdu",
      "fluency": "Native"
    }
  ]
};


// ── APP INITIALIZATION ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initialize particle canvas
    initParticles();

    // Initialize navigation
    initNavigation();

    // Use embedded data directly — works with file:// protocol
    const data = PROFILE_DATA;

    renderHero(data.basics);
    renderAbout(data.about, data.basics);
    renderSkills(data.skills);
    renderProjects(data.projects);
    renderCodeforces(data.codeforces);
    renderEducation(data.education);
    renderCertificates(data.certificates);
    renderLanguages(data.languages);
    renderResume(data.resume);
    renderContact(data.basics);
    renderFooterSocials(data.basics);

    // Initialize scroll animations after content is rendered
    initScrollReveal();
    initScrollTop();
});


/* ═══════════════════════════════════════════════
   PARTICLE SYSTEM
   ═══════════════════════════════════════════════ */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.02 + 0.005;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.pulse += this.pulseSpeed;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            const currentOpacity = this.opacity * (0.6 + Math.sin(this.pulse) * 0.4);
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139, 92, 246, ${currentOpacity})`;
            ctx.fill();
        }
    }

    // Create particles based on screen size
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    const opacity = (1 - dist / 150) * 0.12;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }

    animate();
}


/* ═══════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════ */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('mobile-nav-overlay');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNav();
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');
        overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('mobile-open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on overlay click
    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('mobile-open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinkElements = document.querySelectorAll('.nav-links a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinkElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-nav') === current) {
            link.classList.add('active');
        }
    });
}


/* ═══════════════════════════════════════════════
   TYPEWRITER EFFECT
   ═══════════════════════════════════════════════ */
function typeWriter(element, text, speed = 35) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}


/* ═══════════════════════════════════════════════
   RENDER: HERO
   ═══════════════════════════════════════════════ */
function renderHero(basics) {
    const heroContent = document.getElementById('hero-content');
    if (!basics) return;

    const githubUrl = basics.profiles?.find(p => p.network === 'GitHub')?.url || '#';

    heroContent.innerHTML = `
        <div class="hero-status">
            <span class="status-dot"></span>
            ${basics.availability || basics.label}
        </div>
        <p class="hero-greeting">// Hello, I'm</p>
        <h1 class="hero-title">
            <span class="name-gradient">${basics.name}</span>
        </h1>
        <p class="hero-label">${basics.label}<span class="typewriter-cursor"></span></p>
        <p class="hero-headline" id="hero-headline-text"></p>
        <div class="hero-cta">
            <a href="#contact" class="btn btn-primary" id="hero-cta-contact">
                <i class="fas fa-paper-plane"></i> Get in Touch
            </a>
            <a href="${githubUrl}" target="_blank" rel="noopener" class="btn btn-ghost" id="hero-cta-github">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="#resume" class="btn btn-ghost" id="hero-cta-resume">
                <i class="fas fa-file-arrow-down"></i> Resume
            </a>
        </div>
    `;

    // Trigger typewriter for headline
    const headlineEl = document.getElementById('hero-headline-text');
    setTimeout(() => {
        typeWriter(headlineEl, basics.headline, 25);
    }, 800);
}


/* ═══════════════════════════════════════════════
   RENDER: ABOUT
   ═══════════════════════════════════════════════ */
function renderAbout(about, basics) {
    const aboutContent = document.getElementById('about-content');
    if (!about || !basics) return;

    aboutContent.innerHTML = `
        <div class="glass-card about-main-card">
            <div class="about-card-icon">
                <i class="fas fa-terminal"></i>
            </div>
            <div class="about-card-title">Who I Am</div>
            <p class="about-card-text">${basics.summary}</p>
        </div>
        <div class="glass-card">
            <div class="about-card-icon">
                <i class="fas fa-book-open"></i>
            </div>
            <div class="about-card-title">Background</div>
            <p class="about-card-text">${about.intro.join(' ')}</p>
            ${about.strengths && about.strengths.length > 0 ? `
                <div style="margin-top: 1rem;">
                    <span style="font-size: 0.82rem; font-weight: 600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 1px;">Key Strengths</span>
                    <ul style="list-style: none; margin-top: 0.5rem;">
                        ${about.strengths.map(s => `
                            <li style="color: var(--text-secondary); font-size: 0.9rem; padding: 0.3rem 0;">
                                <i class="fas fa-check" style="color: var(--accent-primary); margin-right: 0.5rem; font-size: 0.75rem;"></i>${s}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
        <div class="glass-card">
            <div class="about-card-icon">
                <i class="fas fa-crown"></i>
            </div>
            <div class="about-card-title">Leadership</div>
            <p class="about-card-text">${basics.leadershipNote}</p>
        </div>
    `;

    aboutContent.classList.add('stagger-in');
}


/* ═══════════════════════════════════════════════
   RENDER: SKILLS
   ═══════════════════════════════════════════════ */
function renderSkills(skills) {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skills || !Array.isArray(skills)) return;

    // Map category names to icons
    const categoryIcons = {
        'Languages': 'fa-code',
        'Frameworks': 'fa-layer-group',
        'Tools': 'fa-wrench',
        'Databases': 'fa-database',
        'Testing': 'fa-vial',
        'DevOps': 'fa-server',
        'Cloud': 'fa-cloud',
        'Mobile': 'fa-mobile-alt',
        'default': 'fa-microchip'
    };

    // Map skill names to Font Awesome icons
    const skillIcons = {
        'C': 'fas fa-copyright',
        'C++': 'fas fa-plus-circle',
        'Python': 'fa-brands fa-python',
        'JavaScript': 'fa-brands fa-js',
        'TypeScript': 'fas fa-code',
        'Java': 'fa-brands fa-java',
        'HTML': 'fa-brands fa-html5',
        'CSS': 'fa-brands fa-css3-alt',
        'React': 'fa-brands fa-react',
        'Node.js': 'fa-brands fa-node-js',
        'Git': 'fa-brands fa-git-alt',
        'Docker': 'fa-brands fa-docker',
        'AWS': 'fa-brands fa-aws',
        'Linux': 'fa-brands fa-linux'
    };

    skillsGrid.innerHTML = skills.map(skillGroup => {
        const icon = categoryIcons[skillGroup.category] || categoryIcons['default'];
        return `
            <div class="glass-card skill-category">
                <div class="skill-category-header">
                    <div class="skill-category-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                    <h3 class="skill-category-name">${skillGroup.category}</h3>
                </div>
                <div class="skill-tags">
                    ${skillGroup.items.map(item => {
                        const sIcon = skillIcons[item] || 'fas fa-chevron-right';
                        return `<span class="skill-tag"><i class="${sIcon}" style="font-size:0.85rem;"></i> ${item}</span>`;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    skillsGrid.classList.add('stagger-in');
}


/* ═══════════════════════════════════════════════
   RENDER: PROJECTS
   ═══════════════════════════════════════════════ */
const escapeHtml = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Live screenshot of the deployed site (WordPress mShots, free, no key). If it
// fails to load, the card falls back to a gradient cover with the project icon.
const projectShot = (url, w = 1200) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${Math.round(w * 0.625)}`;
const projectHost = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

function projectCover(p, w) {
    const [a, b] = p.accent || ['#8b5cf6', '#06b6d4'];
    return `
        <div class="project-cover" style="--pa:${a};--pb:${b}">
            <div class="project-cover-fallback" aria-hidden="true"><i class="${escapeHtml(p.icon)}"></i></div>
            <img data-shot="${projectShot(p.url, w)}" alt="Screenshot of ${escapeHtml(p.name)}" loading="lazy" decoding="async">
        </div>`;
}

// mShots returns a small "generating" placeholder the first time a page is
// requested, so retry a few times before settling on the gradient fallback.
function wireShots(root) {
    root.querySelectorAll('img[data-shot]').forEach(img => {
        let tries = 0;
        img.addEventListener('load', () => {
            if (img.naturalWidth >= 500) return img.classList.add('loaded');
            if (++tries > 4) return img.remove();
            setTimeout(() => { img.src = `${img.dataset.shot}&r=${tries}`; }, 2500 * tries);
        });
        img.addEventListener('error', () => img.remove());
        img.src = img.dataset.shot;
    });
}

function renderProjects(projects) {
    const section = document.getElementById('projects');
    const grid = document.getElementById('projects-grid');
    const filtersEl = document.getElementById('project-filters');
    const searchEl = document.getElementById('project-search');
    const emptyEl = document.getElementById('projects-empty');
    const modal = document.getElementById('project-modal');
    const modalInner = document.getElementById('pm-inner');

    if (!projects || !projects.length) {
        if (section) section.style.display = 'none';
        return;
    }

    // ── Cards ──
    grid.innerHTML = projects.map((p, i) => `
        <article class="project-card" data-index="${i}" data-category="${escapeHtml(p.category)}"
                 data-search="${escapeHtml([p.name, p.tagline, p.category, p.summary, ...(p.tech || [])].join(' ').toLowerCase())}">
            <button class="project-open" data-open="${i}" aria-label="Show details for ${escapeHtml(p.name)}">
                ${projectCover(p, 800)}
                <span class="project-live"><span class="live-dot"></span> Live</span>
                <span class="project-view"><i class="fas fa-expand"></i> Details</span>
            </button>
            <div class="project-body">
                <div class="project-meta">
                    <span class="project-category"><i class="${escapeHtml(p.icon)}"></i> ${escapeHtml(p.category)}</span>
                    ${p.badge ? `<span class="project-badge">${escapeHtml(p.badge)}</span>` : ''}
                </div>
                <h3 class="project-name">${escapeHtml(p.name)}</h3>
                <p class="project-tagline">${escapeHtml(p.tagline)}</p>
                <div class="project-tech">${(p.tech || []).map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
                <div class="project-actions">
                    <a class="project-btn primary" href="${escapeHtml(p.url)}" target="_blank" rel="noopener">
                        <i class="fas fa-arrow-up-right-from-square"></i> Visit site
                    </a>
                    <button class="project-btn" data-open="${i}"><i class="fas fa-circle-info"></i> Details</button>
                </div>
            </div>
        </article>
    `).join('');
    grid.classList.add('stagger-in');
    wireShots(grid);

    // ── Filters + search ──
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    let activeCat = 'All';
    filtersEl.innerHTML = categories.map(c => {
        const count = c === 'All' ? projects.length : projects.filter(p => p.category === c).length;
        return `<button class="project-filter${c === 'All' ? ' active' : ''}" data-cat="${escapeHtml(c)}" aria-pressed="${c === 'All'}">
            ${escapeHtml(c)} <span>${count}</span></button>`;
    }).join('');

    const applyFilters = () => {
        const q = searchEl.value.trim().toLowerCase();
        let shown = 0;
        grid.querySelectorAll('.project-card').forEach(card => {
            const ok = (activeCat === 'All' || card.dataset.category === activeCat) && (!q || card.dataset.search.includes(q));
            card.classList.toggle('is-hidden', !ok);
            if (ok) shown++;
        });
        emptyEl.hidden = shown > 0;
    };

    filtersEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.project-filter');
        if (!btn) return;
        activeCat = btn.dataset.cat;
        filtersEl.querySelectorAll('.project-filter').forEach(b => {
            const on = b === btn;
            b.classList.toggle('active', on);
            b.setAttribute('aria-pressed', on);
        });
        applyFilters();
    });
    searchEl.addEventListener('input', applyFilters);

    // ── Tilt + cursor spotlight (pointer devices only) ──
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (canHover && !reduceMotion) {
        grid.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('pointermove', (e) => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width;
                const y = (e.clientY - r.top) / r.height;
                card.style.setProperty('--mx', `${x * 100}%`);
                card.style.setProperty('--my', `${y * 100}%`);
                card.style.setProperty('--rx', `${(0.5 - y) * 6}deg`);
                card.style.setProperty('--ry', `${(x - 0.5) * 6}deg`);
            });
            card.addEventListener('pointerleave', () => {
                card.style.setProperty('--rx', '0deg');
                card.style.setProperty('--ry', '0deg');
            });
        });
    }

    // ── Details dialog ──
    let current = 0;
    const openProject = (i) => {
        current = (i + projects.length) % projects.length;
        const p = projects[current];
        modalInner.innerHTML = `
            <button class="pm-close" data-close aria-label="Close"><i class="fas fa-xmark"></i></button>
            <div class="pm-media" id="pm-media">
                ${projectCover(p, 1200)}
            </div>
            <div class="pm-content">
                <div class="project-meta">
                    <span class="project-category"><i class="${escapeHtml(p.icon)}"></i> ${escapeHtml(p.category)}</span>
                    ${p.badge ? `<span class="project-badge">${escapeHtml(p.badge)}</span>` : ''}
                    <span class="project-live inline"><span class="live-dot"></span> Live</span>
                </div>
                <h3 class="pm-title" id="pm-title">${escapeHtml(p.name)}</h3>
                <p class="pm-summary">${escapeHtml(p.summary)}</p>
                <h4 class="pm-sub">Highlights</h4>
                <ul class="pm-features">${(p.features || []).map(f => `<li><i class="fas fa-check"></i> ${escapeHtml(f)}</li>`).join('')}</ul>
                <h4 class="pm-sub">Built with</h4>
                <div class="project-tech">${(p.tech || []).map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
                <div class="pm-actions">
                    <a class="btn btn-primary" href="${escapeHtml(p.url)}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> Open live site</a>
                    <button class="btn btn-ghost" data-preview><i class="fas fa-desktop"></i> Live preview</button>
                </div>
                <a class="pm-link" href="${escapeHtml(p.url)}" target="_blank" rel="noopener"><i class="fas fa-link"></i> ${escapeHtml(projectHost(p.url))}</a>
                <div class="pm-nav">
                    <button data-step="-1" aria-label="Previous project"><i class="fas fa-arrow-left"></i> Prev</button>
                    <span>${current + 1} / ${projects.length}</span>
                    <button data-step="1" aria-label="Next project">Next <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>`;
        wireShots(modalInner);
        if (!modal.open) {
            modal.showModal();
            document.body.style.overflow = 'hidden';
        }
        modalInner.scrollTop = 0;
    };

    const showPreview = () => {
        const p = projects[current];
        const media = document.getElementById('pm-media');
        media.classList.add('is-preview');
        media.innerHTML = `
            <div class="pm-browser">
                <span class="dots"><i></i><i></i><i></i></span>
                <span class="addr">${escapeHtml(projectHost(p.url))}</span>
            </div>
            <iframe src="${escapeHtml(p.url)}" title="Live preview of ${escapeHtml(p.name)}" loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>`;
        const btn = modalInner.querySelector('[data-preview]');
        if (btn) btn.remove();
    };

    grid.addEventListener('click', (e) => {
        const opener = e.target.closest('[data-open]');
        if (opener) openProject(Number(opener.dataset.open));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('[data-close]')) return modal.close();
        const step = e.target.closest('[data-step]');
        if (step) return openProject(current + Number(step.dataset.step));
        if (e.target.closest('[data-preview]')) showPreview();
    });
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') openProject(current + 1);
        else if (e.key === 'ArrowLeft') openProject(current - 1);
    });
    modal.addEventListener('close', () => {
        document.body.style.overflow = '';
        modalInner.innerHTML = '';
    });
}


/* ═══════════════════════════════════════════════
   RENDER: CODEFORCES (live from the public API)
   ═══════════════════════════════════════════════ */
const CF_BANDS = [
    [-Infinity, 1200, 'newbie', '#9ca3af'],
    [1200, 1400, 'pupil', '#4ade80'],
    [1400, 1600, 'specialist', '#2dd4bf'],
    [1600, 1900, 'expert', '#60a5fa'],
    [1900, 2100, 'candidate master', '#c084fc'],
    [2100, 2300, 'master', '#fb923c'],
    [2300, 2400, 'international master', '#fb923c'],
    [2400, 2600, 'grandmaster', '#f87171'],
    [2600, 3000, 'international grandmaster', '#f87171'],
    [3000, Infinity, 'legendary grandmaster', '#ef4444'],
];
const cfColor = (rating) => rating == null ? '#94a3b8' : CF_BANDS.find(([lo, hi]) => rating >= lo && rating < hi)[3];
const cfDate = (sec) => new Date(sec * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
const CF_CACHE_MS = 30 * 60 * 1000;

async function cfApi(method, params) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    try {
        const res = await fetch(`https://codeforces.com/api/${method}?${new URLSearchParams(params)}`, { signal: ctrl.signal });
        const json = await res.json();
        if (json.status !== 'OK') throw new Error(json.comment || 'Codeforces API error');
        return json.result;
    } finally {
        clearTimeout(timer);
    }
}

// Reduce the raw API responses to the few numbers the section shows.
function cfSummarize(info, rating, status) {
    const solved = new Map();
    let accepted = 0;
    for (const s of status || []) {
        if (s.verdict !== 'OK') continue;
        accepted++;
        const p = s.problem;
        const key = `${p.contestId ?? p.problemsetName}-${p.index}`;
        if (!solved.has(key)) solved.set(key, { ...p, time: s.creationTimeSeconds });
    }
    const tags = {};
    const levels = {};
    for (const p of solved.values()) {
        (p.tags || []).forEach(t => { tags[t] = (tags[t] || 0) + 1; });
        const lvl = p.rating ? (p.rating < 1000 ? '800–900' : `${Math.floor(p.rating / 100) * 100}`) : 'Unrated';
        levels[lvl] = (levels[lvl] || 0) + 1;
    }
    const recent = [...solved.values()].sort((a, b) => b.time - a.time).slice(0, 6).map(p => ({
        name: p.name, index: p.index, rating: p.rating, contestId: p.contestId, time: p.time,
    }));
    return {
        info: {
            handle: info.handle, rating: info.rating, maxRating: info.maxRating, rank: info.rank, maxRank: info.maxRank,
            avatar: info.titlePhoto, registered: info.registrationTimeSeconds, contribution: info.contribution,
            friends: info.friendOfCount, organization: info.organization,
        },
        contests: (rating || []).map(r => ({
            name: r.contestName, id: r.contestId, rank: r.rank, oldRating: r.oldRating, newRating: r.newRating, time: r.ratingUpdateTimeSeconds,
        })),
        solvedCount: solved.size,
        submissions: (status || []).length,
        accepted,
        tags: Object.entries(tags).sort((a, b) => b[1] - a[1]).slice(0, 8),
        levels: Object.entries(levels).sort((a, b) => (parseInt(a[0]) || 9999) - (parseInt(b[0]) || 9999)),
        recent,
    };
}

async function loadCodeforces(handle) {
    const key = `cf-stats:${handle}`;
    try {
        const cached = JSON.parse(localStorage.getItem(key) || 'null');
        if (cached && Date.now() - cached.at < CF_CACHE_MS) return cached.data;
    } catch { /* storage unavailable */ }

    const [info, rating, status] = await Promise.allSettled([
        cfApi('user.info', { handles: handle }),
        cfApi('user.rating', { handle }),
        cfApi('user.status', { handle, from: 1, count: 10000 }),
    ]);
    if (info.status !== 'fulfilled') throw info.reason;
    const data = cfSummarize(
        info.value[0],
        rating.status === 'fulfilled' ? rating.value : [],
        status.status === 'fulfilled' ? status.value : [],
    );
    try { localStorage.setItem(key, JSON.stringify({ at: Date.now(), data })); } catch { /* ignore */ }
    return data;
}

function cfChart(contests) {
    if (!contests.length) {
        return `<div class="cf-chart-empty"><i class="fas fa-flag-checkered"></i><p>No rated contests yet. The rating graph appears after the first rated contest.</p></div>`;
    }
    const W = 720, H = 280, L = 46, R = 14, T = 14, B = 30;
    const ratings = contests.flatMap(c => [c.oldRating, c.newRating]);
    let lo = Math.floor((Math.min(...ratings) - 100) / 100) * 100;
    let hi = Math.ceil((Math.max(...ratings) + 100) / 100) * 100;
    if (hi - lo < 400) { const mid = (hi + lo) / 2; lo = Math.floor((mid - 200) / 100) * 100; hi = lo + 400; }
    const t0 = contests[0].time, t1 = contests[contests.length - 1].time;
    const x = (t) => contests.length === 1 ? (L + W - R) / 2 : L + ((t - t0) / (t1 - t0)) * (W - L - R);
    const y = (r) => T + (1 - (r - lo) / (hi - lo)) * (H - T - B);

    const bands = CF_BANDS.filter(([a, b]) => b > lo && a < hi).map(([a, b, , color]) => {
        const top = y(Math.min(b, hi)), bot = y(Math.max(a, lo));
        return `<rect x="${L}" y="${top}" width="${W - L - R}" height="${bot - top}" fill="${color}" opacity="0.09"/>`;
    }).join('');
    const step = (hi - lo) > 1200 ? 400 : (hi - lo) > 600 ? 200 : 100;
    let grid = '';
    for (let v = Math.ceil(lo / step) * step; v <= hi; v += step) {
        grid += `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" class="cf-grid"/><text x="${L - 8}" y="${y(v) + 4}" class="cf-axis" text-anchor="end">${v}</text>`;
    }
    const pts = contests.map(c => [x(c.time), y(c.newRating)]);
    const path = pts.map(([px, py], i) => `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`).join(' ');
    const area = `${path} L${pts[pts.length - 1][0].toFixed(1)},${H - B} L${pts[0][0].toFixed(1)},${H - B} Z`;
    const first = new Date(t0 * 1000).getFullYear(), last = new Date(t1 * 1000).getFullYear();

    return `
        <div class="cf-chart" id="cf-chart">
            <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Codeforces rating over ${contests.length} contests">
                <defs>
                    <linearGradient id="cf-area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.35"/>
                        <stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/>
                    </linearGradient>
                </defs>
                ${bands}${grid}
                <path d="${area}" fill="url(#cf-area)"/>
                <path d="${path}" class="cf-line"/>
                ${pts.map(([px, py], i) => `<circle cx="${px}" cy="${py}" r="4.5" class="cf-dot" data-i="${i}" fill="${cfColor(contests[i].newRating)}"/>`).join('')}
                <line class="cf-cursor" id="cf-cursor" x1="0" x2="0" y1="${T}" y2="${H - B}"/>
                <text x="${L}" y="${H - 8}" class="cf-axis">${first}</text>
                <text x="${W - R}" y="${H - 8}" class="cf-axis" text-anchor="end">${last}</text>
            </svg>
            <div class="cf-tip" id="cf-tip" hidden></div>
        </div>`;
}

function wireCfChart(contests) {
    const wrap = document.getElementById('cf-chart');
    if (!wrap) return;
    const svg = wrap.querySelector('svg');
    const tip = document.getElementById('cf-tip');
    const cursor = document.getElementById('cf-cursor');
    const dots = [...svg.querySelectorAll('.cf-dot')];
    const show = (i) => {
        const c = contests[i];
        const d = c.newRating - c.oldRating;
        const dot = dots[i];
        dots.forEach((el, k) => el.classList.toggle('active', k === i));
        const cx = +dot.getAttribute('cx'), cy = +dot.getAttribute('cy');
        cursor.setAttribute('x1', cx); cursor.setAttribute('x2', cx); cursor.classList.add('on');
        tip.innerHTML = `
            <strong>${escapeHtml(c.name)}</strong>
            <span>${cfDate(c.time)} · Rank #${c.rank.toLocaleString()}</span>
            <span class="cf-tip-rating" style="color:${cfColor(c.newRating)}">${c.newRating}
                <em class="${d >= 0 ? 'up' : 'down'}">${d >= 0 ? '+' : ''}${d}</em></span>`;
        tip.hidden = false;
        const box = svg.getBoundingClientRect();
        const scale = box.width / svg.viewBox.baseVal.width;
        const left = Math.min(Math.max(cx * scale, 90), box.width - 90);
        tip.style.left = `${left}px`;
        tip.style.top = `${cy * scale}px`;
    };
    const hide = () => { tip.hidden = true; cursor.classList.remove('on'); dots.forEach(el => el.classList.remove('active')); };
    svg.addEventListener('pointermove', (e) => {
        const box = svg.getBoundingClientRect();
        const vx = (e.clientX - box.left) / box.width * svg.viewBox.baseVal.width;
        let best = 0;
        dots.forEach((el, i) => { if (Math.abs(+el.getAttribute('cx') - vx) < Math.abs(+dots[best].getAttribute('cx') - vx)) best = i; });
        show(best);
    });
    svg.addEventListener('pointerleave', hide);
    show(contests.length - 1);
}

function renderCodeforces(cf) {
    const section = document.getElementById('codeforces');
    const root = document.getElementById('cf-content');
    if (!cf || !cf.handle) {
        if (section) section.style.display = 'none';
        return;
    }
    const profileUrl = cf.url || `https://codeforces.com/profile/${encodeURIComponent(cf.handle)}`;

    root.innerHTML = `
        <div class="glass-card cf-loading">
            <div class="cf-skel avatar"></div>
            <div class="cf-skel-lines"><div class="cf-skel"></div><div class="cf-skel short"></div></div>
            <span class="cf-loading-text"><i class="fas fa-circle-notch fa-spin"></i> Loading live stats…</span>
        </div>`;

    const fallback = () => {
        root.innerHTML = `
            <div class="glass-card cf-fallback">
                <div class="cf-fallback-icon"><i class="fas fa-chart-column"></i></div>
                <div>
                    <h3>@${escapeHtml(cf.handle)}</h3>
                    <p>Live stats couldn't load right now. See my contests, rating and solved problems on Codeforces.</p>
                </div>
                <a class="btn btn-primary" href="${escapeHtml(profileUrl)}" target="_blank" rel="noopener">
                    <i class="fas fa-arrow-up-right-from-square"></i> View profile
                </a>
            </div>`;
    };

    // Fetch only when the section is about to scroll into view.
    const start = () => loadCodeforces(cf.handle).then(d => paint(d)).catch(fallback);
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            if (entries.some(e => e.isIntersecting)) { io.disconnect(); start(); }
        }, { rootMargin: '400px 0px' });
        io.observe(section);
    } else {
        start();
    }

    function paint(d) {
        const i = d.info;
        const color = cfColor(i.rating);
        const rankName = i.rank || 'unrated';
        const tagMax = d.tags[0]?.[1] || 1;
        const levelMax = Math.max(1, ...d.levels.map(l => l[1]));
        const lastContest = d.contests[d.contests.length - 1];
        const lastDelta = lastContest ? lastContest.newRating - lastContest.oldRating : null;

        root.innerHTML = `
            <div class="glass-card cf-profile" style="--rank:${color}">
                <div class="cf-avatar">
                    ${i.avatar ? `<img src="${escapeHtml(i.avatar)}" alt="" loading="lazy" onerror="this.remove()">` : ''}
                    <i class="fas fa-user" aria-hidden="true"></i>
                </div>
                <div class="cf-id">
                    <span class="cf-rank">${escapeHtml(rankName)}</span>
                    <h3 class="cf-handle">${escapeHtml(i.handle)}</h3>
                    <p class="cf-meta">
                        ${i.registered ? `<span><i class="fas fa-calendar"></i> Member since ${new Date(i.registered * 1000).getFullYear()}</span>` : ''}
                        ${i.organization ? `<span><i class="fas fa-building"></i> ${escapeHtml(i.organization)}</span>` : ''}
                    </p>
                </div>
                <a class="btn btn-primary cf-visit" href="${escapeHtml(profileUrl)}" target="_blank" rel="noopener">
                    <i class="fas fa-arrow-up-right-from-square"></i> View on Codeforces
                </a>
            </div>

            <div class="cf-stats stagger-in">
                <div class="glass-card cf-stat">
                    <span class="cf-stat-label">Rating</span>
                    <span class="cf-stat-value" style="color:${color}" data-count="${i.rating ?? ''}">${i.rating ?? '—'}</span>
                    <span class="cf-stat-sub">${lastDelta == null ? 'Unrated' : `<em class="${lastDelta >= 0 ? 'up' : 'down'}">${lastDelta >= 0 ? '▲ +' : '▼ '}${lastDelta}</em> last contest`}</span>
                </div>
                <div class="glass-card cf-stat">
                    <span class="cf-stat-label">Max rating</span>
                    <span class="cf-stat-value" style="color:${cfColor(i.maxRating)}" data-count="${i.maxRating ?? ''}">${i.maxRating ?? '—'}</span>
                    <span class="cf-stat-sub cap">${escapeHtml(i.maxRank || '—')}</span>
                </div>
                <div class="glass-card cf-stat">
                    <span class="cf-stat-label">Contests</span>
                    <span class="cf-stat-value" data-count="${d.contests.length}">${d.contests.length}</span>
                    <span class="cf-stat-sub">rated rounds</span>
                </div>
                <div class="glass-card cf-stat">
                    <span class="cf-stat-label">Problems solved</span>
                    <span class="cf-stat-value" data-count="${d.solvedCount}">${d.solvedCount}</span>
                    <span class="cf-stat-sub">${d.accepted} accepted of ${d.submissions} submissions</span>
                </div>
            </div>

            <div class="cf-grid-2">
                <div class="glass-card cf-panel cf-panel-chart">
                    <div class="cf-panel-head"><h4><i class="fas fa-chart-line"></i> Rating history</h4><span>hover the graph</span></div>
                    ${cfChart(d.contests)}
                </div>
                <div class="glass-card cf-panel">
                    <div class="cf-panel-head">
                        <h4><i class="fas fa-tags"></i> Solved by</h4>
                        <div class="cf-toggle" role="group" aria-label="Group solved problems by">
                            <button class="active" data-view="tags" aria-pressed="true">Topic</button>
                            <button data-view="levels" aria-pressed="false">Difficulty</button>
                        </div>
                    </div>
                    <div class="cf-bars" data-panel="tags">
                        ${d.tags.length ? d.tags.map(([t, n]) => `
                            <div class="cf-bar"><span class="cf-bar-label">${escapeHtml(t)}</span>
                                <span class="cf-bar-track"><span class="cf-bar-fill" style="--w:${(n / tagMax) * 100}%"></span></span>
                                <span class="cf-bar-n">${n}</span></div>`).join('') : '<p class="cf-none">No solved problems yet.</p>'}
                    </div>
                    <div class="cf-bars" data-panel="levels" hidden>
                        ${d.levels.length ? d.levels.map(([l, n]) => `
                            <div class="cf-bar"><span class="cf-bar-label">${escapeHtml(l)}</span>
                                <span class="cf-bar-track"><span class="cf-bar-fill" style="--w:${(n / levelMax) * 100}%;--c:${cfColor(parseInt(l) || null)}"></span></span>
                                <span class="cf-bar-n">${n}</span></div>`).join('') : '<p class="cf-none">No solved problems yet.</p>'}
                    </div>
                </div>
            </div>

            ${d.recent.length ? `
            <div class="glass-card cf-panel">
                <div class="cf-panel-head"><h4><i class="fas fa-bolt"></i> Recently solved</h4></div>
                <ul class="cf-recent">
                    ${d.recent.map(p => `
                        <li><a href="https://codeforces.com/problemset/problem/${p.contestId}/${encodeURIComponent(p.index)}" target="_blank" rel="noopener">
                            <span class="cf-pid">${p.contestId ?? ''}${escapeHtml(p.index)}</span>
                            <span class="cf-pname">${escapeHtml(p.name)}</span>
                            ${p.rating ? `<span class="cf-prating" style="color:${cfColor(p.rating)}">${p.rating}</span>` : ''}
                            <i class="fas fa-arrow-up-right-from-square"></i>
                        </a></li>`).join('')}
                </ul>
            </div>` : ''}
        `;

        wireCfChart(d.contests);

        // Topic / difficulty toggle.
        const toggle = root.querySelector('.cf-toggle');
        toggle?.addEventListener('click', (e) => {
            const b = e.target.closest('button');
            if (!b) return;
            toggle.querySelectorAll('button').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', x === b); });
            root.querySelectorAll('.cf-bars').forEach(p => { p.hidden = p.dataset.panel !== b.dataset.view; });
        });

        // Count-up numbers and grow bars.
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        root.querySelectorAll('[data-count]').forEach(el => {
            const end = parseInt(el.dataset.count, 10);
            if (!Number.isFinite(end) || reduce) return;
            const t0 = performance.now();
            const tick = (now) => {
                const k = Math.min(1, (now - t0) / 900);
                el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
                if (k < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
        requestAnimationFrame(() => {
            root.classList.add('cf-ready');
            root.querySelector('.cf-stats')?.classList.add('active');
        });
    }
}


/* ═══════════════════════════════════════════════
   RENDER: RESUME
   ═══════════════════════════════════════════════ */
function renderResume(resume) {
    const section = document.getElementById('resume');
    const root = document.getElementById('resume-content');
    if (!resume || !resume.file) {
        if (section) section.style.display = 'none';
        return;
    }
    root.innerHTML = `
        <div class="glass-card resume-card">
            <div class="resume-doc" aria-hidden="true">
                <div class="resume-doc-page">
                    <span class="l w60"></span><span class="l w40 accent"></span>
                    <span class="l w90 gap"></span><span class="l w80"></span><span class="l w85"></span>
                    <span class="l w30 accent gap"></span><span class="l w75"></span><span class="l w65"></span>
                    <span class="l w30 accent gap"></span><span class="l w80"></span><span class="l w70"></span>
                </div>
                <span class="resume-doc-badge"><i class="fas fa-file-pdf"></i> PDF</span>
            </div>
            <div class="resume-info">
                <p class="resume-summary">${escapeHtml(resume.summary)}</p>
                <ul class="resume-highlights">
                    ${(resume.highlights || []).map(h => `
                        <li><span class="resume-hl-icon"><i class="${escapeHtml(h.icon)}"></i></span>
                            <span><strong>${escapeHtml(h.label)}</strong>${escapeHtml(h.value)}</span></li>`).join('')}
                </ul>
                <div class="resume-actions">
                    <a class="btn btn-primary" href="${escapeHtml(resume.file)}" download="${escapeHtml(resume.downloadName || 'resume.pdf')}">
                        <i class="fas fa-file-arrow-down"></i> Download resume
                    </a>
                    <a class="btn btn-ghost" href="${escapeHtml(resume.file)}" target="_blank" rel="noopener">
                        <i class="fas fa-up-right-from-square"></i> Open in new tab
                    </a>
                    <button class="btn btn-ghost" id="resume-preview-btn" aria-expanded="false" aria-controls="resume-preview">
                        <i class="fas fa-eye"></i> <span>Preview</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="resume-preview" id="resume-preview" hidden></div>`;

    const btn = document.getElementById('resume-preview-btn');
    const preview = document.getElementById('resume-preview');
    btn.addEventListener('click', () => {
        const open = preview.hidden;
        if (open && !preview.firstChild) {
            preview.innerHTML = `
                <iframe src="${escapeHtml(resume.file)}#view=FitH" title="Resume preview"></iframe>
                <p class="resume-preview-note">Preview not showing? <a href="${escapeHtml(resume.file)}" target="_blank" rel="noopener">Open the PDF</a> instead.</p>`;
        }
        preview.hidden = !open;
        btn.setAttribute('aria-expanded', open);
        btn.querySelector('span').textContent = open ? 'Hide preview' : 'Preview';
        if (open) preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}


/* ═══════════════════════════════════════════════
   RENDER: EDUCATION
   ═══════════════════════════════════════════════ */
function renderEducation(education) {
    const timeline = document.getElementById('education-timeline');
    if (!education || !Array.isArray(education)) return;

    const sorted = [...education].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    timeline.innerHTML = sorted.map((edu, index) => `
        <div class="timeline-item" style="animation-delay: ${index * 0.15}s">
            <div class="timeline-dot"></div>
            <div class="glass-card timeline-card">
                <div class="timeline-date">
                    <i class="far fa-calendar-alt"></i>
                    ${formatDate(edu.startDate)} — ${edu.endDate ? formatDate(edu.endDate) : 'Present'}
                </div>
                <h3 class="timeline-degree">${edu.studyType} in ${edu.area}</h3>
                <div class="timeline-institution">
                    <i class="fas fa-university"></i> ${edu.institution}
                </div>
                ${edu.details && edu.details.length > 0 ? `
                    <div class="timeline-details-label">${edu.detailsLabel || 'Highlights'}</div>
                    <ul class="timeline-details">
                        ${edu.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        </div>
    `).join('');
}


/* ═══════════════════════════════════════════════
   RENDER: CERTIFICATES
   ═══════════════════════════════════════════════ */
function renderCertificates(certificates) {
    const certGrid = document.getElementById('certificates-grid');
    const certSection = document.getElementById('certificates');

    if (!certificates || !Array.isArray(certificates) || certificates.length === 0) {
        if (certSection) certSection.style.display = 'none';
        return;
    }

    certGrid.innerHTML = certificates.map(cert => `
        <div class="glass-card cert-card">
            <div>
                <div class="cert-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <h3 class="cert-name">${cert.name}</h3>
                <div class="cert-issuer">
                    <i class="fas fa-building"></i> ${cert.issuer}
                </div>
            </div>
            <a href="${cert.url}" target="_blank" rel="noopener" class="cert-link">
                View Certificate <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `).join('');

    certGrid.classList.add('stagger-in');
}


/* ═══════════════════════════════════════════════
   RENDER: LANGUAGES
   ═══════════════════════════════════════════════ */
function renderLanguages(languages) {
    const langGrid = document.getElementById('languages-grid');
    const langSection = document.getElementById('languages');

    if (!languages || !Array.isArray(languages) || languages.length === 0) {
        if (langSection) langSection.style.display = 'none';
        return;
    }

    const fluencyMap = {
        'Native': 100,
        'Fluent': 85,
        'Advanced': 70,
        'Intermediate': 55,
        'Beginner': 30,
        'Basic': 20
    };

    const flagIcons = {
        'English': '🇬🇧',
        'Urdu': '🇵🇰',
        'Arabic': '🇸🇦',
        'French': '🇫🇷',
        'Spanish': '🇪🇸',
        'German': '🇩🇪',
        'Chinese': '🇨🇳',
        'Hindi': '🇮🇳',
        'Japanese': '🇯🇵'
    };

    langGrid.innerHTML = languages.map(lang => {
        const fluencyPercent = fluencyMap[lang.fluency] || 50;
        const flag = flagIcons[lang.language] || '🌐';
        return `
            <div class="glass-card language-card">
                <div class="language-icon">${flag}</div>
                <h3 class="language-name">${lang.language}</h3>
                <span class="language-fluency">${lang.fluency}</span>
                <div class="fluency-bar">
                    <div class="fluency-fill" data-width="${fluencyPercent}%" style="width: 0"></div>
                </div>
            </div>
        `;
    }).join('');

    langGrid.classList.add('stagger-in');

    // Animate fluency bars when they become visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.fluency-fill');
                fills.forEach((fill, i) => {
                    setTimeout(() => {
                        fill.style.width = fill.dataset.width;
                        fill.classList.add('animated');
                    }, i * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(langGrid);
}


/* ═══════════════════════════════════════════════
   RENDER: CONTACT
   ═══════════════════════════════════════════════ */
function renderContact(basics) {
    const contactContent = document.getElementById('contact-content');
    if (!basics) return;

    contactContent.innerHTML = `
        <p class="contact-text">
            I'm always open to discussing new opportunities, collaborations,
            or just having a great conversation about technology and software architecture.
            Don't hesitate to reach out!
        </p>
        <div class="contact-email-btn">
            <a href="mailto:${basics.email}" class="btn btn-primary" id="contact-email-btn">
                <i class="fas fa-envelope"></i> ${basics.email}
            </a>
        </div>
        <div class="contact-details">
            <div class="contact-detail-item">
                <i class="fas fa-map-marker-alt"></i>
                ${basics.location.region}, ${basics.location.country}
            </div>
            <div class="contact-detail-item">
                <i class="fas fa-briefcase"></i>
                ${basics.label}
            </div>
        </div>
        <div class="social-links" id="social-links">
            ${basics.profiles.map(profile => `
                <a href="${profile.url}" target="_blank" rel="noopener" class="social-link" title="${profile.network}">
                    <i class="${profile.icon}"></i>
                </a>
            `).join('')}
        </div>
    `;
}


/* ═══════════════════════════════════════════════
   RENDER: FOOTER SOCIALS
   ═══════════════════════════════════════════════ */
function renderFooterSocials(basics) {
    const footerSocials = document.getElementById('footer-socials');
    if (!basics || !basics.profiles) return;

    footerSocials.innerHTML = basics.profiles.map(profile => `
        <a href="${profile.url}" target="_blank" rel="noopener" class="footer-social-icon" title="${profile.network}">
            <i class="${profile.icon}"></i>
        </a>
    `).join('');
}


/* ═══════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════ */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}


/* ═══════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════ */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Also trigger stagger animations within the section
                const staggerElements = entry.target.querySelectorAll('.stagger-in');
                staggerElements.forEach(el => el.classList.add('active'));
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}


/* ═══════════════════════════════════════════════
   SCROLL TO TOP
   ═══════════════════════════════════════════════ */
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

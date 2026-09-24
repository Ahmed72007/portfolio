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
      }
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
    renderEducation(data.education);
    renderCertificates(data.certificates);
    renderLanguages(data.languages);
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

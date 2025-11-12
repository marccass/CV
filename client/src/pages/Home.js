import { translations } from '../lib/translations.js';

export function createHomePage(language) {
  const t = translations[language];
  
  const skills = {
    languages: ['C++', 'Python', 'Java', 'SQL'],
    tools: ['Git', 'Android Studio', 'OpenCV', 'MySQL', 'Linux'],
    web: ['HTML5', 'CSS3', 'JavaScript'],
  };

  const projects = [
    {
      title: t.project1Title,
      description: t.project1Desc,
      image: '/project-cv.jpg',
      technologies: ['Python', 'OpenCV', 'Machine Learning'],
      github: 'https://github.com/marccass',
    },
    {
      title: t.project2Title,
      description: t.project2Desc,
      image: '/project-android.png',
      technologies: ['Java', 'Android Studio', 'SQLite'],
      github: 'https://github.com/marccass',
    },
    {
      title: t.project3Title,
      description: t.project3Desc,
      image: '/project-db.webp',
      technologies: ['MySQL', 'SQL', 'Database Design'],
      github: 'https://github.com/marccass',
    },
    {
      title: t.project4Title,
      description: t.project4Desc,
      image: '/project-cpp.png',
      technologies: ['C++', 'Algorithms', 'Data Structures'],
      github: 'https://github.com/marccass',
    },
  ];

  return `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <!-- Floating particles -->
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center space-y-6">
            <h1 class="text-5xl md:text-7xl font-bold text-gradient animate-fade-in-up">
              ${t.heroTitle}
            </h1>
            <h2 class="text-xl md:text-2xl text-muted-foreground animate-fade-in-up animate-delay-100">
              ${t.heroSubtitle}
            </h2>
            <p class="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              ${t.heroDesc}
            </p>
            <div class="flex flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-300">
              <a href="#projects" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                ${t.heroBtnProjects}
              </a>
              <button id="download-cv-btn" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                ${t.heroBtnCV}
              </button>
              <a href="#contact" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                ${t.heroBtnContact}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="section-padding">
        <div class="container">
          <h2 class="text-4xl font-bold text-center mb-12 animate-on-scroll">
            ${t.aboutTitle}
          </h2>
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="animate-on-scroll">
              <img
                src="/profile-photo.jpg"
                alt="Marc Cassanmagnago Somoza"
                class="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                loading="lazy"
              />
            </div>
            <div class="space-y-6 animate-on-scroll">
              <p class="text-lg text-foreground/80">
                ${t.aboutDesc}
              </p>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <svg class="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                  <p class="text-foreground/80">${t.aboutLang}</p>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p class="text-foreground/80">${t.aboutMobility}</p>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                  </svg>
                  <p class="text-foreground/80">${t.aboutInterests}</p>
                </div>
              </div>
              <div class="flex gap-4 pt-4">
                <a href="https://www.linkedin.com/in/marc-cassanmagnago-5b7773294/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                  <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/marccass" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                  <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="section-padding bg-muted/30">
        <div class="container">
          <h2 class="text-4xl font-bold text-center mb-12 animate-on-scroll">
            ${t.educationTitle}
          </h2>
          <div class="max-w-3xl mx-auto animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="p-6">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-primary/10 rounded-lg">
                  <svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-semibold mb-2">${t.edu1Title}</h3>
                  <p class="text-sm text-muted-foreground">
                    ${t.edu1Institution} • ${t.edu1Period}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0 space-y-4">
              <p class="text-foreground/80">${t.edu1Desc}</p>
              <div>
                <h4 class="font-semibold mb-3">${t.edu1SubjectsTitle}</h4>
                <div class="grid sm:grid-cols-2 gap-2">
                  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-start py-2">
                    ${t.edu1Subject1}
                  </span>
                  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-start py-2">
                    ${t.edu1Subject2}
                  </span>
                  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-start py-2">
                    ${t.edu1Subject3}
                  </span>
                  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-start py-2">
                    ${t.edu1Subject4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="section-padding">
        <div class="container">
          <h2 class="text-4xl font-bold text-center mb-4 animate-on-scroll">
            ${t.skillsTitle}
          </h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-on-scroll">
            ${t.skillsDesc}
          </p>
          <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="p-6">
                <div class="flex items-center gap-3 mb-4">
                  <svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <h3 class="text-xl font-semibold">${t.skillsCatLang}</h3>
                </div>
              </div>
              <div class="p-6 pt-0">
                <div class="flex flex-wrap gap-2">
                  ${skills.languages.map(skill => `
                    <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      ${skill}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <div class="animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="p-6">
                <div class="flex items-center gap-3 mb-4">
                  <svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                  <h3 class="text-xl font-semibold">${t.skillsCatTools}</h3>
                </div>
              </div>
              <div class="p-6 pt-0">
                <div class="flex flex-wrap gap-2">
                  ${skills.tools.map(skill => `
                    <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      ${skill}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <div class="animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="p-6">
                <div class="flex items-center gap-3 mb-4">
                  <svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <h3 class="text-xl font-semibold">${t.skillsCatWeb}</h3>
                </div>
              </div>
              <div class="p-6 pt-0">
                <div class="flex flex-wrap gap-2">
                  ${skills.web.map(skill => `
                    <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      ${skill}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="section-padding bg-muted/30">
        <div class="container">
          <h2 class="text-4xl font-bold text-center mb-12 animate-on-scroll">
            ${t.projectsTitle}
          </h2>
          <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            ${projects.map((project, index) => `
              <div class="animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-xl transition-shadow">
                <div class="aspect-video overflow-hidden bg-muted">
                  <img
                    src="${project.image}"
                    alt="${project.title}"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                  <p class="text-sm text-muted-foreground mb-4">${project.description}</p>
                </div>
                <div class="p-6 pt-0 space-y-4">
                  <div class="flex flex-wrap gap-2">
                    ${project.technologies.map(tech => `
                      <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                        ${tech}
                      </span>
                    `).join('')}
                  </div>
                  <div class="flex gap-3">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4">
                      <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      ${t.btnViewCode}
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="section-padding">
        <div class="container">
          <h2 class="text-4xl font-bold text-center mb-12 animate-on-scroll">
            ${t.experienceTitle}
          </h2>
          <div class="max-w-3xl mx-auto animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="p-6">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-primary/10 rounded-lg">
                  <svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-semibold mb-2">${t.exp1Title}</h3>
                  <p class="text-sm text-muted-foreground">
                    ${t.exp1Company} • ${t.exp1Period}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0">
              <p class="text-foreground/80">${t.exp1Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section-padding bg-muted/30">
        <div class="container">
          <h2 class="text-4xl font-bold text-center mb-4 animate-on-scroll">
            ${t.contactTitle}
          </h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-on-scroll">
            ${t.contactDesc}
          </p>
          <div class="max-w-2xl mx-auto animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="p-6">
              <form id="contact-form" class="space-y-6">
                <div>
                  <input
                    name="name"
                    placeholder="${t.contactName}"
                    required
                    class="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="${t.contactEmail}"
                    required
                    class="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="${t.contactMessage}"
                    required
                    rows="6"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  ></textarea>
                </div>
                <button type="submit" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full">
                  <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  ${t.contactSend}
                </button>
              </form>
              <div class="mt-8 pt-8 border-t border-border text-center">
                <p class="text-sm text-muted-foreground mb-4">
                  ${t.contactDirectly}
                </p>
                <a
                  href="mailto:marccaso04@gmail.com"
                  class="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  marccaso04@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8 border-t border-border">
        <div class="container">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-muted-foreground">
              © 2025 Marc Cassanmagnago Somoza. ${t.footerRights}
            </p>
            <div class="flex gap-4">
              <a
                href="https://github.com/marccass"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/marc-cassanmagnago-5b7773294/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:marccaso04@gmail.com"
                class="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `;
}

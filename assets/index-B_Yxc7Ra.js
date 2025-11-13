(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const p={ca:{navAbout:"Sobre Mi",navEducation:"Educació",navSkills:"Habilitats",navProjects:"Projectes",navExperience:"Experiència",navContact:"Contacte",heroTitle:"Marc Cassanmagnago Somoza",heroSubtitle:"Estudiant d'Enginyeria Informàtica | Desenvolupador de Programari en formació",heroDesc:"Hola, sóc en Marc. Un estudiant d'Enginyeria Informàtica a la Universitat de Girona apassionat pel desenvolupament de programari, la programació i els sistemes. Busco activament noves experiències per guanyar experiència pràctica i seguir creixent dins del sector tecnològic.",heroBtnProjects:"Veure Projectes",heroBtnCV:"Descarregar CV",heroBtnContact:"Contacta'm",aboutTitle:"Sobre Mi",aboutDesc:"El meu objectiu principal és submergir-me en un entorn professional real que em permeti aplicar els coneixements del meu Grau en Enginyeria Informàtica i descobrir quines àrees del món tech m'agraden més.",aboutLang:"<strong>Idiomes:</strong> Sóc parlant natiu de català i espanyol. A més, tinc un nivell d'anglès molt alt i fluid (parlat i escrit), adquirit en part gràcies a una estada de dos anys als Estats Units. També tinc un nivell bàsic d'italià.",aboutMobility:"<strong>Mobilitat:</strong> Disposo de carnet de conduir tipus B i A2, i vehicle particular, la qual cosa em dóna total autonomia per desplaçar-me.",aboutInterests:"<strong>Interessos:</strong> Fora de la tecnologia, m'interessa el gimnàs i viatjar a l'estranger.",educationTitle:"Educació",edu1Title:"Grau en Enginyeria Informàtica",edu1Institution:"Universitat de Girona (UdG)",edu1Period:"2021 - Actualitat",edu1Desc:"Formació integral en desenvolupament de programari, sistemes informàtics i tecnologies emergents. Especialització en visió per computador, bases de dades i desenvolupament d'aplicacions.",edu1SubjectsTitle:"Assignatures destacades:",edu1Subject1:"Visió per Computador",edu1Subject2:"Bases de Dades",edu1Subject3:"Desenvolupament d'Aplicacions Mòbils",edu1Subject4:"Programació Avançada",skillsTitle:"Habilitats Tècniques",skillsDesc:"Aquestes són algunes de les tecnologies amb les quals he treballat durant la meva formació i projectes:",skillsCatLang:"Llenguatges de Programació",skillsCatTools:"Eines i Tecnologies",skillsCatWeb:"Desenvolupament Web",projectsTitle:"Projectes Destacats",project1Title:"Sistema de Visió per Computador",project1Desc:"Aplicació desenvolupada en Python utilitzant OpenCV per a la detecció i seguiment d'objectes en temps real. Implementa algoritmes de processament d'imatge i aprenentatge automàtic.",project2Title:"Aplicació Mòbil Android",project2Desc:"App nativa desenvolupada amb Android Studio i Java. Inclou integració amb bases de dades locals SQLite i sincronització amb servidors remots.",project3Title:"Sistema de Gestió de Bases de Dades",project3Desc:"Projecte acadèmic que implementa un sistema complet de gestió amb MySQL. Inclou disseny de l'esquema, consultes complexes i optimització de rendiment.",project4Title:"Algoritmes en C++",project4Desc:"Col·lecció d'implementacions d'algoritmes i estructures de dades en C++. Inclou algoritmes de cerca, ordenació i manipulació de grafs.",btnViewCode:"Veure Codi",experienceTitle:"Experiència",exp1Title:"Estudiant en Pràctiques",exp1Company:"En cerca d'oportunitats",exp1Period:"2025",exp1Desc:"Actualment busco oportunitats de pràctiques o col·laboracions per aplicar els meus coneixements en entorns professionals reals i continuar desenvolupant les meves habilitats tècniques.",contactTitle:"Contacte",contactDesc:"Estic obert a noves oportunitats i col·laboracions. No dubtis en contactar-me!",contactName:"Nom",contactEmail:"Correu Electrònic",contactMessage:"Missatge",contactSend:"Enviar Missatge",contactSuccess:"Missatge enviat correctament!",contactError:"Error en enviar el missatge. Si us plau, intenta-ho de nou.",contactDirectly:"O contacta'm directament:",footerRights:"Tots els drets reservats."},es:{navAbout:"Sobre Mí",navEducation:"Educación",navSkills:"Habilidades",navProjects:"Proyectos",navExperience:"Experiencia",navContact:"Contacto",heroTitle:"Marc Cassanmagnago Somoza",heroSubtitle:"Estudiante de Ingeniería Informática | Desarrollador de Software en formación",heroDesc:"Hola, soy Marc. Un estudiante de Ingeniería Informática en la Universidad de Girona apasionado por el desarrollo de software, la programación y los sistemas. Busco activamente nuevas experiencias para ganar experiencia práctica y seguir creciendo dentro del sector tecnológico.",heroBtnProjects:"Ver Proyectos",heroBtnCV:"Descargar CV",heroBtnContact:"Contáctame",aboutTitle:"Sobre Mí",aboutDesc:"Mi objetivo principal es sumergirme en un entorno profesional real que me permita aplicar los conocimientos de mi Grado en Ingeniería Informática y descubrir qué áreas del mundo tech me gustan más.",aboutLang:"<strong>Idiomas:</strong> Soy hablante nativo de catalán y español. Además, tengo un nivel de inglés muy alto y fluido (hablado y escrito), adquirido en parte gracias a una estancia de dos años en Estados Unidos. También tengo un nivel básico de italiano.",aboutMobility:"<strong>Movilidad:</strong> Dispongo de carnet de conducir tipo B y A2, y vehículo particular, lo que me da total autonomía para desplazarme.",aboutInterests:"<strong>Intereses:</strong> Fuera de la tecnología, me interesa el gimnasio y viajar al extranjero.",educationTitle:"Educación",edu1Title:"Grado en Ingeniería Informática",edu1Institution:"Universidad de Girona (UdG)",edu1Period:"2021 - Actualidad",edu1Desc:"Formación integral en desarrollo de software, sistemas informáticos y tecnologías emergentes. Especialización en visión por computador, bases de datos y desarrollo de aplicaciones.",edu1SubjectsTitle:"Asignaturas destacadas:",edu1Subject1:"Visión por Computador",edu1Subject2:"Bases de Datos",edu1Subject3:"Desarrollo de Aplicaciones Móviles",edu1Subject4:"Programación Avanzada",skillsTitle:"Habilidades Técnicas",skillsDesc:"Estas son algunas de las tecnologías con las que he trabajado durante mi formación y proyectos:",skillsCatLang:"Lenguajes de Programación",skillsCatTools:"Herramientas y Tecnologías",skillsCatWeb:"Desarrollo Web",projectsTitle:"Proyectos Destacados",project1Title:"Sistema de Visión por Computador",project1Desc:"Aplicación desarrollada en Python utilizando OpenCV para la detección y seguimiento de objetos en tiempo real. Implementa algoritmos de procesamiento de imagen y aprendizaje automático.",project2Title:"Aplicación Móvil Android",project2Desc:"App nativa desarrollada con Android Studio y Java. Incluye integración con bases de datos locales SQLite y sincronización con servidores remotos.",project3Title:"Sistema de Gestión de Bases de Datos",project3Desc:"Proyecto académico que implementa un sistema completo de gestión con MySQL. Incluye diseño del esquema, consultas complejas y optimización de rendimiento.",project4Title:"Algoritmos en C++",project4Desc:"Colección de implementaciones de algoritmos y estructuras de datos en C++. Incluye algoritmos de búsqueda, ordenación y manipulación de grafos.",btnViewCode:"Ver Código",experienceTitle:"Experiencia",exp1Title:"Estudiante en Prácticas",exp1Company:"En busca de oportunidades",exp1Period:"2025",exp1Desc:"Actualmente busco oportunidades de prácticas o colaboraciones para aplicar mis conocimientos en entornos profesionales reales y continuar desarrollando mis habilidades técnicas.",contactTitle:"Contacto",contactDesc:"Estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!",contactName:"Nombre",contactEmail:"Correo Electrónico",contactMessage:"Mensaje",contactSend:"Enviar Mensaje",contactSuccess:"¡Mensaje enviado correctamente!",contactError:"Error al enviar el mensaje. Por favor, inténtalo de nuevo.",contactDirectly:"O contáctame directamente:",footerRights:"Todos los derechos reservados."},en:{navAbout:"About",navEducation:"Education",navSkills:"Skills",navProjects:"Projects",navExperience:"Experience",navContact:"Contact",heroTitle:"Marc Cassanmagnago Somoza",heroSubtitle:"Computer Engineering Student | Software Developer in Training",heroDesc:"Hi, I'm Marc. A Computer Engineering student at the University of Girona passionate about software development, programming, and systems. I'm actively seeking new experiences to gain practical experience and continue growing within the tech sector.",heroBtnProjects:"View Projects",heroBtnCV:"Download CV",heroBtnContact:"Contact Me",aboutTitle:"About Me",aboutDesc:"My main goal is to immerse myself in a real professional environment that allows me to apply the knowledge from my Computer Engineering Degree and discover which areas of the tech world I enjoy the most.",aboutLang:"<strong>Languages:</strong> I am a native speaker of Catalan and Spanish. Additionally, I have a very high and fluent level of English (spoken and written), acquired in part thanks to a two-year stay in the United States. I also have a basic level of Italian.",aboutMobility:"<strong>Mobility:</strong> I have a type B and A2 driver's license, and my own vehicle, which gives me total autonomy to travel.",aboutInterests:"<strong>Interests:</strong> Outside of technology, I am interested in the gym and traveling abroad.",educationTitle:"Education",edu1Title:"Bachelor's Degree in Computer Engineering",edu1Institution:"University of Girona (UdG)",edu1Period:"2021 - Present",edu1Desc:"Comprehensive training in software development, computer systems, and emerging technologies. Specialization in computer vision, databases, and application development.",edu1SubjectsTitle:"Featured subjects:",edu1Subject1:"Computer Vision",edu1Subject2:"Databases",edu1Subject3:"Mobile Application Development",edu1Subject4:"Advanced Programming",skillsTitle:"Technical Skills",skillsDesc:"These are some of the technologies I have worked with during my training and projects:",skillsCatLang:"Programming Languages",skillsCatTools:"Tools and Technologies",skillsCatWeb:"Web Development",projectsTitle:"Featured Projects",project1Title:"Computer Vision System",project1Desc:"Application developed in Python using OpenCV for real-time object detection and tracking. Implements image processing and machine learning algorithms.",project2Title:"Android Mobile Application",project2Desc:"Native app developed with Android Studio and Java. Includes integration with local SQLite databases and synchronization with remote servers.",project3Title:"Database Management System",project3Desc:"Academic project that implements a complete management system with MySQL. Includes schema design, complex queries, and performance optimization.",project4Title:"Algorithms in C++",project4Desc:"Collection of algorithm and data structure implementations in C++. Includes search, sorting, and graph manipulation algorithms.",btnViewCode:"View Code",experienceTitle:"Experience",exp1Title:"Intern Student",exp1Company:"Seeking opportunities",exp1Period:"2025",exp1Desc:"Currently seeking internship opportunities or collaborations to apply my knowledge in real professional environments and continue developing my technical skills.",contactTitle:"Contact",contactDesc:"I'm open to new opportunities and collaborations. Don't hesitate to contact me!",contactName:"Name",contactEmail:"Email",contactMessage:"Message",contactSend:"Send Message",contactSuccess:"Message sent successfully!",contactError:"Error sending message. Please try again.",contactDirectly:"Or contact me directly:",footerRights:"All rights reserved."}};function k(){const t=document.createElement("nav");t.id="main-nav",t.className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5",t.innerHTML=`
    <div class="container">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="#hero"
          class="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          Marc C. Somoza
        </a>

        <!-- Desktop Navigation -->
        <div id="desktop-nav" class="hidden lg:flex items-center gap-8">
          <!-- Nav links will be inserted here -->
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-3">
          <!-- Theme Toggle -->
          <button
            id="theme-toggle"
            class="inline-flex items-center justify-center rounded-full w-10 h-10 hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Toggle theme"
          >
            <svg id="sun-icon" class="h-5 w-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg id="moon-icon" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          <!-- Language Switcher -->
          <div class="hidden sm:flex items-center gap-1 bg-muted/50 rounded-full p-1">
            <button data-lang="ca" class="lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-foreground">CA</button>
            <button data-lang="es" class="lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-foreground">ES</button>
            <button data-lang="en" class="lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-foreground">EN</button>
          </div>

          <!-- Mobile Menu Toggle -->
          <button
            id="mobile-menu-toggle"
            class="lg:hidden inline-flex items-center justify-center rounded-full w-10 h-10 hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg id="menu-icon" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg id="close-icon" class="h-5 w-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;const e=document.createElement("div");return e.id="mobile-menu",e.className="fixed inset-0 z-40 lg:hidden hidden",e.innerHTML=`
    <div class="absolute inset-0 bg-background/80 backdrop-blur-md" id="mobile-menu-overlay"></div>
    <div class="absolute top-20 left-0 right-0 glass-effect m-4 rounded-2xl p-6 space-y-4">
      <div id="mobile-nav-links"></div>
      
      <!-- Mobile Language Switcher -->
      <div class="flex sm:hidden items-center gap-2 pt-4 border-t border-border">
        <button data-lang="ca" class="mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-muted/50 text-muted-foreground hover:text-foreground">CA</button>
        <button data-lang="es" class="mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-muted/50 text-muted-foreground hover:text-foreground">ES</button>
        <button data-lang="en" class="mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-muted/50 text-muted-foreground hover:text-foreground">EN</button>
      </div>
    </div>
  `,{nav:t,mobileMenu:e}}function E(t,e,o){const{nav:s,mobileMenu:n}=k();document.body.prepend(n),document.body.prepend(s);let a=!1;function l(){const i=p[t],r=[{href:"#about",label:i.navAbout},{href:"#education",label:i.navEducation},{href:"#skills",label:i.navSkills},{href:"#projects",label:i.navProjects},{href:"#experience",label:i.navExperience},{href:"#contact",label:i.navContact}],m=document.getElementById("desktop-nav");m.innerHTML=r.map(c=>`
      <a
        href="${c.href}"
        class="nav-link text-foreground/80 hover:text-foreground transition-colors font-medium"
      >
        ${c.label}
      </a>
    `).join("");const C=document.getElementById("mobile-nav-links");C.innerHTML=r.map(c=>`
      <a
        href="${c.href}"
        class="mobile-nav-link block text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
      >
        ${c.label}
      </a>
    `).join(""),document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(c=>{c.addEventListener("click",j=>{j.preventDefault();const S=c.getAttribute("href"),v=document.querySelector(S);v&&(v.scrollIntoView({behavior:"smooth"}),a&&u())})})}function f(){document.querySelectorAll(".lang-btn, .mobile-lang-btn").forEach(i=>{i.getAttribute("data-lang")===t?i.className=i.classList.contains("mobile-lang-btn")?"mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-primary text-primary-foreground":"lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all bg-primary text-primary-foreground":i.className=i.classList.contains("mobile-lang-btn")?"mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-muted/50 text-muted-foreground hover:text-foreground":"lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-foreground"})}function u(){a=!a;const i=document.getElementById("mobile-menu"),r=document.getElementById("menu-icon"),m=document.getElementById("close-icon");a?(i.classList.remove("hidden"),r.classList.add("hidden"),m.classList.remove("hidden")):(i.classList.add("hidden"),r.classList.remove("hidden"),m.classList.add("hidden"))}function w(){const i=document.getElementById("main-nav");window.scrollY>50?i.className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-effect shadow-lg py-3":i.className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5"}return document.getElementById("mobile-menu-toggle").addEventListener("click",u),document.getElementById("mobile-menu-overlay").addEventListener("click",u),document.getElementById("theme-toggle").addEventListener("click",()=>{o();const i=document.getElementById("sun-icon"),r=document.getElementById("moon-icon");i.classList.toggle("hidden"),r.classList.toggle("hidden")}),document.querySelectorAll(".lang-btn, .mobile-lang-btn").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-lang");t=r,e(r),l(),f(),a&&u()})}),window.addEventListener("scroll",w),l(),f(),{updateLanguage:i=>{t=i,l(),f()}}}function M(){const t=document.createElement("button");return t.id="scroll-to-top",t.className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg glass-effect hover:scale-110 transition-transform w-12 h-12 items-center justify-center hidden",t.setAttribute("aria-label","Scroll to top"),t.innerHTML=`
    <svg class="h-5 w-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  `,t}function T(){const t=M();document.body.appendChild(t);let e=!1;function o(){window.scrollY>500?e||(t.classList.remove("hidden"),t.classList.add("flex"),e=!0):e&&(t.classList.add("hidden"),t.classList.remove("flex"),e=!1)}function s(){window.scrollTo({top:0,behavior:"smooth"})}return t.addEventListener("click",s),window.addEventListener("scroll",o),t}function L(t){const e=p[t],o={languages:["C++","Python","Java","SQL"],tools:["Git","Android Studio","OpenCV","MySQL","Linux"],web:["HTML5","CSS3","JavaScript"]},s=[{title:e.project1Title,description:e.project1Desc,image:"/project-cv.jpg",technologies:["Python","OpenCV","Machine Learning"],github:"https://github.com/marccass"},{title:e.project2Title,description:e.project2Desc,image:"/project-android.png",technologies:["Java","Android Studio","SQLite"],github:"https://github.com/marccass"},{title:e.project3Title,description:e.project3Desc,image:"/project-db.webp",technologies:["MySQL","SQL","Database Design"],github:"https://github.com/marccass"},{title:e.project4Title,description:e.project4Desc,image:"/project-cpp.png",technologies:["C++","Algorithms","Data Structures"],github:"https://github.com/marccass"}];return`
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
              ${e.heroTitle}
            </h1>
            <h2 class="text-xl md:text-2xl text-muted-foreground animate-fade-in-up animate-delay-100">
              ${e.heroSubtitle}
            </h2>
            <p class="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              ${e.heroDesc}
            </p>
            <div class="flex flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-300">
              <a href="#projects" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                ${e.heroBtnProjects}
              </a>
              <button id="download-cv-btn" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                ${e.heroBtnCV}
              </button>
              <a href="#contact" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                ${e.heroBtnContact}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="section-padding">
        <div class="container">
          <h2 class="text-4xl font-bold text-center mb-12 animate-on-scroll">
            ${e.aboutTitle}
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
                ${e.aboutDesc}
              </p>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <svg class="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                  <p class="text-foreground/80">${e.aboutLang}</p>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p class="text-foreground/80">${e.aboutMobility}</p>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                  </svg>
                  <p class="text-foreground/80">${e.aboutInterests}</p>
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
            ${e.educationTitle}
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
                  <h3 class="text-2xl font-semibold mb-2">${e.edu1Title}</h3>
                  <p class="text-sm text-muted-foreground">
                    ${e.edu1Institution} • ${e.edu1Period}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0 space-y-4">
              <p class="text-foreground/80">${e.edu1Desc}</p>
              <div>
                <h4 class="font-semibold mb-3">${e.edu1SubjectsTitle}</h4>
                <div class="grid sm:grid-cols-2 gap-2">
                  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-start py-2">
                    ${e.edu1Subject1}
                  </span>
                  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-start py-2">
                    ${e.edu1Subject2}
                  </span>
                  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-start py-2">
                    ${e.edu1Subject3}
                  </span>
                  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-start py-2">
                    ${e.edu1Subject4}
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
            ${e.skillsTitle}
          </h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-on-scroll">
            ${e.skillsDesc}
          </p>
          <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="p-6">
                <div class="flex items-center gap-3 mb-4">
                  <svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <h3 class="text-xl font-semibold">${e.skillsCatLang}</h3>
                </div>
              </div>
              <div class="p-6 pt-0">
                <div class="flex flex-wrap gap-2">
                  ${o.languages.map(n=>`
                    <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      ${n}
                    </span>
                  `).join("")}
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
                  <h3 class="text-xl font-semibold">${e.skillsCatTools}</h3>
                </div>
              </div>
              <div class="p-6 pt-0">
                <div class="flex flex-wrap gap-2">
                  ${o.tools.map(n=>`
                    <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      ${n}
                    </span>
                  `).join("")}
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
                  <h3 class="text-xl font-semibold">${e.skillsCatWeb}</h3>
                </div>
              </div>
              <div class="p-6 pt-0">
                <div class="flex flex-wrap gap-2">
                  ${o.web.map(n=>`
                    <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      ${n}
                    </span>
                  `).join("")}
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
            ${e.projectsTitle}
          </h2>
          <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            ${s.map((n,a)=>`
              <div class="animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-xl transition-shadow">
                <div class="aspect-video overflow-hidden bg-muted">
                  <img
                    src="${n.image}"
                    alt="${n.title}"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">${n.title}</h3>
                  <p class="text-sm text-muted-foreground mb-4">${n.description}</p>
                </div>
                <div class="p-6 pt-0 space-y-4">
                  <div class="flex flex-wrap gap-2">
                    ${n.technologies.map(l=>`
                      <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                        ${l}
                      </span>
                    `).join("")}
                  </div>
                  <div class="flex gap-3">
                    <a href="${n.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4">
                      <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      ${e.btnViewCode}
                    </a>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="section-padding">
        <div class="container">
          <h2 class="text-4xl font-bold text-center mb-12 animate-on-scroll">
            ${e.experienceTitle}
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
                  <h3 class="text-2xl font-semibold mb-2">${e.exp1Title}</h3>
                  <p class="text-sm text-muted-foreground">
                    ${e.exp1Company} • ${e.exp1Period}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0">
              <p class="text-foreground/80">${e.exp1Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section-padding bg-muted/30">
        <div class="container">
          <h2 class="text-4xl font-bold text-center mb-4 animate-on-scroll">
            ${e.contactTitle}
          </h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-on-scroll">
            ${e.contactDesc}
          </p>
          <div class="max-w-2xl mx-auto animate-on-scroll rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="p-6">
              <form id="contact-form" class="space-y-6">
                <div>
                  <input
                    name="name"
                    placeholder="${e.contactName}"
                    required
                    class="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="${e.contactEmail}"
                    required
                    class="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="${e.contactMessage}"
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
                  ${e.contactSend}
                </button>
              </form>
              <div class="mt-8 pt-8 border-t border-border text-center">
                <p class="text-sm text-muted-foreground mb-4">
                  ${e.contactDirectly}
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
              © 2025 Marc Cassanmagnago Somoza. ${e.footerRights}
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
  `}let d=localStorage.getItem("language")||"ca",g=localStorage.getItem("theme")||"dark";function h(){g==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function D(){g=g==="dark"?"light":"dark",localStorage.setItem("theme",g),h()}function y(){const t=document.getElementById("root");t.innerHTML=L(d),A(),$(),P()}function I(t){d=t,localStorage.setItem("language",d),y()}function A(){const t=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting&&(s.target.classList.add("animate-fade-in-up"),t.unobserve(s.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".animate-on-scroll").forEach(o=>t.observe(o)),B()}function B(){document.querySelectorAll("img").forEach(e=>{e.complete?e.classList.add("loaded"):e.addEventListener("load",()=>{e.classList.add("loaded")})})}function $(){const t=document.getElementById("contact-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(t),s=o.get("name"),n=o.get("email"),a=o.get("message");s&&n&&a?(b(p[d].contactSuccess,"success"),t.reset()):b(p[d].contactError,"error")})}function P(){const t=document.getElementById("download-cv-btn");t&&t.addEventListener("click",()=>{const e={ca:"/MarcCassanmagnagoSomozaCV2025CATALA.pdf",es:"/MarcCassanmagnagoSomozaCV2025ESPANOL.pdf",en:"/MarcCassanmagnagoSomozaCV2025ENGLISH.pdf"},o=document.createElement("a");o.href=e[d],o.download=e[d].split("/").pop()||"CV.pdf",document.body.appendChild(o),o.click(),document.body.removeChild(o)})}function b(t,e="info"){const o=document.createElement("div");o.className=`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${e==="success"?"bg-primary text-primary-foreground":"bg-destructive text-destructive-foreground"}`,o.textContent=t,o.style.opacity="0",o.style.transform="translate(-50%, 20px)",document.body.appendChild(o),setTimeout(()=>{o.style.opacity="1",o.style.transform="translate(-50%, 0)"},10),setTimeout(()=>{o.style.opacity="0",o.style.transform="translate(-50%, 20px)",setTimeout(()=>{document.body.removeChild(o)},300)},3e3)}function z(){h(),E(d,I,D),T(),y()}function x(){document.documentElement.classList.remove("no-js"),document.getElementById("root").classList.remove("hidden"),z()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x();

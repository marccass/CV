# Portfoli Personal - Marc Cassanmagnago Somoza ✨

Aquesta és la pàgina web del meu portfoli personal, dissenyada per mostrar les meves habilitats, projectes i experiència com a estudiant d'Enginyeria Informàtica a la Universitat de Girona.

**Visita la web en directe:** [Enllaç a la teva web desplegada - ex: el-teu-usuari.github.io/portfoli/] (Reemplaça amb el teu enllaç real quan el despleguis)

## 🚀 Característiques Principals

* **Multillenguatge:** Suport complet per a Català (CA), Espanyol (ES) i Anglès (EN), amb persistència via `localStorage`.
* **Canviador de Tema:** Mode Clar (Dia) ☀️ i Mode Fosc (Nit) 🌙, amb persistència via `localStorage`.
* **Disseny Responsive:** Totalment adaptable a dispositius mòbils, tauletes i escriptoris, incloent un menú d'hamburguesa funcional.
* **Animacions Modernes:**
    * Efectes d'entrada suaus en fer scroll (`IntersectionObserver`).
    * Efecte 3D interactiu a les targetes de projectes al passar el ratolí.
    * Capçalera amb efecte "vidre borrós" (blur) que canvia en fer scroll.
    * Micro-interaccions als botons i elements d'habilitats.
* **Interactivitat:** Desenvolupat amb Vanilla JavaScript per a una experiència d'usuari fluida.
* **Estructura Neta:** Codi organitzat en fitxers HTML, CSS i JavaScript separats per a una millor mantenibilitat.

## 💻 Tecnologies Utilitzades

* **HTML5:** Per a l'estructura semàntica del contingut.
* **CSS3:** Per a l'estil, disseny responsive, variables CSS (per als temes) i animacions.
    * Fonts: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
    * Icones: [Font Awesome](https://fontawesome.com/) per a les icones de tema.
* **Vanilla JavaScript (ES6+):** Per a la interactivitat, canvi de tema, selecció d'idioma, menú mòbil i animacions dinàmiques (`IntersectionObserver`).

## 📂 Estructura del Projecte

/
├── index.html         # Estructura principal de la pàgina
├── style.css          # Full d'estils (inclou variables per als temes clar/fosc)
├── script.js          # Lògica JavaScript (tema, idioma, animacions, menú mòbil)
├── translations.js    # Fitxer amb totes les traduccions (CA, ES, EN)
├── images/            # Carpeta per a les imatges dels projectes
│   └── ... (les teves imatges de projectes aquí)
└── README.md          # Aquest fitxer

## 🛠️ Com Utilitzar / Desplegar

1.  **Clonar el Repositori (si està a GitHub):**
    ```bash
    git clone [URL-del-teu-repositori]
    cd [nom-del-repositori]
    ```
2.  **Obrir Localment:** Simplement obre el fitxer `index.html` amb el teu navegador web preferit.
3.  **Desplegar:** Aquest projecte és totalment estàtic. Pots desplegar-lo fàcilment i gratuïtament a plataformes com:
    * **GitHub Pages:** Puja els fitxers a un repositori de GitHub i activa GitHub Pages a la configuració del repositori.
    * **Netlify:** Arrossega i deixa anar la carpeta del projecte.
    * **Vercel:** Connecta el teu repositori de GitHub.

## 🔧 Personalització

Per adaptar aquest portfoli a les teves necessitats:

1.  **Contingut dels Projectes:** Edita el fitxer `translations.js` per canviar els títols i descripcions dels projectes en cada idioma (`project1Title`, `project1Desc`, etc.).
2.  **Imatges dels Projectes:**
    * Crea una carpeta anomenada `images` a l'arrel del projecte.
    * Desa les teves imatges dins d'aquesta carpeta.
    * Al fitxer `index.html`, a la secció `#projectes`, canvia el `src` de cada etiqueta `<img>` per apuntar a les teves imatges (ex: `src="images/el-teu-projecte.jpg"`).
3.  **Dades Personals:** Actualitza els enllaços de LinkedIn i GitHub, i l'adreça de correu electrònic al `<footer>` dins del fitxer `index.html`.
4.  **Formulari de Contacte:** Si vols utilitzar el formulari del peu de pàgina amb un servei com [Web3Forms](https://web3forms.com/), reemplaça `"YOUR_ACCESS_KEY_HERE"` amb la teva clau d'accés dins de l'etiqueta `<form>` al `index.html`.
5.  **(Opcional) Foto de Perfil:** Pots afegir una etiqueta `<img>` amb la teva foto a la secció `<header id="inici">` si ho desitges.

## 📬 Contacte

Si tens alguna pregunta o suggeriment, no dubtis a contactar-me:

* **Correu:** marccaso04@gmail.com
* **LinkedIn:** [https://www.linkedin.com/in/marc-cassanmagnago-5b7773294/](https://www.linkedin.com/in/marc-cassanmagnago-5b7773294/)
* **GitHub:** [https://github.com/marccass](https://github.com/marccass)

---

Fet amb ❤️ per Marc Cassanmagnago Somoza.

# 💻 Portfoli Web Professional de Marc Cassanmagnago Somoza

[![GitHub Pages](https://github.com/marccass/marccass.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://marccassanmagnago.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Llenguatges](https://img.shields.io/github/languages/top/marccass/marccass.github.io?color=blue)](https://github.com/marccass)

## 🌟 Descripció del Projecte

Aquest repositori conté el codi font del portfoli web personal de Marc Cassanmagnago Somoza, Estudiant d'Enginyeria Informàtica.

El projecte ha estat dissenyat amb una estètica **professional i tècnica** per destacar les habilitats en desenvolupament de programari, visió per computador i aplicacions mòbils.

### Característiques Clau

*   **Disseny Responsive:** Totalment adaptat a mòbils, *tablets* i escriptoris.
*   **Mode Fosc/Clar:** Commutador de tema amb persistència de preferències.
*   **Multiidioma (i18n):** Suport per a Català (CA), Espanyol (ES) i Anglès (EN).
*   **SEO Optimitzat:** Metadades completes (Open Graph, Twitter Cards) per a xarxes socials i cercadors.
*   **Formulari de Contacte Funcional:** Integració amb **Web3Forms** per a la gestió de missatges sense necessitat de *backend*.
*   **UX Millorada:** Navegació activa, botó "Tornar a dalt" i animacions subtils.

## 🛠️ Tecnologies Utilitzades

El portfoli és un lloc web estàtic construït amb les següents tecnologies:

| Tecnologia | Propòsit |
| :--- | :--- |
| **HTML5** | Estructura semàntica del contingut. |
| **CSS3** | Estilisme, disseny responsive i variables CSS per al canvi de tema. |
| **JavaScript (Vanilla)** | Lògica de la interfície d'usuari, canvi de tema, i18n, validació de formulari i animacions. |
| **Font Awesome** | Iconografia professional. |
| **Web3Forms** | Gestió del formulari de contacte. |

## 🚀 Instal·lació i Configuració Local

Per clonar i executar aquest projecte localment, seguiu els passos següents:

### 1. Clonar el Repositori

```bash
git clone https://github.com/marccass/marccass.github.io.git
cd marccass.github.io
```

### 2. Estructura de Fitxers

Assegureu-vos que els fitxers principals estiguin al directori arrel:

```
.
├── index.html
├── style.css
├── script.js
├── translations.js
├── profile-photo.jpg  <-- La teva foto de perfil
├── favicon.png        <-- La icona del lloc web
├── MarcCassanmagnagoSomozaCV2025CATALA.pdf
└── ...
```

### 3. Configuració Essencial

**A. Formulari de Contacte (Web3Forms)**

El formulari de contacte utilitza Web3Forms. Heu de substituir la clau d'accés:

1.  Obteniu la vostra clau gratuïta a [https://web3forms.com](https://web3forms.com).
2.  Obriu `index.html` i cerqueu la línia:
    ```html
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    ```
3.  Substituïu `YOUR_ACCESS_KEY_HERE` per la vostra clau real.

**B. Fitxers de CV**

El fitxer `script.js` espera que els CVs tinguin els següents noms (sense caràcters especials):

*   `MarcCassanmagnagoSomozaCV2025CATALA.pdf`
*   `MarcCassanmagnagoSomozaCV2025ESPANOL.pdf`
*   `MarcCassanmagnagoSomozaCV2025ENGLISH.pdf`

**C. Contingut Personalitzat**

*   **Projectes:** Actualitzeu els enllaços de GitHub i les descripcions dels projectes a `index.html` i `translations.js`.
*   **Foto de Perfil:** Assegureu-vos que la vostra foto estigui guardada com a `profile-photo.jpg` (o actualitzeu la ruta a `index.html`).

### 4. Execució Local

Com que és un lloc web estàtic, només cal obrir `index.html` al vostre navegador.

Per a un desenvolupament més seriós, podeu utilitzar un servidor local simple:

```bash
# Utilitzant Python
python3 -m http.server 8000
# Obre http://localhost:8000 al teu navegador
```

## 🌐 Desplegament

Aquest projecte és ideal per a serveis d'allotjament de llocs web estàtics:

*   **GitHub Pages:** La manera més senzilla, ja que el codi ja és a GitHub.
*   **Netlify**
*   **Vercel**
*   **Cloudflare Pages**

## 🤝 Contribució

Les contribucions, suggeriments i informes d'errors són benvinguts. Si teniu alguna idea per millorar el disseny o la funcionalitat, obriu un *issue* o envieu un *pull request*.

## ✉️ Contacte

Marc Cassanmagnago Somoza - [marccaso04@gmail.com](mailto:marccaso04@gmail.com)

Projecte Link: [https://marccassanmagnago.com](https://marccassanmagnago.com)

## 📜 Llicència

Aquest projecte està sota la llicència MIT. Consulteu el fitxer [LICENSE](LICENSE) per a més detalls.

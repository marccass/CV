# Portfoli Web de Marc Cassanmagnago Somoza - Versió Millorada

Aquest és el portfoli web personal millorat amb noves funcionalitats, millor accessibilitat, SEO optimitzat i disseny responsive.

## 📋 Contingut del Paquet

- `index_millorat.html` - Fitxer HTML principal amb totes les millores
- `style_millorat.css` - Full d'estils CSS actualitzat
- `script_millorat.js` - JavaScript amb noves funcionalitats
- `translations_millorat.js` - Traduccions corregides i ampliades (CA/ES/EN)
- `README.md` - Aquest fitxer amb instruccions

## 🚀 Instal·lació i Configuració

### 1. Preparar els fitxers

1. **Renombra els fitxers** eliminant el sufix `_millorat`:
   - `index_millorat.html` → `index.html`
   - `style_millorat.css` → `style.css`
   - `script_millorat.js` → `script.js`
   - `translations_millorat.js` → `translations.js`

2. **Col·loca tots els fitxers** al directori arrel del teu lloc web.

### 2. Renombrar els fitxers PDF dels CVs

**IMPORTANT:** Els noms dels fitxers PDF han de coincidir amb els especificats al codi JavaScript.

Renombra els teus fitxers de CV de la següent manera:

- `MarcCassanmagnagoSomozaCV2025CATALÀ..pdf` → `MarcCassanmagnagoSomozaCV2025CATALA.pdf`
- `MarcCassanmagnagoSomozaCV2025ESPAÑOL.pdf` → `MarcCassanmagnagoSomozaCV2025ESPANOL.pdf`
- `MarcCassanmagnagoSomozaCV2025ENGLISH.pdf` → `MarcCassanmagnagoSomozaCV2025ENGLISH.pdf`

**Nota:** Hem eliminat els punts dobles i els caràcters especials (À, Ñ) per evitar problemes de compatibilitat.

### 3. Configurar la clau API del formulari de contacte

El formulari de contacte utilitza **Web3Forms**, un servei gratuït per processar formularis.

**Passos:**

1. Visita [https://web3forms.com](https://web3forms.com)
2. Introdueix el teu correu electrònic per obtenir una clau API gratuïta
3. Obre el fitxer `index.html`
4. Cerca la línia que diu:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
5. Substitueix `YOUR_ACCESS_KEY_HERE` per la teva clau real

**Exemple:**
```html
<input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
```

### 4. Afegir la teva foto de perfil

1. Prepara una foto de perfil professional (format quadrat recomanat: 400x400px o superior)
2. Guarda-la com `profile-photo.jpg` al mateix directori que `index.html`
3. Si vols utilitzar un nom diferent, actualitza aquesta línia a `index.html`:
   ```html
   <img src="profile-photo.jpg" alt="Marc Cassanmagnago Somoza" class="profile-photo">
   ```

**Consell:** Utilitza formats moderns com WebP per a millor rendiment:
```html
<img src="profile-photo.webp" alt="Marc Cassanmagnago Somoza" class="profile-photo">
```

### 5. Afegir un favicon

1. Crea o descarrega un favicon (icona del lloc web)
2. Pots utilitzar eines gratuïtes com [Favicon.io](https://favicon.io) o [RealFaviconGenerator](https://realfavicongenerator.net)
3. Guarda el fitxer com `favicon.png` (o `favicon.ico`) al directori arrel
4. Si utilitzes un nom diferent, actualitza aquesta línia a `index.html`:
   ```html
   <link rel="icon" type="image/png" href="favicon.png">
   ```

### 6. Actualitzar els enllaços dels projectes

**IMPORTANT:** Actualment, tots els enllaços de projectes apunten a `https://github.com/marccass`.

**Actualitza'ls** amb els repositoris específics de cada projecte:

Obre `index.html` i cerca les seccions de projectes. Canvia els enllaços:

```html
<!-- ABANS -->
<a href="https://github.com/marccass" target="_blank" rel="noopener noreferrer">

<!-- DESPRÉS (exemple) -->
<a href="https://github.com/marccass/computer-vision-project" target="_blank" rel="noopener noreferrer">
```

### 7. Afegir captures de pantalla dels projectes (Opcional però recomanat)

Les imatges actuals són genèriques d'Unsplash. Per a un portfoli més professional:

1. Fes captures de pantalla dels teus projectes
2. Guarda-les a una carpeta `images/` al directori arrel
3. Actualitza les rutes a `index.html`:

```html
<!-- ABANS -->
<img src="https://images.unsplash.com/photo-..." alt="...">

<!-- DESPRÉS -->
<img src="images/project-computer-vision.jpg" alt="Projecte de visió per computador" loading="lazy">
```

### 8. Configurar metadades Open Graph (Opcional)

Per a millor compartició en xarxes socials:

1. Crea una imatge de previsualització (1200x630px recomanat)
2. Guarda-la com `preview.jpg`
3. Actualitza l'URL a `index.html`:

```html
<meta property="og:url" content="https://www.elteudomini.com/">
<meta property="og:image" content="https://www.elteudomini.com/preview.jpg">
```

## 🎨 Personalització

### Canviar els colors

Obre `style.css` i modifica les variables CSS a la secció `:root`:

```css
:root {
    --color-primari: #6D28D9;        /* Color principal (violeta) */
    --color-primari-hover: #5B21B6;  /* Color al passar el ratolí */
    /* ... altres colors ... */
}
```

### Afegir més seccions

Pots afegir noves seccions seguint l'estructura existent:

```html
<section id="nova-seccio">
    <div class="container">
        <h2 class="animat-entrada">Títol de la Secció</h2>
        <p class="animat-entrada">Contingut...</p>
    </div>
</section>
```

No oblidis afegir l'enllaç a la navegació:

```html
<li><a href="#nova-seccio" class="nav-link">Nova Secció</a></li>
```

## ✅ Checklist de Configuració

Abans de publicar, assegura't que has completat:

- [ ] Renombrat tots els fitxers eliminant `_millorat`
- [ ] Renombrat els fitxers PDF dels CVs (sense espais ni caràcters especials)
- [ ] Configurat la clau API de Web3Forms al formulari
- [ ] Afegit la teva foto de perfil (`profile-photo.jpg`)
- [ ] Afegit un favicon (`favicon.png`)
- [ ] Actualitzat els enllaços dels projectes amb repositoris específics
- [ ] Actualitzat les metadades Open Graph amb el teu domini real
- [ ] (Opcional) Substituït les imatges genèriques per captures reals dels projectes
- [ ] Provat el formulari de contacte
- [ ] Verificat que tots els enllaços funcionen correctament
- [ ] Provat la pàgina en diferents dispositius (mòbil, tablet, escriptori)

## 🌐 Publicació

### Opcions d'allotjament gratuït:

1. **GitHub Pages** (Recomanat per a llocs estàtics)
   - Gratuït i fàcil de configurar
   - URL: `nomdusuari.github.io`
   - [Guia oficial](https://pages.github.com/)

2. **Netlify**
   - Desplegament automàtic des de GitHub
   - SSL gratuït
   - [Netlify.com](https://www.netlify.com/)

3. **Vercel**
   - Molt ràpid i fàcil d'usar
   - [Vercel.com](https://vercel.com/)

4. **Cloudflare Pages**
   - Rendiment excel·lent
   - [Pages.cloudflare.com](https://pages.cloudflare.com/)

## 🐛 Resolució de Problemes

### El formulari no envia missatges

- Verifica que has configurat correctament la clau API de Web3Forms
- Comprova la consola del navegador per veure errors
- Assegura't que el camp `access_key` no estigui buit

### Les imatges no es carreguen

- Verifica que les rutes dels fitxers siguin correctes
- Assegura't que els noms dels fitxers coincideixin exactament (majúscules/minúscules)
- Comprova que les imatges estiguin al directori correcte

### El CV no es descarrega

- Verifica que els noms dels fitxers PDF coincideixin amb els especificats a `script.js`
- Assegura't que els fitxers PDF estiguin al mateix directori que `index.html`

### El menú mòbil no funciona

- Verifica que `script.js` s'estigui carregant correctament
- Comprova la consola del navegador per veure errors de JavaScript

## 📱 Compatibilitat

Aquest portfoli és compatible amb:

- ✅ Chrome/Edge (últimes versions)
- ✅ Firefox (últimes versions)
- ✅ Safari (últimes versions)
- ✅ Dispositius mòbils (iOS i Android)
- ✅ Tablets

## 📊 Millores Implementades

### Accessibilitat
- ✅ Etiquetes ARIA per a lectors de pantalla
- ✅ Navegació per teclat millorada
- ✅ Contrast de colors adequat

### SEO
- ✅ Metadades completes (description, keywords, author)
- ✅ Open Graph tags per a xarxes socials
- ✅ Twitter Cards
- ✅ Estructura semàntica HTML5

### Rendiment
- ✅ Lazy loading d'imatges
- ✅ Fonts optimitzades
- ✅ CSS i JavaScript minificables

### Funcionalitat
- ✅ Indicador de secció activa a la navegació
- ✅ Botó "Tornar a dalt"
- ✅ Validació del formulari amb feedback visual
- ✅ Menú mòbil amb overlay
- ✅ Nova secció d'Educació
- ✅ Enllaços socials destacats
- ✅ Animacions millorades

### Seguretat
- ✅ `rel="noopener noreferrer"` en enllaços externs
- ✅ Honeypot anti-spam al formulari
- ✅ Validació client-side i server-side

## 📞 Suport

Si tens problemes o preguntes sobre la configuració, revisa:

1. Aquest fitxer README
2. Els comentaris al codi (marcats amb `<!-- IMPORTANT: ... -->`)
3. La consola del navegador per veure errors

## 📝 Llicència

Aquest codi és de lliure ús per a Marc Cassanmagnago Somoza. Si vols utilitzar aquest template per al teu propi portfoli, assegura't de canviar tot el contingut personal.

---

**Versió:** 4.0 Millorada  
**Última actualització:** Novembre 2025  
**Creat per:** Marc Cassanmagnago Somoza amb assistència d'IA

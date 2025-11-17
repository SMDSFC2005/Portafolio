/*
           CAMBIO DE TEMA (CLARO/OSCURO) con almacenamiento en localStorage
         */
const body = document.body;
const botonTema = document.getElementById('boton-tema');

const savedTheme = localStorage.getItem('tema') || 'claro';
body.setAttribute('data-tema', savedTheme);
botonTema.textContent = savedTheme === 'claro' ? 'Modo Oscuro' : 'Modo Claro';

botonTema.addEventListener('click', () => {
    
    const nuevo = body.getAttribute('data-tema') === 'claro' ? 'oscuro' : 'claro';
    body.setAttribute('data-tema', nuevo);
    localStorage.setItem('tema', nuevo);

    botonTema.textContent = nuevo === 'claro' ? 'Modo Oscuro' : 'Modo Claro';
});

/*
   SISTEMA DE TRADUCCIONES
   Usa data-t para reemplazar el texto dinámicamente
    */
const botonIdioma = document.getElementById('boton-idioma');

const translations = {
    es: {
        inicio: "Inicio",
        proyectos: "Proyectos",
        sobremi: "Sobre mí",
        contacto: "Contacto",
        subtitulo: "Desarrollador web en formación | Apasionado por crear soluciones digitales",
        descripcion_inicio: "Soy estudiante de 2º de Desarrollo de Aplicaciones Web, apasionado por crear soluciones modernas y funcionales. Me interesa el desarrollo full-stack y disfruto trabajando tanto en la parte visual como en la lógica interna de las aplicaciones. Actualmente sigo formándome en Java, PHP, JavaScript y frameworks como Laravel y React, con el objetivo de convertirme en un gran desarrollador y preparado para afrontar nuevos retos.",
        ver_proyectos: "Ver Proyectos",
        ver_cv: "Ver CV",
        titulo_proyecto: "Videoclub",
        codigo: "Código",
        demo: "Demo",
        titulo_sobremi: "Sobre mí",
        texto_sobremi: "Soy estudiante de 2º de Desarrollo de Aplicaciones Web, apasionado por crear soluciones modernas y funcionales. Me interesa el desarrollo full-stack y disfruto trabajando tanto en la parte visual como en la lógica interna de las aplicaciones. Actualmente sigo formándome en Java, PHP, JavaScript y frameworks como Laravel y React, con el objetivo de convertirme en un gran desarrollador y preparado para afrontar nuevos retos.",
        hab_tecnicas: "Habilidades técnicas",
        footer_github: "GitHub",
        footer_linkedin: "LinkedIn",
        footer_email: "Email",
        modal_title: "CV - Sergio Martínez Delgado",
        modal_open: "Abrir en nueva pestaña",
        modal_close: "Cerrar"
    },
    en: {
        inicio: "Home",
        proyectos: "Projects",
        sobremi: "About me",
        contacto: "Contact",
        subtitulo: "Web developer in training...",
        descripcion_inicio: "I am a second-year Web Application Development student, passionate about creating modern and functional solutions. I am interested in full-stack development and enjoy working on both the visual side and the internal logic of applications. I am currently improving my skills in Java, PHP, JavaScript, and frameworks such as Laravel and React, with the goal of becoming a great developer and being fully prepared to face new challenges.",
        ver_proyectos: "View Projects",
        ver_cv: "View Resume",
        titulo_proyecto: "Videoclub",
        codigo: "Code",
        demo: "Demo",
        titulo_sobremi: "About me",
        texto_sobremi: "I am a second-year Web Application Development student, passionate about creating modern and functional solutions. I am interested in full-stack development and enjoy working on both the visual side and the internal logic of applications. I am currently improving my skills in Java, PHP, JavaScript, and frameworks such as Laravel and React, with the goal of becoming a great developer and being fully prepared to face new challenges.",
        hab_tecnicas: "Technical skills",
        footer_github: "GitHub",
        footer_linkedin: "LinkedIn",
        footer_email: "Email",
        modal_title: "Resume - Sergio Martínez Delgado",
        modal_open: "Open in new tab",
        modal_close: "Close"
    }
};

function applyTranslations(lang) {
    document.querySelectorAll("[data-t]").forEach(el => {
        const key = el.getAttribute("data-t");
        el.textContent = translations[lang][key];
    });
}

let lang = localStorage.getItem("idioma") || "es";
applyTranslations(lang);
botonIdioma.textContent = lang === "es" ? "EN" : "ES";

botonIdioma.addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    localStorage.setItem("idioma", lang);
    applyTranslations(lang);
    botonIdioma.textContent = lang === "es" ? "EN" : "ES";
});

/*
   MODAL PARA VER EL CV
 */
const modalOverlay = document.getElementById("modal");
const btnOpen = document.getElementById("ver-cv-btn");
const btnClose = document.getElementById("modal-close");
const btnClose2 = document.getElementById("modal-close-2");

function openModal() {
    modalOverlay.style.display = "grid";
    modalOverlay.setAttribute("aria-hidden", "false");
}

function closeModal() {
    modalOverlay.style.display = "none";
    modalOverlay.setAttribute("aria-hidden", "true");
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
btnClose2.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
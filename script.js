/* ============================================================
   WEB PROFILE - SCRIPT
   Juan Andrés Quinche García · UniEspinal
   Técnico Profesional en Programación Web

   Dos diccionarios: ES y EN, con exactamente las mismas claves.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Estudio Programación Web en UniEspinal y me gusta construir páginas responsivas con HTML, CSS y JavaScript. También disfruto ayudar a otros a resolver problemas técnicos. Entre código, tareas y partidas de videojuegos, sobrevivo a la universidad como si la vida estuviera en modo difícil. Busco una práctica donde pueda aprender y aportar.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Espinal, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Aprendo a crear sitios y aplicaciones web con HTML, CSS, JavaScript y bases de datos MySQL.",

  "exp.1.title": "Proyectos académicos",
  "exp.1.text":  "Desarrollé páginas web responsivas con HTML, CSS y JavaScript, y manejé el control de versiones con Git y GitHub.",

  "portfolio.title": "Proyectos",
  "project.1.title": "Mi perfil web",
  "project.1.text":  "HTML, CSS, JavaScript",
  "project.2.title": "Próximamente",
  "project.2.text":  "HTML, CSS",
  "project.3.title": "Próximamente",
  "project.3.text":  "JavaScript, MySQL",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes una práctica, un proyecto o solo quieres saludar? Escríbeme.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "Mi perfil profesional",

  "footer.note": "Juan Andrés Quinche García · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   (Reescrito, no traducido palabra por palabra)
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I'm a Web Programming student at UniEspinal who enjoys building responsive websites with HTML, CSS and JavaScript. I also like helping people solve technical problems. Between code, assignments and gaming sessions, I survive university as if life were on hard mode. I'm looking for an internship where I can learn and contribute.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Espinal, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Learning to build websites and web applications with HTML, CSS, JavaScript and MySQL databases.",

  "exp.1.title": "Academic projects",
  "exp.1.text":  "Built responsive web pages with HTML, CSS and JavaScript, and managed code versions with Git and GitHub.",

  "portfolio.title": "Projects",
  "project.1.title": "My web profile",
  "project.1.text":  "HTML, CSS, JavaScript",
  "project.2.title": "Coming soon",
  "project.2.text":  "HTML, CSS",
  "project.3.title": "Coming soon",
  "project.3.text":  "JavaScript, MySQL",

  "contact.title":         "Contact",
  "contact.intro":         "Have an internship, a project or a vacancy? Send me a message.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "My professional profile",

  "footer.note": "Juan Andrés Quinche García · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   No necesitas cambiar nada de aquí hacia abajo.
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS
   El ancho viene del atributo data-percent en index.html.
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});

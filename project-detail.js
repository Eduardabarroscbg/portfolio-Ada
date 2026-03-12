// ==================== PROJECT DATA ====================
const projectsData = {
  "01": {
    title: "Apple MacBook<br>Landing Page",
    breadcrumb: "Apple MacBook Landing Page",
    description: "Landing page animada inspirada na página oficial do MacBook Pro M4 da Apple. Modelos 3D interativos renderizados com Three.js, animações em scroll via GSAP com ScrollTrigger, e conteúdo totalmente localizado em PT-BR com preços em reais.",
    image: "macbook-landing.bxduO2K2.png",
    stats: { techs: "4", features: "4" },
    techs: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    features: [
      "Modelos 3D do MacBook 14\" e 16\" com interação por arrastar",
      "Animações GSAP com ScrollTrigger sincronizadas ao scroll",
      "Gerenciamento de estado global com Zustand",
      "Conteúdo e preços totalmente localizados em PT-BR"
    ],
    demo: "https://apple-macbook-landing-i9ljqvcur-eduardas-projects-ea372f5b.vercel.app",
    github: "https://github.com/Eduardabarroscbg/apple-macbook-landing",
    collaborators: []
  },
  "02": {
    title: "Mercedes-AMG F1",
    breadcrumb: "Mercedes-AMG F1 Landing Page",
    description: "Projeto inspirado na equipe Mercedes-AMG Petronas Formula One Team, desenvolvido com React, Three.js e GSAP. A aplicação apresenta um visualizador 3D interativo do carro da equipe, animações baseadas em scroll e integração com a Ergast Developer API para exibir classificações reais de pilotos e construtores.",
    image: "mercedes.png",
    stats: { techs: "4", features: "4" },
    techs: ["React", "Three.js", "GSAP", "API REST"],
    features: [
      "Carro W14 3D — arraste para girar em 360°",
      "Classificação do campeonato em tempo real via Jolpica API",
      "Páginas individuais de Russell e Kimi Antonelli",
      "Calendário completo da temporada 2026"
    ],
    demo: "https://mercedes-f1.vercel.app",
    github: "https://github.com/Eduardabarroscbg/mercedes-f1",
    collaborators: []
  },
  "03": {
    title: "Roomify<br>Visualizador IA",
    breadcrumb: "Roomify — Visualizador IA",
    description: "Plataforma web que utiliza inteligência artificial para transformar plantas baixas 2D em renders 3D fotorrealistas. O usuário faz upload da planta, escolhe o estilo e recebe a visualização gerada pelo DALL-E 3, com slider interativo antes/depois.",
    image: "Roomify.png",
    stats: { techs: "4", features: "4" },
    techs: ["React", "TypeScript", "DALL-E 3", "Puter.js"],
    features: [
      "Geração de renders fotorrealistas com DALL-E 3",
      "Slider interativo de comparação antes & depois",
      "Autenticação e banco de dados via Puter.js",
      "Suporte ao Gemini como modelo alternativo"
    ],
    demo: "https://roomify-neon.vercel.app",
    github: "https://github.com/Eduardabarroscbg/Roomify",
    collaborators: []
  },
  "04": {
    title: "CineSystem<br>API REST",
    breadcrumb: "CineSystem — API REST",
    description: "API REST completa para gerenciamento de cinema — filmes, salas e sessões. Desenvolvida em grupo na faculdade UNIPÊ, com validação de dados via Zod, ORM Prisma com PostgreSQL e documentação interativa via Swagger.",
    image: "cine.png",
    stats: { techs: "4", features: "3" },
    techs: ["Node.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "CRUD completo de filmes, salas e sessões",
      "Validação robusta de dados com Zod",
      "Documentação interativa via Swagger UI"
    ],
    demo: null,
    github: "https://github.com/EduardaMFerreira/CineSystem",
    collaborators: [
      { name: "Clara", url: "https://github.com/ClaraQrz" },
      { name: "Leandra Lima", url: "https://github.com/Leandralimas" },
      { name: "Eduarda Ferreira", url: "https://github.com/EduardaMFerreira" }
    ]
  },
  "05": {
    title: "Sushi Saboroso<br>Restaurante Japonês",
    breadcrumb: "Sushi Saboroso — Restaurante",
    description: "Website completo de restaurante japonês — responsivo, animado e interativo. Conta com hero em vídeo loop, cardápio com filtro por categoria (Sushi, Ramen, Outros), lightbox nas fotos dos pratos com navegação por setas, teclado e swipe, além de newsletter com validação de e-mail e botão de scroll to top.",
    image: "sushi saboroso.png",
    stats: { techs: "4", features: "5" },
    techs: ["HTML5", "CSS3", "JavaScript", "RemixIcon"],
    features: [
      "Hero animado com vídeo em loop",
      "Cardápio interativo com filtro por categoria (Sushi, Ramen, Outros)",
      "Lightbox com navegação por setas, teclado e swipe",
      "Layout 100% responsivo — mobile, tablet e desktop",
      "Newsletter com validação completa de e-mail"
    ],
    demo: "https://sushi-saboroso.vercel.app",
    github: "https://github.com/Eduardabarroscbg/sushi-saboroso",
    collaborators: []
  }
};

// ==================== CREATE OVERLAY ====================
// Topbar: só botão "Voltar" + "Projetos ›" sem repetir o nome do projeto
const overlayHTML = `
<div class="project-detail-overlay" id="project-detail-overlay">
  <div class="detail-backdrop" id="detail-backdrop"></div>
  <div class="detail-panel" id="detail-panel">
    <div class="detail-topbar">
      <button class="detail-back-btn" id="detail-back-btn">
        <i class="fas fa-arrow-left"></i> Voltar
      </button>
      <span class="detail-breadcrumb-label">Projetos</span>
    </div>
    <div class="detail-body">
      <div class="detail-left">
        <div class="detail-animate detail-title-block">
          <h1 class="detail-title" id="detail-title"></h1>
          <div class="detail-title-underline"></div>
        </div>
        <p class="detail-animate detail-description" id="detail-description"></p>
        <div class="detail-animate detail-stats" id="detail-stats"></div>
        <div class="detail-animate detail-actions" id="detail-actions"></div>
        <div class="detail-animate detail-tech-section">
          <h4><i class="fas fa-code"></i> Tecnologias Utilizadas</h4>
          <div class="detail-tech-chips" id="detail-techs"></div>
        </div>
        <div class="detail-animate detail-collab-section" id="detail-collab-section" style="display:none">
          <h4>Colaboradores</h4>
          <div class="detail-collab-chips" id="detail-collabs"></div>
        </div>
      </div>
      <div class="detail-right">
        <div class="detail-animate detail-screenshot">
          <img id="detail-screenshot-img" src="" alt="Screenshot do projeto">
          <div class="detail-screenshot-shine"></div>
        </div>
        <div class="detail-animate detail-features-card">
          <h4><i class="fas fa-star"></i> Principais Recursos</h4>
          <ul class="detail-features-list" id="detail-features"></ul>
        </div>
      </div>
    </div>
  </div>
</div>`;

document.body.insertAdjacentHTML('beforeend', overlayHTML);

// ==================== HELPERS ====================
function removeMask() {
  const mask = document.getElementById("project-load-mask");
  if (mask) mask.remove();
}

function populateDetail(index) {
  const data = projectsData[index];
  if (!data) return;

  document.getElementById("detail-title").innerHTML         = data.title;
  document.getElementById("detail-description").textContent = data.description;
  document.getElementById("detail-screenshot-img").src      = data.image;

  document.getElementById("detail-stats").innerHTML = `
    <div class="detail-stat-card">
      <div class="detail-stat-icon"><i class="fas fa-code"></i></div>
      <div class="detail-stat-info"><strong>${data.stats.techs}</strong><span>Total Tecnologias</span></div>
    </div>
    <div class="detail-stat-card">
      <div class="detail-stat-icon"><i class="fas fa-layer-group"></i></div>
      <div class="detail-stat-info"><strong>${data.stats.features}</strong><span>Funcionalidades</span></div>
    </div>`;

  let actionsHTML = `<a href="${data.github}" target="_blank" class="detail-btn detail-btn-github"><i class="fab fa-github"></i> GitHub</a>`;
  if (data.demo) {
    actionsHTML = `<a href="${data.demo}" target="_blank" class="detail-btn detail-btn-demo"><i class="fas fa-external-link-alt"></i> Ver Projeto</a>` + actionsHTML;
  }
  document.getElementById("detail-actions").innerHTML = actionsHTML;

  document.getElementById("detail-techs").innerHTML = data.techs
    .map(t => `<span class="detail-tech-chip"><i class="fas fa-cube"></i>${t}</span>`).join("");

  document.getElementById("detail-features").innerHTML = data.features
    .map(f => `<li>${f}</li>`).join("");

  const collabSection = document.getElementById("detail-collab-section");
  if (data.collaborators.length > 0) {
    document.getElementById("detail-collabs").innerHTML = data.collaborators
      .map(c => `<a href="${c.url}" target="_blank" class="detail-collab-chip">${c.name}</a>`).join("");
    collabSection.style.display = "block";
  } else {
    collabSection.style.display = "none";
  }
}

// ==================== OPEN ====================
function openDetail(index, pushState = true) {
  if (!projectsData[index]) return;

  const overlay = document.getElementById("project-detail-overlay");
  const panel   = document.getElementById("detail-panel");

  populateDetail(index);
  panel.scrollTop = 0;
  document.documentElement.style.overflow = "hidden";

  if (pushState) {
    history.pushState({ project: index }, "", `#project-${index}`);
  }

  overlay.style.display = "flex";
  requestAnimationFrame(() => requestAnimationFrame(() => {
    overlay.classList.add("active");
  }));
}

// ==================== CLOSE ====================
function closeDetail(pushState = true) {
  const overlay = document.getElementById("project-detail-overlay");
  overlay.classList.remove("active");
  document.documentElement.style.overflow = "";
  removeMask();

  if (pushState) {
    history.pushState(null, "", window.location.pathname + window.location.search);
  }

  setTimeout(() => { overlay.style.display = "none"; }, 500);
}

document.getElementById("detail-backdrop").addEventListener("click", () => closeDetail());
document.getElementById("detail-back-btn").addEventListener("click",  () => closeDetail());
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDetail(); });

// ==================== BROWSER BACK / FORWARD ====================
window.addEventListener("popstate", () => {
  const match = window.location.hash.match(/^#project-(\d+)$/);
  if (match && projectsData[match[1]]) {
    openDetail(match[1], false);
  } else {
    const overlay = document.getElementById("project-detail-overlay");
    if (overlay && overlay.classList.contains("active")) closeDetail(false);
  }
});

// ==================== RESTORE ON LOAD ====================
const _hash  = window.location.hash.match(/^#project-(\d+)$/);
const _index = _hash ? _hash[1] : null;

if (_index && projectsData[_index]) {
  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("project-detail-overlay");
    const panel   = document.getElementById("detail-panel");

    populateDetail(_index);
    panel.scrollTop = 0;
    document.documentElement.style.overflow = "hidden";

    overlay.style.display = "flex";
    overlay.classList.add("active");

    removeMask();
  });
}

// ==================== ATTACH TO PROJECT CARD BUTTONS ====================
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".demo-btn");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const card  = btn.closest(".project-card");
  const index = card && card.getAttribute("data-index");
  if (index) openDetail(index);
});
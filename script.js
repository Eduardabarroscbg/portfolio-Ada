// ==================== DARK MODE ONLY ====================
document.body.classList.add("dark");

// ==================== NAV ITEMS (smooth scroll) ====================
const allNavItems = document.querySelectorAll(".nav-item[data-section], .mobile-nav-links li[data-section]");

allNavItems.forEach(item => {
    item.addEventListener("click", () => {
        const sectionId = item.getAttribute("data-section");
        const section = document.getElementById(sectionId);

        if (section) {
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }

        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        document.querySelectorAll(".mobile-nav-links li").forEach(n => n.classList.remove("active"));

        allNavItems.forEach(n => {
            if (n.getAttribute("data-section") === sectionId) {
                n.classList.add("active");
            }
        });

        closeMenu();
    });
});

// ==================== HERO BUTTONS ====================
document.querySelectorAll("button[data-section], .mobile-contact-btn[data-section]").forEach(btn => {
    btn.addEventListener("click", () => {
        const sectionId = btn.getAttribute("data-section");
        const section = document.getElementById(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth"
            });
        }

        closeMenu();
    });
});

// ==================== SCROLL EFFECT ====================
window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 130;

    sections.forEach(section => {

        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            const sectionId = section.getAttribute("id");

            document.querySelectorAll(".nav-item[data-section]").forEach(item => {
                item.classList.remove("active");

                if (item.getAttribute("data-section") === sectionId) {
                    item.classList.add("active");
                }
            });
        }

    });

    const island = document.getElementById("nav-island");
    const mobileHeader = document.querySelector(".mobile-header");

    if (window.scrollY > 20) {
        island?.classList.add("scrolled");
        mobileHeader?.classList.add("scrolled");
    } else {
        island?.classList.remove("scrolled");
        mobileHeader?.classList.remove("scrolled");
    }
});

// ==================== MOBILE MENU ====================
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const menuOverlay = document.getElementById("menu-overlay");
const closeMenuBtn = document.getElementById("close-menu");

function openMenu() {
    menuToggle?.classList.add("active");
    mobileNav?.classList.add("active");
    menuOverlay?.classList.add("active");
    document.documentElement.style.overflow = "hidden";
}

function closeMenu() {
    menuToggle?.classList.remove("active");
    mobileNav?.classList.remove("active");
    menuOverlay?.classList.remove("active");
    document.documentElement.style.overflow = "";
}

menuToggle?.addEventListener("click", () => {
    if (mobileNav?.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

closeMenuBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeMenu();
});

menuOverlay?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav?.classList.contains("active")) {
        closeMenu();
    }
});

// ==================== FOOTER LINKS ====================
document.querySelectorAll(".footer-links a[data-section]").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("data-section");
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

document.querySelector(".footer-title")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==================== TIMELINE REVEAL ====================
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const item = entry.target;
            const index = [...timelineItems].indexOf(item);
            setTimeout(() => {
                item.classList.add("revealed");
            }, index * 200);
            timelineObserver.unobserve(item);
        }
    });
}, { threshold: 0.15 });

timelineItems.forEach(item => timelineObserver.observe(item));

// ==================== PROJECT CARDS ====================
const projectCards = document.querySelectorAll(".project-card");

const projObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, i * 100);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(28px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    projObserver.observe(card);
});

// ==================== TECH ICONS REVEAL — POP BOUNCE ====================
const techItems = document.querySelectorAll(".tech-item");
let techAnimated = false;

const techObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !techAnimated) {
            techAnimated = true;

            techItems.forEach((item, index) => {
                // Define o delay individual antes de adicionar a classe
                item.style.animationDelay = `${index * 55}ms`;
                setTimeout(() => {
                    item.classList.add("revealed");
                }, index * 55);
            });

            techObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05,
    rootMargin: "0px 0px -40px 0px"
});

const habilidadesSection = document.getElementById("habilidades");
if (habilidadesSection) {
    techObserver.observe(habilidadesSection);
}
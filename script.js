// Theme Toggle
const toggleButton = document.getElementById("theme-toggle");
const icon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});

// Navigation - Desktop e Mobile
const navItems = document.querySelectorAll("nav ul li, .mobile-nav-links li");

// Menu Hamburguer Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const menuOverlay = document.getElementById("menu-overlay");
const closeMenu = document.getElementById("close-menu");

const openMenu = () => {
    menuToggle.classList.add("active");
    mobileNav.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.classList.add("menu-open");
};

const closeMenuFunc = () => {
    menuToggle.classList.remove("active");
    mobileNav.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
};

if (menuToggle) {
    menuToggle.addEventListener("click", openMenu);
}

if (closeMenu) {
    closeMenu.addEventListener("click", closeMenuFunc);
}

if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenuFunc);
}

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
        const section = document.getElementById(item.getAttribute("data-section"));
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
        
        // Fechar menu mobile após clicar
        closeMenuFunc();
    });
});

// Mobile Contact Button
const mobileContactBtn = document.querySelector(".mobile-contact-btn");
if (mobileContactBtn) {
    mobileContactBtn.addEventListener("click", () => {
        const section = document.getElementById("contato");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            closeMenuFunc();
        }
    });
}

// Scroll Active Section
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove("active");
                if (item.getAttribute("data-section") === sectionId) item.classList.add("active");
            });
        }
    });
});

// Experience Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const experienceItems = document.querySelectorAll(".experience-item");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        experienceItems.forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        const activeContent = document.querySelector(`[data-content="${button.getAttribute("data-company")}"]`);
        if (activeContent) activeContent.classList.add("active");
    });
});

// Footer Links
const footerLinks = document.querySelectorAll(".footer-links a, .footer-social a[data-section]");

footerLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const sectionId = link.getAttribute("data-section");
        if (sectionId) {
            e.preventDefault();
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
                navItems.forEach(nav => nav.classList.remove("active"));
                const navItem = document.querySelector(`nav li[data-section="${sectionId}"]`);
                if (navItem) navItem.classList.add("active");
            }
        }
    });
});

// Contact Buttons
const contactButtons = document.querySelectorAll(".contact-btn, .primary[data-section='contato']");

contactButtons.forEach(button => {
    button.addEventListener("click", () => {
        const section = document.getElementById("contato");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            navItems.forEach(nav => nav.classList.remove("active"));
            const navItem = document.querySelector(`nav li[data-section="contato"]`);
            if (navItem) navItem.classList.add("active");
        }
    });
});
.
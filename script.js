// ========== Navbar Contact Button Functionality ==========
const navbarContactButton = document.querySelector(".navbar-contact-button");
const contact = document.querySelector(".contact");

navbarContactButton.addEventListener("click", () => {
    if (contact.classList.contains("active")) {
        contact.classList.remove("active");
        setTimeout(() => {
            contact.style.display = "none";
        }, 300);
    } else {
        contact.style.display = "block";
        setTimeout(() => {
            contact.classList.add("active");
        }, 10);
    }
});

// ========== Social Icons Color Change Functionality ==========
const socialIcons = document.querySelector(".social-icons");
const iconElements = socialIcons.querySelectorAll("i");

const skillsSection = document.querySelector("section:nth-of-type(2)");
const footerSection = document.querySelector("footer");

function changeIconColorOnScroll() {
    const socialIconsRect = socialIcons.getBoundingClientRect();
    const skillsSectionRect = skillsSection.getBoundingClientRect();
    const footerSectionRect = footerSection.getBoundingClientRect();

    if (
        (socialIconsRect.top >= skillsSectionRect.top && socialIconsRect.bottom <= skillsSectionRect.bottom) ||
        (socialIconsRect.top >= footerSectionRect.top && socialIconsRect.bottom <= footerSectionRect.bottom)
    ) {
        iconElements.forEach((icon) => {
            icon.style.color = "var(--white)";
        });
    } else {
        iconElements.forEach((icon) => {
            icon.style.color = "var(--black)";
        });
    }
}

window.addEventListener("scroll", changeIconColorOnScroll);
changeIconColorOnScroll();

// ========== Tab Behavior Functionality ==========
let openTabs = {};

document.querySelectorAll(".portfolio-link").forEach((link) => {
    link.addEventListener("click", function (event) {
        const url = link.href;

        if (openTabs[url] && !openTabs[url].closed) {
            openTabs[url].focus();
        } else {
            const newTab = window.open(url, "_blank");
            openTabs[url] = newTab;
        }

        event.preventDefault();
    });
});

// ========== Navbar Menu Icon Functionality ==========

const navbarContainer = document.querySelector(".navbar-container");
const navbarMenuIcon = document.getElementById("navbar-menu-icon");

navbarMenuIcon.addEventListener("click", () => {
    if (navbarContainer.style.display === "flex") {
        navbarContainer.style.display = "none";
    } else {
        navbarContainer.style.display = "flex";
    }
});

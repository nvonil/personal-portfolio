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

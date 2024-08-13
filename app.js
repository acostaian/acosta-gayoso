function activateSection(section) {
    const activeClass = 'active-item';
    const activeSection = document.querySelector('.' + activeClass);

    if (activeSection != null) {
        activeSection.classList.remove(activeClass);
    }

    section.classList.add(activeClass);
}

function activateSections() {
    const sections = document.querySelectorAll('.page-section');
    let currentSectionId;

    sections.forEach(section => {
        const offset = (window.scrollY || window.pageYOffSet) ?? 0;
        const headerHeight = document.getElementById('main-header').offsetHeight;
        const extraGap = 100;
        const sectionOffset = section.offsetTop - headerHeight - extraGap;

        if (offset >= sectionOffset) {
            currentSectionId = section.getAttribute('id');
        }
    })

    if (currentSectionId) {
        activateSection(document.getElementById('link-' + currentSectionId));
    }
}

function init() {
    activateSections();
}

window.addEventListener("scroll", activateSections);
window.addEventListener("DOMContentLoaded", init);

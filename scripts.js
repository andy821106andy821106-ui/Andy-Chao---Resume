// Local navigation: no external JavaScript dependencies.
window.addEventListener('DOMContentLoaded', () => {
    const printButton = document.querySelector('.print-button');
    printButton.hidden = false;
    printButton.addEventListener('click', () => window.print());
    const toggle = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#navbarResponsive');
    const links = [...document.querySelectorAll('#navbarResponsive .nav-link')];
    const closeMenu = () => {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', () => {
        const expanded = menu.classList.toggle('show');
        toggle.setAttribute('aria-expanded', String(expanded));
    });
    links.forEach(link => link.addEventListener('click', closeMenu));
    document.querySelector('.navbar-brand').addEventListener('click', closeMenu);
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.classList.contains('show')) {
            closeMenu();
            toggle.focus();
        }
    });
    const sections = [...document.querySelectorAll('main > section')];
    const updateActive = () => {
        const marker = window.innerHeight * 0.35;
        let current = sections[0];
        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= marker) current = section;
        });
        links.forEach(link => {
            const active = link.hash === `#${current.id}`;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    };
    let pending = false;
    window.addEventListener('scroll', () => {
        if (!pending) {
            pending = true;
            window.requestAnimationFrame(() => { updateActive(); pending = false; });
        }
    }, { passive: true });
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) closeMenu();
        updateActive();
    });
    updateActive();
});

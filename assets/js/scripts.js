var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
// Everything the open menu covers; made inert so Tab stays in the menu
var coveredByMenu = document.querySelectorAll('.skip-link, .logo, #main, .footer, .sub-footer');

function setMenuOpen(open) {
    menuContainer.classList.toggle('open', open);
    menuTrigger.classList.toggle('is-active', open);
    body.classList.toggle('lock-scroll', open);
    menuTrigger.setAttribute('aria-expanded', open);
    coveredByMenu.forEach(function(element) {
        element.inert = open;
    });
}

menuTrigger.onclick = function() {
    setMenuOpen(!menuContainer.classList.contains('open'));
}

// Close the mobile menu when a link inside it is followed (e.g. the Contact anchor)
menuContainer.querySelectorAll('a').forEach(function(link) {
    link.onclick = function() {
        setMenuOpen(false);
    }
});

// Escape closes the menu and returns focus to the button that opened it
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && menuContainer.classList.contains('open')) {
        setMenuOpen(false);
        menuTrigger.focus();
    }
});

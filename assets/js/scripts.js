var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
    menuTrigger.setAttribute('aria-expanded', menuContainer.classList.contains('open'));
}

// Close the mobile menu when a link inside it is followed (e.g. the Contact anchor)
menuContainer.querySelectorAll('a').forEach(function(link) {
    link.onclick = function() {
        menuContainer.classList.remove('open');
        menuTrigger.classList.remove('is-active');
        body.classList.remove('lock-scroll');
        menuTrigger.setAttribute('aria-expanded', 'false');
    }
});

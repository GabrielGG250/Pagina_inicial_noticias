const menu = document.querySelector('#menu-mobile');
const abrirMenu = document.querySelector('#icon-menu');
const fecharMenu = document.querySelector('#fechar-menu')

abrirMenu.addEventListener('click', function() {
    menu.classList.remove('hide');
})

fecharMenu.addEventListener('click', function() {
    menu.classList.add('hide');
})
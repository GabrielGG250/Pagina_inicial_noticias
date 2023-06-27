const menu = document.querySelector('#menu-mobile');
const abrirMenu = document.querySelector('#icon-menu');
const fecharMenu = document.querySelector('#fechar-menu');
const fundo = document.querySelector('#fundo');

abrirMenu.addEventListener('click', function() {
    menu.classList.remove('hide');
    fundo.classList.remove('hide');
})

fecharMenu.addEventListener('click', function() {
    menu.classList.add('hide');
    fundo.classList.add('hide');
})
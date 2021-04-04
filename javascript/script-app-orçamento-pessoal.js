var menu = 0

function abrirMenu() {
    if (menu == 0) {
        document.getElementById('menuSuperior').style.height = 'auto'
        menu = 1
    } else {
        document.getElementById('menuSuperior').style.height = '67px'
        menu = 0
    }
}
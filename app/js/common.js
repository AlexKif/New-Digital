//menu

window.onload = function () {
    let menuStyle = getComputedStyle(menu);
    openMenu.onclick = function () {
        if (menuStyle.display == 'none') {
            menu.classList.add('active')
        } else {
            menu.classList.remove('active');
        }
    }
};
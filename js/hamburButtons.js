navDespHamburImg = document.getElementById('nav-desp');
navDespCrossImg = document.getElementById('nav-desp');
wwd = document.getElementById('wwd');

navDespHamburImg.addEventListener('click', showMenu);
navDespCrossImg.addEventListener('click', hideMenu);
function showMenu() {
    navDespHamburImg.style = `visibility: visible;`
}
function hideMenu(){
    navDespCrossImg.style =  `visibility: hidden;`
}
wwd.onmousedown = function () {
    console.log('tocado');
}

wwd.onmouseup = function () {
    console.log('soltado');
}

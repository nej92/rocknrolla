navDespHamburImg = document.getElementById('nav-desp');
navDespCrossImg = document.getElementById('nav-desp');
wwd = document.getElementById('wwd');
wwd.addEventListener('click', whatWeDo)
navDespHamburImg.addEventListener('click', showMenu);
navDespCrossImg.addEventListener('click', hideMenu);
function showMenu() {
    navDespHamburImg.style = `visibility: visible;`
}
function hideMenu(){
    navDespCrossImg.style =  `visibility: hidden;`
}
function whatWeDo(){
    wwd.style=``
}
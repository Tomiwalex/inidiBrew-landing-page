var ham = document.getElementById('ham');
var hamMenu = document.getElementById('ham-menu');
var body = document.querySelector('body');

//##############################
//svg code for hamburger-menu-btn
ham.innerHTML = `<svg class="ham hamRotate ham7 " viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
<path
    class="line top"
    d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" />
<path
    class="line middle"
    d="m 70,50 h -40" />
<path
    class="line bottom"
    d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" />
</svg>`;

//####################################
// script for toggling haburger-menu
ham.addEventListener('click', () => {
    if(hamMenu.classList.contains('fade-in')){
        hamMenu.classList.remove('fade-in');
        hamMenu.classList.add('fade-out');
    }
    else{
        hamMenu.classList.remove('fade-out');
        hamMenu.classList.add('fade-in');
        
    }
    body.classList.toggle('noscroll');
})
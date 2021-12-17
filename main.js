//nav appearing

const navbar = document.querySelector('.navbar');
const btnUp = document.querySelector('.btnUp')

window.onscroll = function(){
    var height = window.innerHeight
    var top = window.scrollY;
    if (top >= height){
        navbar.classList.add('bg-active');
        btnUp.classList.add('up')
    }else{
        navbar.classList.remove('bg-active');
        btnUp.classList.remove('up')
    }
}

//slider

var i = 0;
var images = [];
var time = 1000;

images[0] = "url(img/pic1.jpg)";
images[1] = "url(img/pic2.jpg)";
images[2] = "url(img/pic3.jpg)";

function changeImage() {
    var el = document.querySelector('.main');
    el.style.backgroundImage = images[i];
    el.style.transition = "0.5s"
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;




// map

var map = L.map('map').setView([50.04, 19.94], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.049, 19.944]).addTo(map)
    .bindPopup('Hello!')
    .openPopup();

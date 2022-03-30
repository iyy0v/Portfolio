let unit = document.getElementById("unit");
let image = document.getElementsByTagName("img");
let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");
let zoomInBtn = document.getElementById("zoomInBtn");
let zoomOutBtn = document.getElementById("zoomOutBtn");
let flipH = document.getElementById("flipH");
let flipV = document.getElementById("flipV");


image[0].onmouseover = function() {
    image[0].style.opacity = "0.8";
}

image[0].onmouseout = function() {
    image[0].style.opacity = "1";
}

rightBtn.onclick = function() {
    unit.style.transform += "rotate(-90deg)";
}
leftBtn.onclick = function() {
    unit.style.transform += "rotate(90deg)";
}

zoomInBtn.onclick = function() {
    unit.style.transform += "scale(1.2)";
}

zoomOutBtn.onclick = function() {
    unit.style.transform += "scale(0.8)";
}

flipH.onclick = function() {
    unit.style.transform += "rotateY(180deg)";
}

flipV.onclick = function() {
    unit.style.transform += "rotateX(180deg)";
}
















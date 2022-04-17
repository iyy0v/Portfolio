let unit = document.getElementById("unit");
let image = document.getElementsByTagName("img")[0];
let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");
let zoomInBtn = document.getElementById("zoomInBtn");
let zoomOutBtn = document.getElementById("zoomOutBtn");
let flipH = document.getElementById("flipH");
let flipV = document.getElementById("flipV");
let changeImg = document.getElementById("changeImg");
let date = document.getElementById("date");
let element = document.getElementsByTagName("p")[0];
let photo1 = "./img/hasbu2.jpg";
let photo2;
let pushP = document.getElementById("pushP");
let popP = document.getElementById("popP");
let openW = document.getElementById("openW");
let closeW = document.getElementById("closeW");
let moveW = document.getElementById("moveW");
let resizeW = document.getElementById("resizeW");
let locationInfo = document.getElementById("locationInfo");
let navigatorInfo = document.getElementById("navigatorInfo");
let alertButton = document.getElementById("alert");
let confirmButton = document.getElementById("confirm");
let promptButton = document.getElementById("prompt");

// Image Manipulation
image.onmouseover = function() {
    image.style.opacity = "0.8";
    element.innerHTML = "Faded Hasbullah";
}

image.onmouseout = function() {
    image.style.opacity = "1";
    element.innerHTML = "Hasbullah";
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

changeImg.onclick = function() {
    photo2 = image.src;
    image.src = photo1;
    photo1 = photo2;
}

// Display Date and Time
async function changeDate() {
    date.innerHTML = "Date : " + Date();
}
setInterval(changeDate,1000);

// Elements Manipulation
let pNum = 0;

pushP.onclick = function() {
    pNum++;
    let newP = document.createElement("p");
    let newT = document.createTextNode("Paragraph #" + pNum);
    newP.appendChild(newT);
    pushP.parentElement.insertBefore(newP,pushP);
}

popP.onclick = function() {
    let pList = popP.parentElement.getElementsByTagName("p");
    if(pList.length) {
        popP.parentElement.removeChild(pList[pList.length - 1]);
        pNum--;
    }
}

// Window Manipulation
let newWindow;

openW.onclick = function() {
    newWindow = window.open("","","width=400, height=400");
}

closeW.onclick = function() {
    newWindow.close();
}

moveW.onclick = function() {
    newWindow.moveTo(500,500);
}

resizeW.onclick = function() {
    newWindow.resizeTo(800,800);
}

// Screen Manipulation
console.log(screen.width,screen.height);

// Location Manipulation
locationInfo.innerText = "href : " + location.href
+ "\n protocol : " + location.protocol
+ "\n hostname : " + location.hostname
+ "\n pathname : " + location.pathname;

// Navigator Manipulation
navigatorInfo.innerText = "App name : " + navigator.appName
+ "\n App Code name : " + navigator.appCodeName
+ "\n App version : " + navigator.appVersion
+ "\n Platform : " + navigator.platform
+ "\n Language : " + navigator.language
+ "\n Online? : " + navigator.onLine
+ "\n User agent : " + navigator.userAgent
+ "\n Java enabled? : " + navigator.javaEnabled();

// Pop up Boxes
alertButton.onclick = function() {
    alert("'OK' is your ONLY option.");
}
confirmButton.onclick = function() {
    confirm("You can choose 'OK'... or maybe 'cancel'.");
}
promptButton.onclick = function() {
    let input = prompt("Enter a value then press 'OK', or 'Cancel' for null.", "Default Text");
    alert("You entered : " + input);
}

// Cookies
document.cookie = "username = Giga Chad";
document.cookie = "age = 69";
let data = document.cookie;
console.log("Cookie : " + data);










let logo = document.getElementById("logo");
let logoText = document.getElementById("logo").getElementsByTagName("button")[0].getElementsByTagName("p")[0];
let mode = document.getElementById("switch");
let modeText = document.getElementById("mode");



let logoState = 0;
let currentMode = 1;

logo.onclick = function() {
    logoState++;
    switch(logoState){
        case 1:
            logoText.innerText = "<|>";
            break;
        case 2:
            logoText.innerText = "<|";
            break;
        case 3:
            logoText.innerText = "<:";
            break;
        case 4:
            logoText.innerText = "(:";
            break;
        case 5:
            logoText.style.transform += "rotate(-90deg)";
            break;
        case 6:
            logoText.style.transform = "";
            logoText.innerText = "</>";
            logoState = 0;
            break;
    }
};

mode.onclick = function() {
    if(currentMode) {
        modeText.innerText = "dark_mode";
        currentMode = 0;
    }
    else {
        modeText.innerText = "light_mode";
        currentMode = 1;
    }
};
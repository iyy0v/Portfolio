let logo = document.getElementById("logo");
let logoText = document.getElementById("logo").getElementsByTagName("button")[0].getElementsByTagName("p")[0];
let mode = document.getElementById("switch");
let modeText = document.getElementById("mode");
let pfp = document.getElementById("pfp");
let intro = document.getElementById("intro");
let arrow = document.getElementById("scroll");

let fb = document.getElementById("fb");
let github = document.getElementById("github");
let twitter = document.getElementById("twitter");
let linkedin = document.getElementById("linkedin");
let discord = document.getElementById("discord");
let spans = document.getElementById("contacts").getElementsByTagName("span");
let projects = document.getElementsByClassName("project");
let logoState = 0;
let currentMode = 1;
let oldColor = "black";


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
            logoText.innerText = "<I";
            break;
        case 4:
            logoText.innerText = "<:";
            break;
        case 5:
            logoText.innerText = "(:";
            break;
        case 6:
            logoText.style.transform += "rotate(-90deg)";
            break;
        case 7:
            logoText.style.transform = "";
            logoText.innerText = "</>";
            logoState = 0;
            break;
    }
};

mode.onclick = function() {
    if(currentMode) {
        modeText.innerText = "dark_mode";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#111111";
        document.getElementById("logoBtn").style.backgroundColor = "#111111";
        document.getElementById("switchBtn").style.backgroundColor = "#111111";
        document.getElementById("mode").style.color = "#FFFFFF";
        document.getElementsByClassName("welcome")[1].style.color = "#FFFFFF";
        document.getElementById("description").style.color = "#CCCCCC";
        document.getElementById("scroll").style.color = "#EAEAEA";
        document.getElementsByClassName("arrow")[0].style.fill = "#EAEAEA";
        document.getElementById("tech").style.color = "#EAEAEA";
        document.getElementById("projects").style.color = "#EAEAEA";
        for(let i = 0; i < 4; i++) {
            projects[i].style.backgroundColor = "#EAEAEA";
            projects[i].style.color = "#000000";
            projects[i].getElementsByClassName("desc")[0].style.color = "#000000";
            projects[i].getElementsByClassName("separ")[0].style.backgroundColor = "#000000";
            projects[i].getElementsByClassName("work")[0].style.color = "#333333";
            projects[i].getElementsByClassName("work")[1].style.color = "#333333";
        }
        for(let i = 0; i < 5; i++) {
            spans[i].style.backgroundColor = "#EAEAEA";
        }
        document.getElementById("email").style.color = "#EAEAEA";
        oldColor = "white";
        currentMode = 0;
    }
    else {
        modeText.innerText = "light_mode";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#EAEAEA";
        document.getElementById("logoBtn").style.backgroundColor = "#EAEAEA";
        document.getElementById("switchBtn").style.backgroundColor = "#EAEAEA";
        document.getElementById("mode").style.color = "#000000";
        document.getElementsByClassName("welcome")[1].style.color = "#000000";
        document.getElementById("description").style.color = "#333333";
        document.getElementById("scroll").style.color = "#333333";
        document.getElementsByClassName("arrow")[0].style.fill = "#333333";
        document.getElementById("tech").style.color = "#000000";
        document.getElementById("projects").style.color = "#000000";
        for(let i = 0; i < 4; i++) {
            projects[i].style.backgroundColor = "#222222";
            projects[i].style.color = "#EAEAEA";
            projects[i].getElementsByClassName("desc")[0].style.color = "#FFFFFF";
            projects[i].getElementsByClassName("separ")[0].style.backgroundColor = "#EAEAEA";
            projects[i].getElementsByClassName("work")[0].style.color = "#CCCCCC";
            projects[i].getElementsByClassName("work")[1].style.color = "#CCCCCC";
        }
        for(let i = 0; i < 5; i++) {
            spans[i].style.backgroundColor = "#000000";
        }
        document.getElementById("email").style.color = "#000000";
        oldColor = "black";
        currentMode = 1;
    }
};
mode.onmouseover = function() {
    if(currentMode){
        document.getElementById("mode").style.color = "#EAE200";
    }
    else {
        document.getElementById("mode").style.color = "#0095B7";
    }
}
mode.onmouseleave = function() {
    document.getElementById("mode").style.color = oldColor;
} 


pfp.onclick = function() {
    pfp.src = "./img/pepohi.gif";
    setTimeout(function(){
        pfp.src = "./img/pepohi-pre.jpg";
    }, 2100);
}

window.onscroll = () => {
    
    if(window.scrollY === 0) {
        arrow.style.opacity = "1";
    }
    else if(window.scrollY > 200){
        arrow.style.opacity= "0";
    }
    if(window.scrollY < 700) {
        document.title = "iyy0v | About me";
    }
    else if(window.scrollY >= 700 && window.scrollY < 1520) {
        document.title = "iyy0v | Skills";
    }
    else if(window.scrollY >= 1520) {
        document.title = "iyy0v | Projects";
    }
    /*      -------------- AUTO SCROLL ------------------
    let y1 = 0, y2 = 0;
    y2 = y1;
    y1 = window.scrollY;
    if(document.title === "iyy0v | Home" && y1 > y2) {
        window.location.hash = "tech";
        document.title = "iyy0v | Skills";
    }
    else if(document.title === "iyy0v | Skills" && y1 < y2) {
        window.location.hash = "intro";
        document.title = "iyy0v | Home";
    }
    */
}



fb.onmouseover = function() {
    fb.style.backgroundColor = "#1877F2";
}
fb.onmouseleave = function() {
    fb.style.backgroundColor = oldColor;
} 
github.onmouseover = function() {
    github.style.backgroundColor = "#322F2F";
}
github.onmouseleave = function() {
    github.style.backgroundColor = oldColor;
} 
twitter.onmouseover = function() {
   twitter.style.backgroundColor = "#00ACEE"; 
}
twitter.onmouseleave = function() {
    twitter.style.backgroundColor = oldColor;
} 
linkedin.onmouseover = function() {
    linkedin.style.backgroundColor = "#0077B5";
}
linkedin.onmouseleave = function() {
    linkedin.style.backgroundColor = oldColor;
} 
discord.onmouseover = function() {
    console.log(oldColor);
    discord.style.backgroundColor = "#5865F2";
}
discord.onmouseleave = function() {
    discord.style.backgroundColor = oldColor;
} 

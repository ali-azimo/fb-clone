//Inserir variavel atraves do Dom
let settingmenu = document.querySelector(".setting-menu");
let darkBtn = document.getElementById("dark-btn");


function settigsMenuDark() {
    settingmenu.classList.toggle("setting-menu-heigth");
}

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

//PERMANECER A COR CETADA



if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}
    



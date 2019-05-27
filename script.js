 window.addEventListener("load", sidenVises);

 function sidenVises() {
     console.log("sidenVises");
     document.querySelector("#menuknap").addEventListener("click", toggleMenu);
 }

 function toggleMenu() {
     console.log("toggleMenu");
     document.querySelector("#menu").classList.toggle("hidden");
     let erSkjult = document.querySelector("#menu").classList.contains("hidden");
     if (erSkjult == true) {
         document.getElementById("menuknap").src = "Menu.svg";
     } else {
         document.getElementById("menuknap").src = "lukburgermenu.svg";
     }
 }

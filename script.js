// JavaScript Document
console.log("hi");


var openButton = document.querySelector("header > button"); 
var sluitButton = document.querySelector("header nav button");

openButton.addEventListener("click", openMenu);

function openMenu() {  
    var deNav = document.querySelector("header nav");
    deNav.classList.add("toonMenu");
  }

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    var deNav = document.querySelector("header nav");
    deNav.classList.remove("toonMenu");
  }
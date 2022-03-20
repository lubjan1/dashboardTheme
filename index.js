"use strict";

//material
//
const pointers = document.querySelectorAll(".pointer");
const bottomBox = document.querySelector(".box-bottom");
const gapBoxx = document.querySelector(".gapBox");
const threePeople = document.querySelector(".peopleOF-3");
const onlineBox = document.querySelector(".online");
const themeDark = document.querySelector(".dark");
const themeWhite = document.querySelector(".whites");
const web = document.querySelector("body");
const asideFONTcolor = document.querySelector("a");
const leftBar = document.querySelector(".left-bar");
const DashIcon = document.querySelector(".dash-menu");
const closeLeftBar = document.querySelector(".close-left-bar");
const msgNUMB = document.querySelector(".Numb")
const msg = document.querySelector(".msg")
const analisebox = document.querySelector(".analise-box")

msgNUMB.textContent = 0

msg.addEventListener("click" , function(){
  
  document.querySelector(".Numb").textContent = Math.trunc(Math.random()*20)+1
  
})



DashIcon.addEventListener("click", function () {
  leftBar.classList.toggle("left-bar");
});

themeDark.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.color = "#adb5bd";
  
  document.querySelector(".material").style.color = "#adb5bd";
  

  
  document.querySelector(".last1").style.color = "#adb5bd"
  document.querySelector(".last2").style.color = "#adb5bd"
  document.querySelector(".last3").style.color = "#adb5bd"

  document.querySelector(".message-below1").style.color = "#adb5bd"
  document.querySelector(".message-below2").style.color = "#adb5bd"
  document.querySelector(".message-below3").style.color = "#adb5bd"

  document.querySelector(".numbers1").style.color = "#adb5bd"
  document.querySelector(".numbers2").style.color = "#adb5bd"
  document.querySelector(".numbers3").style.color = "#adb5bd"

  document.querySelector(".peopleOF-3").style.color = "#adb5bd"
  document.querySelector(".mini-box").style.color = "#adb5bd"
  document.querySelector(".mini-box").style.color = "#adb5bd"

  document.querySelector(".names1").style.color = "#ced4da"
  document.querySelector(".names2").style.color = "#ced4da"
  document.querySelector(".names3").style.color = "#ced4da"
  
  document.querySelector(".textOFnames1").style.color = "#adb5bd"
  document.querySelector(".textOFnames2").style.color = "#adb5bd"
  document.querySelector(".textOFnames3").style.color = "#adb5bd"
  
  

  // document.querySelector(".online").style.boxShadow = 'none'
  document.querySelector(".peopleOF-3").style.boxShadow = 'none'
  document.querySelector(".left-bar").style.boxShadow = 'none'
  document.querySelector(".gapBox").style.boxShadow = 'none'
  document.querySelector(".box-bottom").style.boxShadow = 'none'
  document.querySelector(".box-bottom").style.boxShadow = 'none'
  document.querySelector(".box-bottom").style.boxShadow = 'none'

});

themeWhite.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#e9ecef";
  document.querySelector("body").style.color = "#212529";
 
});

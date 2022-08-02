---
template: BlogPost
path: /projects/budget
date: 2022-03-17T06:08:53.137Z
title: 'Myntwise | A budgeting app with ML Power Smart Suggestions '
metaDescription: >-
  Build budgets, track transactions, and know where to purchase goods and
  services based on your financial availability and personal finance goals.
thumbnail: /assets/myntwise.png
---
* View the app at http://myntwise.herokuapp.com/ 

GitHub repo: https://github.com/Queenscripts/myntwise 

Full stack web app helping users solve spending and money problems by enabling them to build budgets, track transactions, and know where to purchase goods and services based on their financial availability and personal finance goals. It is difficult for busy students and professionals to track expenses, and know where to shop based on their budget and financial goals. With Myntwise, users will be able to build budgets, track transactions, and know where to purchase goods and services based on their financial availability and future goals.

````markdown
# MyntWise 
## Overview 
Build budgets, track transactions, and know where to purchase goods and services based on your financial availability and personal finance goals.
<a href="https://www.loom.com/share/20d84b32f918432f82594b17740a6cde">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/20d84b32f918432f82594b17740a6cde-with-play.gif">
  </a>
## Table of Contents 
## Installation
```
virtualenv env 
source env/bin/activate 
pip3 install -r requirements.txt
```
## Usage 
## Methodology
## License 
## Tech Stack
### Client 

* Tailwind CSS
* React / Hooks
    * React CSV

### Server

* PostGreSQL database
* Flask server
    * Celery 
    * SQLAlchemy
    * OAuth 
    * Google OAuth 
    * Walmart Affiliate Marketing API


![ScreenShot](https://github.com/Queenscripts/queenscript1/app/home.png)
![ScreenShot](https://github.com/Queenscripts/queenscript1/app/grid.png)
![ScreenShot](https://github.com/Queenscripts/queenscript1/app/transactions.png)
![ScreenShot](https://github.com/Queenscripts/queenscript1/app/reports.png)


## Contact
Created by Queen Shabazz during Walmart sponsored Hackbright residency. 
````





<style>
* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
.mySlides {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>

</head>
<body>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 4</div>
  <img src="https://raw.githubusercontent.com/Queenscripts/myntwise/main/app/grid.png" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 4</div>
  <img src="https://raw.githubusercontent.com/Queenscripts/myntwise/main/app/reports.png" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 4</div>
  <img src="https://raw.githubusercontent.com/Queenscripts/myntwise/main/app/budgets-dashboard.png" style="width:100%">
  <div class="text">Caption Three</div>
</div>

<a class="prev" onclick="plusSlides(-1)">❮</a> <a class="next" onclick="plusSlides(1)">❯</a>

</div>

<div class="mySlides fade">
  <div class="numbertext">4 / 4</div>
  <img src="https://raw.githubusercontent.com/Queenscripts/myntwise/main/app/transactions.png" style="width:100%">
  <div class="text">Caption Three</div>
</div>

<a class="prev" onclick="plusSlides(-1)">❮</a> <a class="next" onclick="plusSlides(1)">❯</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span>

<span class="dot" onclick="currentSlide(4)"></span> 
</div>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>

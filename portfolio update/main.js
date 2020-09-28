// Declare the variable
var $toggles = $('.menu__icon');

// This function adds the class that displays the menu
$toggles.on('click', function () {
    $(this).closest('.menu').toggleClass('open');
  
});

// Declare the variable
var $toggleLink = $('.link');

// This function removes the class that displays the menu
$toggleLink.on('click', function () {
    $(this).closest('.menu').toggleClass('open');
   
});

const background = document.querySelector(".image");
background.addEventListener("mouseover", function(){
  background.style.backgroundImage="url(https://i.ibb.co/kJSD78Q/Pics-Art-07-04-03-57-44.jpg)";
}, false)

background.addEventListener("mouseout", function(){
  background.style.backgroundImage="url(https://i.ibb.co/SRbPnX9/rsz-screenshot-20200704-011050-picsart-1-removebg-preview.png)";
}, false)
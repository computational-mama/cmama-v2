import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()



// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  
// const arr = [
//     'code as a practice of care',
//     'coding as a process',
//     'what can code produce', 
//     'who can produce code', 
//     'where can code be produced',
//     'Coding for value over solutions',
//     'Coding as a community',
// ] 
  

// const banner = arr[getRandomInt(arr.length)]
// // console.log(banner)

// // if(document.getElementById("banner-text")){
// //     document.getElementById("banner-text").innerHTML = banner
// // }

// // const gifArr = [

// // ]

// var randomOrder = function(element) {
    
//     // Viewport Dimensions
//     var vpHeight = window.innerHeight;
//     var vpWidth = window.innerWidth;
    
//     // Image Position
//     var xPos = getRandomInt(vpWidth - element.offsetWidth);
//     var yPos = getRandomInt(vpHeight - element.offsetHeight);
//     var zIndex = getRandomInt(13);
    
//  element.style.cssText += '--x-position:' + xPos + 'px; --y-position:' + yPos + 'px; z-index:' + zIndex;
// };

// //Setup
// var imgs = document.querySelectorAll('img');

// imgs.forEach((the_img) => {
  
//   window.addEventListener('load', function() {
//     randomOrder(the_img);
//   });

// }); //end foreach

// // // Function to get the current date and time
// function getCurrentDateAndTime() {
//   const dateTime = new Date();
//   return dateTime.toLocaleString();
// }

// // Target an HTML element to display the current date and time
// const dateDisplay = document.getElementById("date-container");

// // Set the innerHTML of the element to the current date and time returned by the function
// dateDisplay.innerHTML = new Date().toLocaleString();
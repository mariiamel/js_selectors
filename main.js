console.log('successfully linked!')

// For each prompt, perform the specified selection. Save the result to a variable, then console.log that variable. Confirm that it contains what it should in the console!

// 1) All img tags
let imgAll = document.querySelectorAll('img');
console.log(imgAll);
// 2) All section tags
let sectionAll = document.querySelectorAll('section');
console.log(sectionAll);
// 3) The element with an id of section-1
let sec1 = document.querySelector('#section-1');
console.log(sec1);
// 4) The element with an id of destinations-button
let destBut = document.querySelector('#destinations-button');
console.log(destBut);
// 5) The first element with a class of images-rack
let imgRack = document.querySelector('.images-rack');
console.log(imgRack);
// 6) The first h1 tag
let firstH1 = document.querySelector('h1');
console.log(firstH1);
// 7) All elements with a class of image-card
let class1 = document.querySelectorAll('.image-card');
console.log(class1);
// 8) All elements with a class of over-image-text
let image3 = document.querySelectorAll('.over-image-text');
console.log(image3);

console.log("Pairing!")
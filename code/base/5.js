"use strict";
var id5 = document.getElementById('id5');
console.log(id5);

console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));

var le = document.querySelectorAll('span');
var last_le = le[le.length-1];
console.log(le);
le.innerHTML = '哔哩哔哩';
console.log(last_le);
console.log(last_le.attributes['id'].value);
console.log(last_le.getAttribute('id'));
// last_le.setAttribute('class','hhh');
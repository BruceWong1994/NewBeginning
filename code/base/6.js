"use strict";
var a = document.getElementById('id6');
console.log(a);
console.log(a.innerText);
var ct = parseFloat(a.innerText);
var timer = setInterval(function(){
    ct--;
    a.innerHTML = ct;
    console.log(ct);
    ct == 55 && clearInterval(timer);
},1000);
"use strict";
var i4 = document.getElementById('i4');
var s4=document.getElementById('s4');

function cf(){
    // console.log(i4);
    // console.log(i4.value);
    !isNaN(parseFloat(i4.value)) && (s4.innerHTML = i4.value);
}

var a1 = [];

a1["asd"] = 'what?';
// console.log(a1);
var a2 = [1,2,3,4,5,66];
// console.log(String(a2));
// console.log(a2.join('_'));

var data=[];
data[0]=[1,2,3,4,5]
data[1]=['a','b','c'];
console.log(data);

for(var i=0;i<data.length;i++){
    for(var o=0;o<data[i].length;o++){
        console.log(data[i][o]);
    }
}
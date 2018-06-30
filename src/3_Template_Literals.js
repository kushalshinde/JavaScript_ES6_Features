"use strict"

let name = "John";

function makeUpperCase(word){
    return word.toUpperCase();
}


let template = 
   `<h1>${makeUpperCase('Hello')} ${name}</h1>  
     <p>This is a simple tempate in JavaScript</p>`;


document.getElementById("template").innerHTML = template;

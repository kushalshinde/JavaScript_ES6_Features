"use strict"

function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
    let that = this;
    return arr.map(function(x){
        console.log(that.prefix + x);                             // Cannot read property 'prefix' of undefined
    });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']);


//===============================================================================

//Arrow Function


Prefixer.prototype.prefixArray = function(arr){
    return arr.map((x) => {
        console.log(this.prefix + x);                             // Cannot read property 'prefix' of undefined
    });
}

let pre1 = new Prefixer('Hello ');
pre1.prefixArray(['Brad', 'Jeff']);

//===============================================================================

let add = function(a, b){
    let sum = a + b;
    console.log(sum);
    return false;
}

add(2,2);


let add1 = (a, b) => {
    let sum = a + b;
    console.log(sum);
    return false;
}

add1(3,4);

//===============================================================================


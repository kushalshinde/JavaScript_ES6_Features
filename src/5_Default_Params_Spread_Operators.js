'use strict'

//Default Parameters

function greet($greeting = 'Kushal'){
    console.log($greeting);
}

greet();

//------------------------------------------------

//Spread Operator

let args1 = [1,2,3];
let args2 = [4,5,6];


function test(){
    console.log(args1 + " "+args2);
}

//test();

//test.apply(null, args);

//test(...args);

test(...args1, ...args2);
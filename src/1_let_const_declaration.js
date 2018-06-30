"use strict"

function testVar(){
    var first = 30;

    if(true){
        var first = 50;
        console.log(first);
    }
    console.log(first);
}

//testVar();


function testLet(){
    let second = 30;

    if(true){
        let second = 50;
        console.log(second);
    }
    console.log(second);
}

//testLet();

//-----------------------------------------------------------------------
/*
for(var i=0; i<10; i++){
    console.log(i);
}
console.log(i);


for(let j=0; j<10; j++){
    console.log(j);
}
console.log(j);

*/
//-----------------------------------------------------------------------

const colors = [];

colors.push('red');
colors.push('green');

//colors = "green";        Uncaught TypeError: Assignment to constant variable.

//-----------------------------------------------------------------------




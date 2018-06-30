"use stricts"

let myArray = [1,2,3,4,3,2,6];

let mySet = new Set(myArray);

console.log(mySet);

mySet.add('100');
console.log(mySet);

mySet.add({a:1, b:2});
console.log(mySet);

mySet.delete(2);
console.log(mySet);

//mySet.clear();
console.log(mySet);


mySet.add('100');

console.log(mySet.size);

mySet.forEach(function(val){
    console.log(val);
});

console.log(mySet);

//----------------------------------------------------------------------

let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);

console.log(myMap);

myMap.set('c3','Foo');
console.log(myMap);

myMap.delete('a1');
console.log(myMap);

console.log(myMap.size);

//----------------------------------------------------------------------

let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model:'Civic'
}

carWeakSet.add(car1);

console.log(carWeakSet);

let car2 = {
    make: 'Toyota',
    model:'Camry'
}

carWeakSet.add(car2);

console.log(carWeakSet);

carWeakSet.delete(car1);

console.log(carWeakSet);

//-----------------------------------------------------------------------


let carWeakMap = new WeakMap();

let key1 = {
    id : 1
}

let car3 = {
    make: 'Honda',
    model:'Civic'
}


let key2 = {
    id : 2
}

let car4 = {
    make: 'Toyota',
    model:'Camry'
}

carWeakMap.set(key1, car3);

carWeakMap.set(key2, car4);

console.log(carWeakMap);

carWeakMap.delete(key1);

console.log(carWeakMap);














//Promises = deferred and Asynchronous Computations

// Immediately Resolved

var myPromise = Promise.resolve('Foo');

myPromise.then((res) => console.log(res));

//-----------------------------------------------------

var myPromise1 = new Promise(function(resolve, reject){
    setTimeout(() => resolve(4), 2000);
});

myPromise1.then((res) => {
    res += 3;
    console.log(res);
});

//----------------------------------------------------

// Using Promise to fetch a data from an API

function getData(method, url){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = function(){
            if(this.status >= 200 & this.status <= 300){
                resolve(xhr.response)
            }
            else{
                reject({
                    status: this.status,
                    statusText: this.statusText
                });
            }
        };

        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: this.statusText
            });
        };

        xhr.send();

    });
}

getData('GET', 'https://jsonplaceholder.typicode.com/users')
        .then(function(data){
            let todos = JSON.parse(data);
            let output = '';

            for(let todo of todos){
                output += `
                    <li>
                      <h3> ${todo.name} </h3>
                      <p>Address:- ${todo.address.street}, ${todo.address.suite}, ${todo.address.city}, ${todo.address.zipcode} </p>
                    </li>

                `;
            }

            document.getElementById('template').innerHTML = output;
            
        })
        .catch(function(err){
            console.log(err);
        });
;


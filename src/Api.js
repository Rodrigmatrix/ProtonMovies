
function getMovies(){
    return fetch('http://localhost:3000/movies')
    .then(data => data.json())
    .then(posts => console.log(posts))
}

function getSala1(){
    return fetch('http://localhost:3000/sala1')
    .then(data => data.json())
    .then(posts => console.log(posts))
}

function newSession(){

}

function getSala2(){
    return fetch('http://localhost:3000/sala2')
    .then(data => data.json())
    .then(posts => console.log(posts))
}

function getSala3(){
    return fetch('http://localhost:3000/sala3')
    .then(data => data.json())
    .then(posts => console.log(posts))
}

function getSala4(){
    return fetch('http://localhost:3000/sala4')
    .then(data => data.json())
    .then(posts => console.log(posts))
}

function getSala5(){
    return fetch('http://localhost:3000/sala5')
    .then(data => data.json())
    .then(posts => console.log(posts))
}


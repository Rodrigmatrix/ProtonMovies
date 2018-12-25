
async function getMovies() {
  var data = await fetch('http://localhost:3000/movies');
    return data.json();
}

async function getSessions() {
  var data = await fetch('http://localhost:3000/sessions');
    return data.json();
}

function newMovie() {
  var movie = {
    name: document.getElementById("movie_name").value,
    description: document.getElementById("description").value,
    release_date: document.getElementById("release_date").value,
    genre: $('select').val().toString(),
    runtime: document.getElementById("runtime").value,
    rated: $('#rated').val(),
    tickets_count: 0,
    playing: true,
    poster_image: document.getElementById("poster_link").value,
    trailer: document.getElementById("trailer_link").value,
    banner: document.getElementById("banner_link").value
  }

  var options = {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch('http://localhost:3000/movies', options)
    .then(res => res.json())
    .catch(error => console.error(error))

}

async function newSession() {
  var movieName = document.getElementById("movie_selected").value;
  var movies = await getMovies();  
  var id = 0;
  console.log(movies);
  for(var i in movies){
    if(movieName === movies[i].name){
      name=movies[i].id;
      break;
    }
  }
  id = parseInt(name,10);
  
  var session = {
    movie_id: name,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    auditorium: $('#auditorium').val(),
    image_type: $('#image_type').val(),
    ticket_price: null,
    seats: [
      {
        "seat": 1,
        "client_id": null
      },
      {
        "seat": 2,
        "client_id": null
      },
      {
        "seat": 3,
        "client_id": null
      },
      {
        "seat": 4,
        "client_id": null
      },
      {
        "seat": 5,
        "client_id": null
      },
      {
        "seat": 6,
        "client_id": null
      },
      {
        "seat": 7,
        "client_id": null
      },
      {
        "seat": 8,
        "client_id": null
      },
      {
        "seat": 9,
        "client_id": null
      },
      {
        "seat": 10,
        "client_id": null
      },
      {
        "seat": 11,
        "client_id": null
      },
      {
        "seat": 12,
        "client_id": null
      },
      {
        "seat": 13,
        "client_id": null
      },
      {
        "seat": 14,
        "client_id": null
      },
      {
        "seat": 15,
        "client_id": null
      },
      {
        "seat": 16,
        "client_id": null
      },
      {
        "seat": 17,
        "client_id": null
      },
      {
        "seat": 18,
        "client_id": null
      },
      {
        "seat": 19,
        "client_id": null
      },
      {
        "seat": 20,
        "client_id": null
      },
      {
        "seat": 21,
        "client_id": null
      },
      {
        "seat": 22,
        "client_id": null
      },
      {
        "seat": 23,
        "client_id": null
      },
      {
        "seat": 24,
        "client_id": null
      },
      {
        "seat": 25,
        "client_id": null
      },
      {
        "seat": 26,
        "client_id": null
      },
      {
        "seat": 27,
        "client_id": null
      },
      {
        "seat": 28,
        "client_id": null
      },
      {
        "seat": 29,
        "client_id": null
      },
      {
        "seat": 30,
        "client_id": null
      },
      {
        "seat": 31,
        "client_id": null
      },
      {
        "seat": 32,
        "client_id": null
      },
      {
        "seat": 33,
        "client_id": null
      },
      {
        "seat": 34,
        "client_id": null
      },
      {
        "seat": 35,
        "client_id": null
      },
      {
        "seat": 36,
        "client_id": null
      },
      {
        "seat": 37,
        "client_id": null
      },
      {
        "seat": 38,
        "client_id": null
      },
      {
        "seat": 39,
        "client_id": null
      },
      {
        "seat": 40,
        "client_id": null
      },
      {
        "seat": 41,
        "client_id": null
      },
      {
        "seat": 42,
        "client_id": null
      },
      {
        "seat": 43,
        "client_id": null
      },
      {
        "seat": 44,
        "client_id": null
      },
      {
        "seat": 45,
        "client_id": null
      },
      {
        "seat": 46,
        "client_id": null
      },
      {
        "seat": 47,
        "client_id": null
      },
      {
        "seat": 48,
        "client_id": null
      },
      {
        "seat": 49,
        "client_id": null
      },
      {
        "seat": 50,
        "client_id": null
      }
    ]
  }
  
  switch(session.image_type){
    case "IMAX 3D":
    session.ticket_price="40.00"
    break;

    case "IMAX 2D":
    session.ticket_price="35.00"
    break;

    case "3D":
    session.ticket_price="30.00"
    break;

    case "2D":
    session.ticket_price="25.00"
    break;
  }

  if(session.movie_id == 0){
    return 0;
  }
  var options = {
    method: 'POST',
    body: JSON.stringify(session),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch('http://localhost:3000/sessions', options)
    .then(res => res.json())
    .catch(error => console.error(error))
}

function updateSession() {
  var options = {
    method: 'PUT',
    body: JSON.stringify(session),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch('http://localhost:3000/sessions', options)
    .then(res => res.json())
    .catch(error => console.error(error))
}

function updateMovie() {
  var options = {
    method: 'PUT',
    body: JSON.stringify(movie),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch('http://localhost:3000/movies', options)
    .then(res => res.json())
    .catch(error => console.error(error))
}

function deleteMovie() {
  var options = {
    method: 'DELETE',
    body: JSON.stringify(movie),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch('http://localhost:3000/movies', options)
    .then(res => res.json())
    .catch(error => console.error(error))
}

function deleteSession() {
  var options = {
    method: 'DELETE',
    body: JSON.stringify(session),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch('http://localhost:3000/sessions', options)
    .then(res => res.json())
    .catch(error => console.error(error))
}
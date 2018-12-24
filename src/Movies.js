function displayMovies(){
    getMovies().then(function(movies){
        console.log(movies);
        for(var i in movies){
            document.getElementById("moviesPlaying").innerHTML+=( `
            <div  class="card hoverable">
                <div class="card-image">
                  <img src="${movies[i].poster_image}">
                  <span class="card-title" position="center">${movies[i].name}</span>
                </div>
                <div class="card-content">
                  <p>${movies[i].description}</p>
                </div>
                <div class="card-action">
                  <a href="moviePage.html?movieid=1">Ver mais</a>
                </div>  
              </div>
            `);
        }
    })
    
}

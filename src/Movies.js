function displayPlayingMovies(){
    getMovies().then(function(movies){
        console.log(movies);
        for(var i in movies){
            if(movies[i].playing == true){
                document.getElementById("moviesPlaying").innerHTML+=( `
                <div class="card hoverable">
                    <div class="card-image">
                        <img src="${movies[i].poster_image}">
                        <span class="card-title" position="center">${movies[i].name}</span>
                    </div>
                    <div class="card-content">
                        <p>${movies[i].description}</p>
                    </div>
                    <div class="card-action">
                        <a href="moviePage.html?movieid=${movies[i].id}">Ver mais</a>
                    </div>
                </div>
            `);
            }
            else{
                document.getElementById("moviesPlaying").innerHTML+=( `
                <div class="card hoverable">
                    <div class="card-image">
                        <img src="${movies[i].poster_image}">
                        <span class="card-title" position="center">${movies[i].name}</span>
                    </div>
                    <div class="card-content">
                        <p>${movies[i].description}</p>
                    </div>
                    <div class="card-action">
                        <a href="moviePage.html?movieid=${movies[i].id}">Ver mais</a>
                    </div>  
                </div>
            `);
            }
        }
    })
}



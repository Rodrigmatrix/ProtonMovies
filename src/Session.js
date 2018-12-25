async function displaySessions(){
    var url = window.location.href;
    var arr = url.split("movieid=");
    console.log(arr);
    var id = parseInt(arr[1], 10);
    console.log(id);
    var movies = await getMovies();
    console.log(movies);
    var sessions = await getSessions();
    for(var i in sessions){

        if(sessions[i].movie_id == id){
            document.getElementById("tableSessions").innerHTML+=( `
            <tr>
                <td>${movies[id-1].name}</td>
                <td>${sessions[i].auditorium}</td>
                <td>${sessions[i].image_type}</td>
                <td>
                <a href="file:///Users/rodrigogomes/Documents/Codes/ProtonMovies/src/Seats/pickSeat.html?sessionid=${sessions[i].id}" class="blue left waves-effect waves-light btn ">${sessions[i].time}</a>
                </td>
            </tr>
            `);
        }
    }
}

async function displaySessionsInfo(){
    var url = window.location.href;
    var arr = url.split("movieid=");
    console.log(arr);
    var id = parseInt(arr[1], 10);
    console.log(id);
    var movies = await getMovies();
    console.log(movies);
    for(var i in movies){
        if(movies[i].id == id){
            document.getElementById("pageName").innerHTML=( `
                ${movies[i].name + " - Sessões"}
            `);
            document.getElementById("trailer").innerHTML=( `
            <iframe width="560" height="315" src="${movies[i].trailer}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <!--img width="360" height="315" src="${movies[i].poster}"-->
            </div>
            `);
        }
    }
}

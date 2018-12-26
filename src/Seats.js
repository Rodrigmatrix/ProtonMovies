var selectedArray = new Array();
var size=0;
function setSeats(session){
    //console.log(session);
    console.log("teste "+session.seats[0].client_id);
    for(var i=0;i<=49;i++){
        var value = session.seats[i].client_id;
        if(value == null){
            document.getElementById(i+1).src = "free.png";
            selectedArray[i+1]=null;
        }
        else{
            document.getElementById(i+1).src = "taken.png";
            selectedArray[i+1]=-1;
        }
    }
    console.log("array "+selectedArray);
}

function rated(movie_rated){
    switch(movie_rated){
        case "Livre":
        return "https://www.jota.info/wp-content/uploads/2015/11/2000px-DJCTQ_-_L.svg_-1024x1024.png?x48657";

        case "10 Anos":
        return "https://blogjatefalei.files.wordpress.com/2014/09/classificacao_10anos.png";

        case "12 Anos":
        return "https://upload.wikimedia.org/wikipedia/commons/2/2e/DJCTQ_-_12.JPG";

        case "14 Anos":
        return "https://blogjatefalei.files.wordpress.com/2014/09/classificacao_14anos.png";

        case "16 Anos":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/400px-DJCTQ_-_16.svg.png";

        case "18 Anos":
        return "https://i1.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/c/cc/DJCTQ_-_18.JPG/300px-DJCTQ_-_18.JPG";

    }
}

function showSessionInfo(session,movie){

    document.getElementById("sessionInfo").innerHTML=( `
    <div class="row">
    <div class="col s6" style="height: 415px; border-top:0; border-left:0; ">
      <img src="${movie.poster_image}" class="" style="height: 415px; width: 270px; border-left:0; border: none; border-spacing: 0px; ">
    </div>

    <div class="col-content s4">
      <p class=" center flow-text">${movie.name}</p>
      <p><label for=""></label>${session.auditorium}</p>
      <p><label for="">Duração: </label>${movie.runtime +" min"}</p>
      <p><label for="">Horário: </label>${session.time}</p>
      <p><label for="">Data: </label>${session.date}</p>
      <p><label class="center"></label>${session.image_type}</p>
      <img src="${rated(movie.rated)}" class="center"
        style="height: 30px; width: 30px;">
    </div>
  </div>

    `);
}
function printSelected(seat){
    console.log(selectedArray);
        document.getElementById("noneSelected").innerHTML=( `
       
        `);
        document.getElementById("selectedSeats").innerHTML+=( `
        <div id="${"array"+seat}">
        <h6 class="center" >${selectedArray[seat]}</h6>
        </div>       
        `);
}

function setButton(){
    if(size != 0){
        document.getElementById("btnTicket").innerHTML=( `
            <a class="blue waves-effect waves-light right btn"  onclick="selectTicketsPrice()">Tipo de Ingresso</a>    
        `);
        
        
    }
    else{
        document.getElementById("btnTicket").innerHTML=( `
            <a class="blue waves-effect waves-light right btn disabled"  onclick="selectTicketsPrice()">Tipo de Ingresso</a>    
        `);
        document.getElementById("noneSelected").innerHTML=( `
            <h6 class="center">Nenhum</h6>
        `);
    }
}

function removeSelected(seat){
    console.log(selectedArray);
    $("#array"+seat).remove();
}

function selectSeat(seat){
    // //localStorage.setItem("lastname", "Smith");
    // console.log(localStorage.getItem("lastname"));
    var image = document.getElementById(seat).src;
    image = image.split("/");
    image = image[9];
    if(image == "selected.png"){
        document.getElementById(seat).src = "free.png";
        selectedArray[seat]=null;
        removeSelected(seat);
        size--;
        setButton();
    }
    if(image == "free.png"){
        document.getElementById(seat).src = "selected.png";
        selectedArray[seat]=seat;
        printSelected(seat);
        size++;
        setButton();
    }
}
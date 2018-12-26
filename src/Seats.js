function setSeats(session){
    console.log(session);
    for(var i=0;i<=50;i++){
        if((session.seats[i].client_id) == null){
            document.getElementById(i+1).src = "free.png";
        }
        else{
            document.getElementById(i+1).src = "taken.png";
        }
    }
}

function selectSeat(seat){
    console.log("chamou "+seat);
    var image = document.getElementById(seat).src;
    image = image.split("/");
    image = image[9];
    console.log(image);
    if(image == "selected.png"){
        console.log("entrou");
        document.getElementById(seat).src = "free.png";
    }
    if(image == "free.png"){
        console.log("entrou");
        document.getElementById(seat).src = "selected.png";
    }
}
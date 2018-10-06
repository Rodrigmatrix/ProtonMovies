function Assento(ocupado,numeroAssento){
    this.ocupado = ocupado;
    this.numeroAssento = numeroAssento;
}
var arrayAssentos = new Array();
for(var i=0;i<=2;i++){
    let assento = new Assento(false,i);
    arrayAssentos[i] = assento; 
}
for(var i=0;i<=2;i++){
    if(arrayAssentos[i].ocupado==true){
        document.getElementById("img").src = "src/livre.png"
    }
    else{
        document.getElementById("img").src = "src/ocupado.png"
    }
}
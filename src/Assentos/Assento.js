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
var image = 'livre';
        var qtdIngressos=0;
        var arrayIngressos = new Array();
        function setAssento(assento){
            if(image == 'livre'){
                document.getElementById(assento).src = "ocupado.png";
                if(arrayIngressos[qtdIngressos]==null){
                    arrayIngressos[qtdIngressos]=assento;
                    qtdIngressos++;
                }
                image = 'ocupado';
            }
            else if(image == 'ocupado'){
                document.getElementById(assento).src = "livre.png";
                if(arrayIngressos[qtdIngressos]==null){
                    arrayIngressos[qtdIngressos]=assento;
                    qtdIngressos++;
                }
                image = 'livre';
            }
            
        }
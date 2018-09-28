class Sala{

    constructor(numeroSala,cadeiras,tipo) {
        this.numeroSala = numeroSala;
        this.cadeiras = cadeiras;
        if(tipo==="imax"){
           tipo = "imax"; 
        }
        else if(tipo==="normal"){
            tipo = "normal";
        }
    }

}
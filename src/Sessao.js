class Sessao{

    constructor(data,horario,numeroSala,cadeiras,filme){
        this.data = data;
        this.horario = horario;
        this.numeroSala = numeroSala;
        this.cadeiras = cadeiras;
        this.filme = filme;
    } 

    comprarIngresso(userid,cadeira){
        for(var i=0;i<cadeiras.sizeof();i++){
            if(cadeiras[i]!=null){
                cadeiras[cadeira]=userid;
            }
        }
        
    }

    cancelarCompra(userid){
        for(var i=0;i<cadeiras.sizeof();i++){
            if(cadeiras[i]===userid){
                cadeiras[i]=null;
            }
        }
    }

}
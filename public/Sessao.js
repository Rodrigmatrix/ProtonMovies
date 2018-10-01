class Sessao extends Sala{

    constructor(data,horario,numeroSala,cadeiras,filme){
        this.data = data;
        this.horario = horario;
        this.numeroSala = numeroSala;
        this.cadeiras = cadeiras;
        this.filme = filme;
        cadeirasArray[cadeiras];
    } 

    comprarIngresso(userid,cadeira){
        if(cadeirasArray[cadeira]!=null){
            cadeirasArray[cadeira]=userid;
        }
        else{
            M.toast({html: 'Assento já está ocupada'}); 
        }     
    }

    cancelarCompra(cadeira){
        if(cadeirasArray[cadeira]!=null){
            cadeirasArray[cadeira]=null;
        }
        else{
            M.toast({html: 'Assento não está ocupado'}); 
        }
    }

}
var minutes = 4;
var seconds = 60;
function getPurchaseData(){
    var info = JSON.parse(localStorage.getItem("ticketsPrice"));
    console.log(info);
    document.getElementById("priceCard").innerHTML=( `
    <input id="card" type="radio" name="payment" >
    Pague R$ ${info[0]} com seu cartão
        `);
        document.getElementById("pricePayPal").innerHTML=( `
        <input id="paypal" type="radio" name="payment" >
            Pague R$ ${info[0]} com o PayPal 
        `);
}
function showCountdown(){
        setInterval(function(){
            if(minutes == 0 && seconds == 0){
                document.getElementById("timeLeft").innerHTML=( `
            <h4 class="title">Tempo Restante: 00:00</h4>
            `);
            }
            else if(seconds == 0){
                document.getElementById("timeLeft").innerHTML=( `
                <h4 class="title">Tempo Restante: ${minutes}:${seconds}</h4>   
            `);
            minutes--;
            seconds = 59;
            }
            else{
                document.getElementById("timeLeft").innerHTML=( `
                <h4 class="title">Tempo Restante: 0${minutes}:${seconds}</h4>
                `);
                seconds--;
            }
            
        }, 1000);
}

function countdown(){
    showCountdown();
    setTimeout(function(){
         alert("Tempo da Sessão expirado. Você será redirecinado para a página inicial");
         localStorage.clear();
         clearTimeout();
         window.open("index.html", "_self");
         
    }, 300010);
    
}


$(document).ready(function() {
    // Radio box border
    $('.method').on('click', function() {
      $('.method').removeClass('blue-border');
      $(this).addClass('blue-border');
    });
  
    // Validation
    var $cardInput = $('.input-fields input');
  
    $('.next-btn').on('click', function(e) {
  
      $cardInput.removeClass('warning');
  
      $cardInput.each(function() {
         var $this = $(this);
  
         if (!$this.val()) {
           $this.addClass('warning');
         }
      });
  
    });
   
});
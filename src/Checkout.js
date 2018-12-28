var minutes = 4;
var seconds = 59;
var expired = false;
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};
function getPurchaseData(){
    var info = JSON.parse(localStorage.getItem("ticketsPrice"));
    if(info == null){
        // alert("Sessão Expirada. Você será redirecionado para a página inicial");
        // window.open("index.html", "_self");
    }
    else{
        document.getElementById("priceCard").innerHTML=( `
    <input id="card" type="radio" name="payment" >
    Pague R$ ${info[0]} com seu cartão
        `);
        document.getElementById("pricePayPal").innerHTML=( `
        <input id="paypal" type="radio" name="payment" >
            Pague R$ ${info[0]} com o PayPal 
        `);
    }
    
}

function goToIndex(){
    localStorage.clear();
    alert("Sua sessão será expirada. Você será redirecinado para a página inicial");
    window.open("index.html", "_self");
}

async function getSessions() {
    var data = await fetch('http://localhost:3000/sessions');
      return data.json();
}

async function makePayment(){
    var info = JSON.parse(localStorage.getItem("ticketsPrice"));
    var sessions = await getSessions();
    //var price = info[0];
    var card_number;
    var name;
    var expire_date;
    var cvv;
    expired = true;
    window.open("purchaseDetails.html", "_self");
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

// define(function (require) {
//     var stripe = require("stripe")("sk_test_HWUFFsYRssueLSfoNn9yCMqj");
// });
// define(['require', 'stripe'], function (require) {
//     var stripe = require("stripe")("sk_test_HWUFFsYRssueLSfoNn9yCMqj");
// });

function countdown(){
    showCountdown();
    setTimeout(function(){
         alert("Tempo da Sessão expirado. Você será redirecinado para a página inicial");
         localStorage.clear();
         expired = true;
         clearTimeout();
         window.open("index.html", "_self");
         
    }, 300010);
    
}

window.onbeforeunload = function(){
    localStorage.clear();
    if(expired == true){
        return undefined;
    }
    else{
        return 'Você irá perder os seus ingressos e sua sessão irá expixar ao fechar essa página';
    }
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
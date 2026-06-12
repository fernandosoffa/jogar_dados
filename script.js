let tentativas = 10;
let placar = 0;
let recorde = 0;

function jogarDado(){
    let mensagem = document.getElementById("mensagem");
    let mensagemTentativas = document.getElementById("tentativas");
    let mensagemPlacar = document.getElementById("placar");
    let mensagemRecorde = document.getElementById("recorde");

    if(tentativas <= 0){
        mensagem.innerText = "Suas tentativas acabaram! 😢";
        return;
    }

    let resultado = Math.floor(Math.random() * 6) + 1;
      
    if(resultado == 6){
        mensagem.innerText = `Você tirou ${resultado}. Parabéns, você venceu! 🏅`;
        placar++;
        mensagemPlacar.innerText = placar;

        if (placar > recorde) {
            recorde = placar;
            mensagemRecorde.innerText = recorde;
        }
        
    }else{
        mensagem.innerText = `Você tirou ${resultado}. Desculpe, você perdeu!💣 `;
    
    }
    tentativas--;
    mensagemTentativas.innerText = tentativas;
}
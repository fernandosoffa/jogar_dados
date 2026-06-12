function jogarDado(){
    let resultado = Math.floor(Math.random() * 6)+1;
    let mensagem = document.getElementById("mensagem");
    let tentativas = 3;
    let mensagemTentativas = document.getElementById("tentativas");

    if(resultado == 6 && tentativas >= 0){
        mensagem.innerText = `Você tirou ${resultado}. Parabéns, você venceu! 🏅`;
        tentativas--;
        tentativas.innerText = `${tentativas}`;
    }else{
        mensagem.innerText = `Você tirou ${resultado}. Desculpe, você perdeu!💣 `;
        tentativas--;
         tentativas.innerText = `${tentativas}`;
    }
}
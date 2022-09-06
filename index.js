const resposta = Math.floor(Math.random()* 10 + 1);
let advinhos = 0;

document.getElementById("submitButton").onclick = function(){
    let tentativas = document.getElementById("guessField").value
    advinhos += 1;

    if(tentativas == resposta){
        alert(`${resposta} é o numero você ACERTOU !!! , eu te dei ${tentativas} tentativas`);
    }
    else if (tentativas < resposta){
        alert("Número muito pequeno , TALVEZ NA PROXIMA AMIGÃO !!");
    }
    else{
        alert("Número muito grande SINTO MUITO");
    }
    
}

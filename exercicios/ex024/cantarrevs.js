function contar(){
    var saida = document.getElementById('resultado')
    saida.innerHTML +=`<h2>Contagem Regressiva de 10 a 1</h2>`
    for(var c = 10; c >= 1;c--){
        saida.innerHTML += ` ${c} \u{1F449}`
    }
    saida.innerHTML += `\u{1F3C1}`
}
let saida = window.document.getElementById('resultado')
function contar(){ 
    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`
    for(let c = 1; c <= 10;c++){
        saida.innerHTML += `${c} \u{1F449}`
    }
    saida.innerHTML +=  `\u{1F3C1}	`
}
function limpar(){
    saida.innerHTML = ""
}
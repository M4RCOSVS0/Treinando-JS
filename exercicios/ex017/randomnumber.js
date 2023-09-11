function clicar(){
    let res = document.getElementById('resultado')
    let num = Math.floor(Math.random() * 100 + 1)
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}<mark/>!</p>`
    
}
function limpar(){
    let ask = document.getElementById('resultado')
    ask.innerHTML = null
}
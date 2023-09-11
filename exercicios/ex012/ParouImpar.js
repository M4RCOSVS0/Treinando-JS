function PouI(){
    let n1 = Number(window.prompt("Digite um número:"))
    let res = window.document.getElementById('resultado')
    let num
    if (n1 % 2 == 0 ){
        num = "PAR"    
    }else {
        num = "ÍMPAR"
    }
    res.innerHTML = `<p>O número ${n1} que foi digitado é <strong>${num}!<strong> </p>`
}
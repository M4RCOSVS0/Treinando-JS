function fatorar(){
    let num = Number(window.document.getElementById('num1').value)
    let saída = window.document.getElementById('saida')

    if(num.toString() == 0){
        alert('erro')
    }else{
        saída.innerHTML += `<h2>Calculando ${num}!</h2>`
        let c = num
        var z = 1
        while (c > 1 ){
            saída.innerHTML += (`${c} x `) 
            z *= c
            c--
        }
    }saída.innerHTML += (`1 = <strong>${z.toLocaleString('pt-BR')}<strong>`)
}



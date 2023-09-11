function contar(){
    var n1 = window.document.getElementById('num1')
    var saída = window.document.getElementById('saida')
    if(n1.value.length == 0){
        alert(`'ERROR' faltam dados!`)
    }else{
        var n = Number(n1.value)
        saída.innerHTML = `<h2>tabuada de ${n} </h2>`
        for(let c = 1;c <= 10;c++){
            let res = n * c
            saída.innerHTML += `${n} x ${c} = <strong>${res}</strong> <br>`
        }
    }
}
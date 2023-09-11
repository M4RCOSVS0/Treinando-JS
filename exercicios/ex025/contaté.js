function Contando(){
    var Num = window.document.getElementById('fnum')
    var saida = window.document.getElementById('saida')
    if(Num.value < 0){
        alert("errado!")
    }
    if(Num.value.length == 0){
        window.alert("faltam dados!")
    }else{
        var n = Number(Num.value)
        if(n >= 0){
            saida.innerHTML += `<h2>Contando de 0 até ${n}</h2>`
            for(let c = 0; c <= n; c++ ){
                saida.innerHTML += `${c} \u{1F449}`
            }
            saida.innerHTML += `\u{1F3C1}`	
        }
    }

}
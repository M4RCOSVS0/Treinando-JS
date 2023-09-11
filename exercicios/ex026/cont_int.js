function Contando(){
    let inicio = window.document.getElementById('num1')
    let final = window.document.getElementById('num2')
    let sai = window.document.getElementById('saída')
    if(inicio.value == 0){
       alert(`ERROR, faltam dados para a operação!`) 
    }else{
        let i = Number(inicio.value)
        let f = Number(final.value)
        sai.innerHTML += `<h2>Contando de ${i} até ${f} </h1>`
        if(i <= f){
            while(i <= f){
                sai.innerHTML += `${i} \u{1F449}`
                i++
            }
        }else{
            while(f <= i){
                sai.innerHTML += `${i} \u{1F449}`
                i--
            }
        }sai.innerHTML += `\u{1F3C1}`
    }
}
function inicio(){
    let nun1 = Number(window.prompt("Digite um número:"))
    let nun2 = Number(window.prompt("Digite outro número:"))
    let res = window.document.getElementById('resultado')
    let maior 
    if (nun1 > nun2){
        maior = nun1
        res.innerHTML = `<p>Analisando os valores <mark>${nun1}</mark> e <mark>${nun2}</mark>, o maior valor é <strong>${maior}</strong> <p>`
    }else if(nun1 == nun2){
        res.innerHTML = `<p>Analisando os valores <mark>${nun1}</mark> e <mark>${nun2}</mark>, ambos são <strong>IGUAIS</strong> <p>`
    }else{
        maior = nun2
        res.innerHTML = `<p> Analisando os valores <mark>${nun1}</mark> e <mark>${nun2}</mark>, o maior valor é <strong>${maior}</strong> <p>` 
    }
}
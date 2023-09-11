function calcular(){
    let n1 = Number(window.prompt("Primeiro valor:"))
    let n2 = Number(window.prompt("Segundo valor:"))
    let opção = Number(window.prompt(`Valores informados: ${n1} e ${n2}\nO que vamos fazer?\n[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir`))
    let res = document.getElementById('resultado')
    res.innerHTML = `<h2>Calculando...</h2>`
    switch(opção){
        case 1:
            let adição = n1 + n2
            res.innerHTML += `<p>${n1} + ${n2} = <strong>${adição}</strong> </p>`
            break
        case 2:
            let subtração = n1 - n2
            res.innerHTML += `<p>${n1} - ${n2} = <strong>${subtração}</strong> </p>`
            break
        case 3:
            let multiplicação = n1 * n2
            res.innerHTML += `<p>${n1} x ${n2} = <strong>${multiplicação}</strong> </p>`
            break
        case 4:
            let divisão = n1 / n2
            res.innerHTML += `<p>${n1} / ${n2} = <strong>${divisão}</strong> </p>`
            break
        default:
            res.innerHTML +=`<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`

    }  
}
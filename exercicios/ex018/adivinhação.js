let res = document.getElementById('resultado')
let num = Number(Math.floor(Math.random() * 25 + 1))
function tentar(){
    let chance = Number(window.prompt('qual é o seu palpite?'))
    let res = document.getElementById('resultado')
    if(chance == num){
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${num}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }else if(num > chance){
        res.innerHTML += `<p> Você falou ${chance}. Meu número é <strong>MAIOR!</strong></p>` 
    }else{
        res.innerHTML += `<p> Você falou ${chance}. Meu número é <strong>MENOR!</strong></p>` 
    } 
}
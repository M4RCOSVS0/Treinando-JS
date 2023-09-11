let saida = document.getElementById('resultado')
function contar(){
    saida.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`
    for(let c = 1;c <= 10;c++){
        
        if(c % 2 == 1){
             
            saida.innerHTML += `${c} `    
             
        }else{
            saida.innerHTML += ` <mark><strong> ${c}</strong> </mark>`
        }
        saida.innerHTML += `\u{1F449}`  
    }
    saida.innerHTML += `\u{1F3C1}`
}
function limpar(){
   saida.innerHTML = `<p>Aperte o botão acima para contar</p>`
}	
	
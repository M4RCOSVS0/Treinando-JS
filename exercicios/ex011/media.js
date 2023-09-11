    function media(){
        let nome = window.prompt("Qual e o nome do aluno(a)?")    
        let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}? `))
        let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
        let med = Number((n1 + n2)/2)
        let res = window.document.querySelector('div#resultado')
        let msg
        if (med < 6) {
            msg = `Estude um pouco mais`
        }else {
            msg = `<p>Meus parabens!` 
        }    
        res.innerHTML = `<h3>Calculando a média final de <mark>${nome}</mark>. </h3>`  
        res.innerHTML += `<p>As notas Obtidas foram <mark>${n1} e ${n2}</mark>. <p>`
        res.innerHTML += `<p>A média final será <mark>${med}</mark>. </p>`
        res.innerHTML +=  `<p>A mensagem que temos é: <strong style= 'color: red;'>${msg}<strong></p>`

    }
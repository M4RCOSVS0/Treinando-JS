function estação(){
    let mês = window.prompt("Digite o mês em extenso ou seu número(ex: Setembro, 3)")
    let estação 

switch(mês.toUpperCase()){//transforma oq será digitado em MAIÚSCULO.
    case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': case '1': case '2': case '3':
    estação = 'INVERNO'   
    if(mês == '1'){
        mês = "JANEIRO"
    }else if(mês == '2'){
        mês = 'FEVEREIRO'
    }else{
        mês = 'MARÇO'
    }
    break
    case 'ABRIL': case 'MAIO': case 'JUNHO': case '4': case '5': case '6':
        estação = 'PRIMAVERA'   
        if(mês == '4'){
            mês = "ABRIL"
        }else if(mês == '5'){
            mês = 'MAIO'
        }else{
            mês = 'JUNHO'
        } 
    break
    case 'JULHO': case 'AGOSTO': case 'SETEMBRO': case '7': case '8': case '8':
        estação = 'VERÃO'  
        if(mês == '7'){
            mês = "JULHO"
        }else if(mês == '8'){
            mês = 'AGOSTO'
        }else{
            mês = 'SETEMBRO'
        }  
    break
    case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO': case '10': case '11': case '12':
        estação = 'OUTONO'  
        if(mês == '10'){
            mês = "OUTUBRO"
        }else if(mês == '11'){
            mês = 'NOVEMBRO'
        }else{
            mês = 'DEZEMBRO'
        }  
    break
    default:
        estação = 'INDEFINIDA'
    break
}
let res = window.document.getElementById("resultado")
res.innerHTML = `<p>No mês de <mark>${mês.toLowerCase()}</mark>, estamos na estação <mark><strong>${estação}</strong></mark></p>`
}
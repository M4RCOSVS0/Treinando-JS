/*function inicio(){
    let res = window.document.getElementById('resultado')
    let data = new Date()
    let dia = data.getDate()
    let mês = data.getMonth()
    let ano = data.getFullYear()
    let dia_sem = data.getDay()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()
    res.innerHTML = `<p>Dia: <mark>${dia}</mark> </p>`
    switch(mês){
        case 0:
            res.innerHTML += `<p>Mês:  <mark>janeiro</mark> </p>`
            break
        case 1:
            res.innerHTML += `<p>Mês: <mark>Fevereiro</mark> </p>`
            break
        case 2:
            res.innerHTML += `<p>Mês: <mark>Março</mark> </p>`
            break
        case 3:
            res.innerHTML += `<p>Mês: <mark>Abril</mark> </p>`
            break
        case 4:
            res.innerHTML += `<p>Mês: <mark>Maio</mark> </p>`
            break
        case 5:
            res.innerHTML += `<p>Mês: <mark>Junho</mark> </p>`
            break
        case 6:
            res.innerHTML += `<p>Mês: <mark>Julho</mark> </p>`
            break
        case 7:
            res.innerHTML += `<p>Mês: <mark>Agosto</mark></p>`
            break
        case 8:
            res.innerHTML += `<p>Mês: <mark>Setembro</mark></p>`
            break
        case 9:
            res.innerHTML += `<p>Mês: <mark>Outubro</mark></p>`
            break
        case 10:
            res.innerHTML += `<p>Mês: <mark>Novembro</mark></p>`
            break
        case 11:
            res.innerHTML += `<p>Mês: <mark>Dezembro</mark></p>`
            break
        default:
            ('dezembrow')
            break
    }
    res.innerHTML += `<p>Ano: ${ano} </p>`
    switch(dia_sem){
        case 0:
            res.innerHTML += `<p>Dia da semana: <mark>Domingo</mark> </p>`
            break
        case 1: 
            res.innerHTML += `<p>Dia da semana: <mark>Segunda</mark> </p>`
            break
        case 2:
            res.innerHTML += `<p>Dia da semana: <mark>Terça</mark> </p>`
            break
        case 3: 
            res.innerHTML += `<p>Dia da semana: <mark>Quarta</mark> </p>`
            break
        case 4:
            res.innerHTML += `<p>Dia da semana: <mark>Quinta</mark> </p>`
            break
        case 5:
            res.innerHTML += `<p>Dia da semana: <mark>Sexta</mark></p>`
            break
        default:
            res.innerHTML += `<p>Dia da semana: <mark>Sábado</mark></p>`
            break
        }
    res.innerHTML += `<p>Hora: <mark>${hora}</mark> </p>`
    res.innerHTML += `<p>Minutos: <mark>${min}</mark> </p>`
    res.innerHTML += `<p>Segundos: <mark>${seg}</mark> </p>`
}
*/
function info() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let ano = agora.getFullYear()
    let sem = agora.getDay()  // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
    saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    saida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
}
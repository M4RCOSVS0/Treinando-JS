function calcular(){
    let data = new Date()
    let ano_atual = data.getFullYear()
    let ano = Number(window.prompt("Em que ano você nasceu?"))
    let idade = (ano_atual - ano)
    let res = document.getElementById('resultado')
    res.innerHTML = `<p>Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em ${ano_atual}.</p>`
}
let C = 0
let resp = window.document.querySelector('section#resultado')
function mais1(){
    C ++
    resp.innerHTML = `<p>O contador está com <mark>${C}</mark>.</p>`
}
function zerar(){
    C = 0
    resp.innerHTML = null   
}
console.log('oi')
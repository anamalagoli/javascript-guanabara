function Tabuada() {
    let res = document.getElementById('res')
    let num = document.getElementById('txtnum')

    for (let c = num; c <= 10; c ++) {
        res.innerHTML = ` ${num} x 1 = ${c}`
    }
}
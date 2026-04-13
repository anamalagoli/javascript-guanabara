function Gerar() {
    let tab = document.getElementById('tabuada')
    let num = document.getElementById('txtnum')

    if (num.value.lenght == 0) {
        alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""

        for (let c = 1; c <= 10; c ++) {
        let item = document.createElement("option")
        item.text = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
        }
    }
}
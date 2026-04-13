function gerar() {
    let tab = document.getElementById('tabuada')
    let num = document.getElementById('txtnum')

    if (num.value.length == 0) {
        alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""

        for (let c = 1; c <= 10; c ++) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item) //adicionar um elemento filho
        }
    }
}
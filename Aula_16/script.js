let valores = []

let res = document.getElementById('res')

function adicionar() {
    let tab = document.getElementById('tab')
    let inputnum = document.getElementById('txtnum')
    let num = Number(inputnum.value)

    if (inputnum.value.length == 0) {
        alert('Por favor, digite um número.')
    } else if (num < 1 || num > 100) {
        alert('Por favor, digite um número entre 1 e 100.')
    } else if (valores.includes(num)) {
        alert('Esse número já foi adicionado!')
    } else {
        valores.push(num)

        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        tab.appendChild(item)
    }
    res.innerHTML = ""
}

function finalizar() {
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)

    let soma = 0
    for (let pos in valores) {
        soma += valores[pos] /*pegue o valor que está naquela posição*/
    }

    let media = (soma / valores.length).toFixed(2)

    res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>` 
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` 
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>` 
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é  ${media}</p>`
}



let valores = []

let res = document.getElementById('res')
let tab = document.getElementById('tab')
let inputnum = document.getElementById('txtnum')

function adicionar() {
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
    inputnum.value = ""
    inputnum.focus()
    res.innerHTML = ""
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores a lista antes de finalizar!')
    } else {
        let maior = Math.max(...valores) //valor máximo
        let menor = Math.min(...valores) //valor mínimo

        //somar os valores
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos] /*pegue o valor que está naquela posição*/
        }

        //fazer a média dos valores
        let media = (soma / valores.length).toFixed(2)

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>` 
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` 
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>` 
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é  ${media}.</p>`
    }
}

function limpar() {
    tab.options.length = 0
}



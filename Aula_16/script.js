let valores = []

let res = document.getElementById('res')
let tab = document.getElementById('tab')
let inputnum = document.getElementById('txtnum')

//funcionar com o enter
inputnum.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

//funções auxiliares
function numeroValido(n) {
    return n >= 1 && n <= 100
}

function jaExiste(n, lista) {
    return lista.includes(n)
}

function adicionar() {
    let num = Number(inputnum.value)

    if (!inputnum.value) {
        res.innerHTML = `<p style="color:red;">Por favor, digite um número.</p>`
    } else if (!numeroValido(num)) {
        res.innerHTML = `<p style="color:red;">Digite um número entre 1 e 100.</p>`
    } else if (jaExiste(num, valores)) {
        res.innerHTML = `<p style="color:red;">Esse número já foi adicionado!</p>`
    } else {
        valores.push(num)

        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        tab.appendChild(item)
        res.innerHTML = ""
    }
    inputnum.value = ""
    inputnum.focus()
}

function finalizar() {
    if (valores.length == 0) {
        res.innerHTML = `<p style="color:red;">Adicione valores antes de finalizar!</p>`
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

//botão para limpar tudo
function limpar() {
    tab.options.length = 0   // limpa o select
    valores = []             // limpa o array
    res.innerHTML = ""       // limpa o resultado (opcional)

    inputnum.value = ""
    inputnum.focus()
}

//botão de remover itens do select
function remover() {
    let selecionado = tab.selectedIndex

    if (selecionado === -1) {
        res.innerHTML = `<p style="color:red;">Selecione um item para remover!</p>`
        return
    }

    valores.splice(selecionado, 1)   // remove do array na mesma posição
    tab.remove(selecionado)          // remove do select

    res.innerHTML = ""
    inputnum.focus()
}


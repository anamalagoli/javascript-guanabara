function Enviar() {
    let res = document.getElementById("resultado")
    let inicio = Number(document.getElementById("idinicio").value)
    let fim = Number(document.getElementById("idfim").value)
    let passo = Number(document.getElementById("idpasso").value)

    if (passo <= 0) {
        alert("Passo Inválido! Considerando passo = 1")
        passo = 1
    }

    res.innerHTML = ""

    for (var c = inicio; c <= fim; c += passo) {
        res.innerHTML += `${c} \u{1F449} `
    }

    res.innerHTML += "fim \u{1F3C1}"
}


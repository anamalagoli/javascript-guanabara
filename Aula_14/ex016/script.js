function Enviar() {
    let res = document.getElementById("resultado")
    let inicio = document.getElementById("idinicio").value
    let fim = document.getElementById("idfim").value
    let passo = document.getElementById("idpasso").value

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('Digite um número válido')
    } else {
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        
        res.innerHTML = ""

        if (p <= 0) {
        alert("Passo Inválido! Considerando passo = 1")
        passo = 1
        }     

        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else { 
            //contagem descrente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
    }

    res.innerHTML += "fim \u{1F3C1}"
}

function Enviar() {
    let res = document.getElementById("resultado")
    let inicio = document.getElementById("idinicio").value
    let fim = document.getElementById("idfim").value
    let passo = document.getElementById("idpasso").value

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('Digite um número válido')
    } else {
        alert('Tudo OK')
    }
}
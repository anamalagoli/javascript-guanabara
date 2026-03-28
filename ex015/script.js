function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var rano = fano.value
    var res = document.getElementById('res')

    if (rano.length == 0 || Number(rano) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(rano)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criaça
                img.setAttribute('src', 'bebemas.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmas.png')
            } else if (idade < 60) {  
                //adulto
                img.setAttribute('src', 'adultomas.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'idosomas.png')
                }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criaça
                img.setAttribute('src', 'bebefem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade < 60) {  
                //adulto
                img.setAttribute('src', 'adultofem.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'idosofem.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} ano(s).</p>`
        res.appendChild(img)
    }
}
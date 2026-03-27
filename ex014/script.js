function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if (hora >= 6 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.background = "#73ce96"
    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.png"
        document.body.style.background = "#a2564c"
    } else {
        img.src = "fotonoite.png"
        document.body.style.background = "#30494d"
    }
}



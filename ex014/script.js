function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 6) {
        img.src = "fotonoite.png"
    } else if (hora < 12) {
        img.src = "fotomanha.png"
    } else if (hora < 18) {
        img.src = "fototarde.png"
    } else {
        img.src = "fotonoite.png"
    }
}



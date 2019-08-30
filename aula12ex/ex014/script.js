function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12 ){
        //Bom dia
        img.src = 'sol.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'twitter.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        // Boa noite
        img.src = 'croatia.png'
        document.body.style.backgroundColor = '#515154'
    }
}


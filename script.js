function toggleMode(){
    const html = document.documentElement
    //ele acessa o documento no HTML //

    //modelo 1 de fazer//
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    //modelo 2 de fazer//
    html.classList.toggle('light')
    // pegar a tag img //
    const img = document.querySelector("#profile img")
    //pesquisa pelo seletor dentro do documento//
    // substituir a imagem
    if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light//
        img.setAttribute('src', './assets/avatar-light.png')
    // adicionar/ajustar um atributo + string do atributo//
    } else {
    // se tiver sem light mode, manter a imagem normal//
        img.setAttribute('src', './assets/avatar.png')
    }
}
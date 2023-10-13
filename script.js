function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar a tag img
  const img= document.querySelector("#profile img")

  //substituir a img
  if(html.classList.contains('light')) {
    //se estiver no light mode, adicionar img light
    img.setAttribute('src',"./assets/david.png")
  } else {
    //se estiver sem light mode, adicionar img  normal
    img.setAttribute('src',"./assets/david1.png")
  }
}
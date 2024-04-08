function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar tag img
  const img = document.querySelector("#profile img");
  const desc = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar avatar 2
    img.setAttribute("src", "./assets/Avatar-Light.png");
    desc.setAttribute("alt", "Foto de Sammuel Sobieski sorrindo usando óculos escuro");
} else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar-Dark.png");
    desc.setAttribute("alt", "Foto de Sammuel Sobieski sorrindo usando terno");
  }
}

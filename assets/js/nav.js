(function (){

  // Variáveis

  const nav = document.querySelector('nav')
  const menu = nav.querySelector('.opcoes')
  const botaoMenu = nav.querySelector('button.menu')

  // Adiciona a classe .scroll no navbar ao descer a tela

  function adicionarClasse () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 10) nav.classList.remove('scroll')
      else nav.classList.add('scroll')
    })
  }

  // Faz a abertura do menu na versão mobile

  function abrirMenu () {
    nav.addEventListener('click', (elemento) => {
      const abrirMenu = 'button.menu'
      if (!elemento.target.matches(abrirMenu)) return
      
      const menuAberto = menu.classList.contains('mostrar')
      if (menuAberto) menu.classList.remove('mostrar'), botaoMenu.classList.remove('ativo')
      else menu.classList.add('mostrar'), botaoMenu.classList.add('ativo')
    })
  }

  // Start
  adicionarClasse()
  abrirMenu()

}())


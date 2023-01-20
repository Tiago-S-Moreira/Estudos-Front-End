// getElementById()

/*const element = document.getElementById('blog-title')
console.log(element)*/

// getElementsByClassName()

/*const element = document.getElementsByClassName('one')
console.log(element)*/

/*const element = document.getElementsByTagName('h1')
console.log(element)*/

/*const element = document.querySelector('.one')
console.log(element)*/

/*const elements = document.querySelectorAll('[src]')
console.log(element)

elements.forEach (el => console.log(el))*/

// getElementById(element) 
// getElementsByClassName(HTMLCollection)
// getElementsByTagName(HTMLCollection)
// querySelector(element)
// querySelectorAll(NodeList)

// Manipulando conteudo
// textContent

/*const element = document.querySelector('h1')


element.textContent += "Ola Devs"

console.log(element.textContent)*/

//  Manipulando conteudo
// innerText

/*const element = document.querySelector('h1')


element.innerText += "Ola Devs"*/

//  Manipulando conteudo
// innerHTML

/*const element = document.querySelector('h1')

element.innerHTML = "Ola Devs! <small>!!!</small>"*/

//  Manipulando conteudo
// value

/*const element = document.querySelector('h1')

element.value = "Valor que eu quiser"*/

//  Manipulando conteudo
// atributos

/*const header = document.querySelector('header')

header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(header.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')*/

// Alterando estilos

/*const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3D2"
console.log(element.style.backgroundColor)*/


// Alterando estilos
// classList

/*const element = document.querySelector('body')

element.classList.add('active')

console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active')*/

// Navegando pelos elementos
// parentNode parentElement

/*const element = document.querySelector('body')

console.log(element.parentElement)*/

// Navegando pelos elementos
// childNodes children

// firsChild firstElementChild

// lastChild lastElementChild

// Navegando pelos elementos
// nextSibling nextElementSiblinng

// previousSibling previousElementSibling

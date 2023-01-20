/*
Buscando e contando dados em Array

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

    Contar o numero de categorias e o numero de livros em cada categoria
    Contar o numero de autores
    Mostrar livros do autor Augusto Cury
    Transformar a funçao acima em uma funçao que ira receber o nome do autor
    e devolver os livros desse autor.
*/

const booksByCategory =[
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },   
        ],
    },
    {
        category: "inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    }
]

const totalCategorys = booksByCategory.length

for(let category of booksByCategory) {
    console.log('Total de livros da cagetoria', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books)
        if(authors.indexOf(book.author) == -1){
            authors.push(book.title)
        }
    }
    console.log("Total de autores: ", authors.length)
}
countAuthors();

function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books)
        if(book.author === 'Augusto Cury') {
            books.push(book.title)
        }
        }
    
    console.log("Livros do autor: ", books)
}
booksOfAugustoCury()
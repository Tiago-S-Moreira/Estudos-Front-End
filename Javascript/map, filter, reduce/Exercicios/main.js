/*
  01
  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
  Dica: pesquise por remainder operator (%).
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const impNum = randomNumbers.filter((num) => {
  if((num % 2) != 0)
  return num
})
console.log(impNum);

/*
  02
  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const contnum = crazyNumbers.filter((n) => n <= 501)
console.log(contnum);
/*
  03
  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
  
  Dica: pesquise por exponentiation operator (**).
*/

const numbers = [5, 7, 3]

const elnumber = numbers.map((num) => num ** 2)
console.log(elnumber)

/*
  04
  - Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const milFilms = tarantinoMovies.filter((item) => item.release <= 2000)
console.log(milFilms)
/*
  05
  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const serName = tvShows.map((n) => n.name)
console.log(serName)


/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var valores = [1, 'joao', true, 4, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function meusValores(x) {
	return valores;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
meusValores(valores)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function teste(x, y) {
	return x[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var itens = [1, 'joao', true, false,{0, 1, 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
teste(itens, 0);
1
teste(itens, 1);
'joao'
teste(itens, 2);
true
teste(itens, 3);
false
teste(itens, 4);
{0,1,2}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {

var obj= {
		'biblia':{
			quantidadePaginas: 689,
     		 autor: 'Deus',
    		 editora:'dack'
		},
		 'matematica':{
		 	quantidadePaginas: 176,
     		 autor: 'hugo',
    		 editora:'eddit'
		 },
		 'portugues':{
		 	quantidadePaginas: 1677,
     		 autor: 'joao',
    		 editora:'san'
		 }
		}; 
		if (!nome) {
			return obj;
		}else{
			return obj[nome];
		}
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var biblia = {
			quantidadePaginas: 689,
     		 autor: 'Deus',
    		 editora:'dack'
		}
var matematica = {
		 	quantidadePaginas: 176,
     		 autor: 'hugo',
    		 editora:'eddit'
		 }
var portugues = {
			quantidadePaginas: 1677,
     		 autor: 'joao',
    		 editora:'san'
}		

function paginasLivro(livro){
	return 'A quantidade de paginas do livro '+livro.nome + ' é ' + livro.quantidadePaginas;
}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var biblia = {
      nome:'biblia',
			quantidadePaginas: 689,
     		 autor: 'Deus',
    		 editora:'dack'
		}
var matematica = {
      nome:'matematica',
		 	quantidadePaginas: 176,
     		 autor: 'hugo',
    		 editora:'eddit'
		 }
var portugues = {
      nome:'portugues',
			quantidadePaginas: 1677,
     		 autor: 'joao',
    		 editora:'san'
}		 
function livroAutor(livro){

  return  'O autor do livro '+ livro.nome +' é '+ livro.autor ;
}

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
function editoraLivro(livro){
	return 'O livro ' + livro.nome + ' foi publicado pela editora ' + livro.editora;
}

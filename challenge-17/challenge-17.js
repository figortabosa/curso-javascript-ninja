/*
function(){}();
'use strict'
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Em todos os exercícios desse desafio, nós vamos utilizar expressões
regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
variável chamada `text`:
"Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
*/
// ?

/*
Vamos começar com umas brincadeiras fáceis :D
Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
no console:
*/
console.log( 'Adicionando seu nome no texto:' );
 text.replace(/Manuel Marques de Sousa/g, 'Francisco Igor Tabosa dos Santos');
'Francisco Igor Tabosa dos Santos, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.'

/*
Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
console.
Ex: Se você for da São Paulo, substitua por "paulista".
*/
console.log( '\nTrocando naturalidade:' );
> text.replace(/brasileiro/g, 'Fortalezense');
'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista Fortaleza.'

/*
Substitua todos os números por um traço `-`. Cada caractere de número deve
ser um traço. Mostre o resultado no console:
*/
console.log( '\nTrocando números por -:' );
> text.replace(/\d/g, '-');
'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, -- de junho de ---- – Rio de Janeiro, -- de julho de ----), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.'
>                                                               

/*
Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
minúsculo por "0" (número zero). Mostre o resultado no console:
*/
console.log( '\nTrocando de "D" a "h" por "0":' );
text.replace(/[D-Hd-h]/g, '0');
'00nu0l 00rqu0s 00 0ous0, 0on00 00 0orto 0l00r0 (0io 0r0n00, 13 00 jun0o 00 1804 – 0io 00 00n0iro, 18 00 jul0o 00 1875), 0p0li000o 00 "0 00nt0uro 00 0uv0s", 0oi um milit0r, políti0o, 00oli0ionist0 0 mon0rquist0 0r0sil0iro.'

/*
Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
Mostre o resultado no console:
*/
console.log( '\nTrocando "A" e "a" por "4":' );
 text.replace(/A|a/g, '4');
'M4nuel M4rques de Sous4, Conde de Porto 4legre (Rio Gr4nde, 13 de junho de 1804 – Rio de J4neiro, 18 de julho de 1875), 4pelid4do de "O Cent4uro de Luv4s", foi um milit4r, político, 4bolicionist4 e mon4rquist4 br4sileiro.'
>   

/*
Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
o método `toUpperCase()`. Mostre o resultado no console:
*/
console.log( '\n"O Centauro de Luvas" em caixa alta:' );
// ?

/*
Agora iremos substituir as datas no formato "13 de junho de 1804" para
"13/06/1804". A primeira coisa a fazer é criar uma função chamada
`getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
retornar o número correspondente a esse mês.
Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
Números com menos de dois dígitos devem ter um zero na frente.
Crie então a função e mostre no console os retornos para os meses de março,
setembro e dezembro.
Use um console.log para cada mês, usando a frase:
"O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
*/
console.log( '\nMeses representados por números:' );

 function getMonthNumber(mes){
   	switch(mes){
   		case 'janeiro':
	   		mes = 'janeiro';
	   		numMes = '01';
	   		break;
	   	case 'fevereiro':
	   		mes = 'fevereiro';
	   		numMes = '02';
	   		break;
	   	case 'março':
	   		mes = 'março';
	   		numMes = '03';
	   		break;
	   	case 'abril':
	   		mes = 'abril';
	   		numMes = '04';
	   		break;
	   	case 'maio':
	   		mes = 'maio';
	   		numMes = '05';
	   		break;
	   	case 'junho':
	   		mes = 'junho';
	   		numMes = '06';
	   		break;
	   	case 'julho':
	   		mes = 'julho';
	   		numMes = '07';
	   		break;	
	   	case 'agosto':
	   		mes = 'agosto';
	   		numMes = '08';
	   		break;
	   	case 'setembro':
	   		mes = 'setembro';
	   		numMes = '09';
	   		break;	
	   	case 'outubro':
	   		mes = 'outubro';
	   		numMes = '10';
	   		break;
	   	case 'novembro':
	   		mes = 'novembro';
	   		numMes = '11';
	   		break;
	   	case 'dezembro':
	   		mes = 'dezembro';
	   		numMes = '12';
	   		break;								
   	}
   	return 'O mês de ' + mes + ' é representado pelo número ' + numMes + '.';
  }

> getMonthNumber('março');
'O mês de março é representado pelo número 03.'
> getMonthNumber('setembro');
'O mês de setembro é representado pelo número 09.'
> getMonthNumber('dezembro');
'O mês de dezembro é representado pelo número 12.'

/*
Agora, declare uma variável chamada `regexDate` que irá receber a expressão
regular que irá fazer o match com as datas. Crie grupos de captura para o
dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
meses que estão no texto, não precisa adicionar todos.
Com o que vimos até agora, você consegue fazer :D
Mostre a regex no console.
*/
console.log( '\nRegex que vai fazer o match com as datas do texto:' );
// ?

/*
Agora crie a função que irá fazer o replace dos dados. A função será chamada
de `replaceDate`. Ela deve retornar a data no formato:
"[DIA]/[MÊS]/[ANO]"
Após criar a função, faça o replace das datas no texto, mostrando no
console o resultado.
*/
console.log( '\nReplace de datas:' );
// ?

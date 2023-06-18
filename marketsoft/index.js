//window.alert("Seja Bem-vindo")
//window.confirm('como você está hoje ?')
//window.prompt("diz teu nome :")
//------------------------------------------------->
/*var n1 = "carro1";
var n2 = "carro2";
var n3 = "carro3";*/
//------------------------------------------------->
            //Aula 6 guanabara

/*var nome = window.prompt("qual seu nome ?");
alert("e um prazer te conhecer " + nome);*/
//------------------------------------------------->
/*var n1 = window.prompt('informe um numero: ');
var n2 = window.prompt('informe um numero: ');
var s = n1 + n2;
document.write('A soma dos valores é ' + s);*/
//------------------------------------------------->
/*nessa parte o JS fica confuso pois os dados nao foram inseridos da forma correta, o uso do sinal ele considerou como string, não fez a soma mas sim ele fez uma junção daquilo que foi solicitado, ao inves de somar 24 + 33, ele considerou com 2433, pois o codigo o considerou como string, não como number, para a gente fixar isso melhor matheus vamo fazer assim.
(number + number) para adição
(string + string) ele concatena */

//para converter o string para number, para isso e possivel fazer de outras formas como por exemplo, para valores inteiros temos o Number.parseint(n), para numeros reais "com virgula" usa o Number.parseFloat(n)
//------------------------------------------------->
/*var n1 = Number.parseInt(window.prompt('informe um numero: ')); //para fazer uma conversão dos numeros os dados inseridos são tratados dessa forma para que estejão de forma correta, não se preocupe com relação a numeros maisculos o proprio vs ajuda na colocação dos nomes.
var n2 = Number.parseInt(window.prompt('informe outro numero: '));
var s = n1 + n2;
document.write('A soma dos valores é ' + s);*/
//caso queira deixar o js a cargo do dado que será registrado colocar o "Number", se alguma vez queira que o valor seja real ou inteiro utilizar o parse e float, caso o queira brincar de roleta russa dos codigos utilizar number. kkkkkkkk
//------------------------------------------------->
/*var n1 = Number(window.prompt("escreva um numero "));
var n2 = Number(window.prompt("digite outro numero "));
var s = n1 + n2 ;
document.write("seu numero é : " + s);*/
//------------------------------------------------->
/*var n1 = Number(window.prompt("escreva um numero "));
var n2 = Number(window.prompt("digite outro numero "));
var s = n1 + n2 ;
document.write("seu numero é : " + String(s));

!! caso queira converter numero para string utilizar o "String(n)" ou "n.toString()" como no exemplo acima.
*/
//------------------------------------------------->
/* var n1 = Number(window.prompt("escreva um numero "));
var n2 = Number(window.prompt("digite outro numero "));
var s = n1 + n2 ;
document.write(`a soma dos numeros ${n1} e ${n2} é igual a ${s}`); 
caso queira encurtar o código faça desta forma evita a concatenação e diminui um pouco a quantidade de linhas de codigo, utilisando as (``) com template string para interpoplar utilizando o placeholder.
*/
//------------------------------------------------->
/*var nome = window.prompt("Qual seu nome ? ");
document.write(`ola ${nome}! seu nome tem ${nome.length} letras`);*/
//------------------------------------------------->
/*var salario = 1542.4
document.write('seu sálario é de ' + salario.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}) );
document.write('<br/> seu sálario é de ' + salario.toLocaleString('pt-BR', {style:'currency', currency:'USD'}) );*/
//------------------------------------------------->

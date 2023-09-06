// SAÍDAS DO JAVASCRIPT: innerHTML, alert, console.log, document.write


document.getElementById("texto").innerHTML = "Olá, meu primeiro texto em <strong>Javascript</strong>. Mas para quebrar a maldição, vamos de <strong>HELLO, WORLD!</strong>";

document.getElementById("date-now").innerHTML = Date();

// alert("Oi, isso é um alerta! Meu primeiro 'alert' em Javascrip, então, HELLO, WORLD!!!");

console.log("Oi, isso é um alerta! Meu primeiro 'console.log' em Javascrip, então, HELLO, WORLD!!!");

// o innerHTML é uma das formas de "imprimir o conteúdo na tela"

// DECLARAÇÕES JAVASCRIPT

// SINTAXE: Maneira como o código deve ser escrito

// let d, e, f;
// d = 5;
// e = 6;
// f = 7;

// Diferença entre número e texto

console.log(5 + 5);
console.log("5 + 5"); //uso de aspas duplas na declaração

// var a = 200;
// var b = 5;
// var c = a / b;
// console.log("o Resultado é: "+c);

// atribuição - case sensitive

var PESSOA = "Mauricio"
var pessoa = "Rodrigues"
var Pessoa = "Mauricio Rodrigues"
console.log(Pessoa)
console.log(PESSOA)
console.log(pessoa)

var primeiroNome = "Mauricio - Teste"
var segundoNome = "Rodrigues - teste"
console.log("O primeiro nome é " + primeiroNome)
console.log("O segundo nome é " + segundoNome)


// VARIÁVEIS
var nome, sobrenome, nomeCompleto, idade;
nome = "Mauricio"
sobrenome = "Rodrigues"
nomeCompleto = nome + " " + sobrenome
idade = 35

pessoa = idade + 25 + nome
document.getElementById("texto").innerHTML = pessoa;


// Quando usar var, let ou const?
// 1. Sempre declare variáveis

// 2. Sempre use const se o valor não deve ser alterado

// 3. Sempre use const se o tipo não deve ser alterado (Arrays e Objetos)

// 4. Só use let se não puder usarconst

// 5. Use apenas var se você DEVE oferecer suporte a navegadores antigos.


let x = 10;
{
    let x = 8;
    console.log(x)
}

document.getElementById("texto").innerHTML = x;
// Senac - taguatinga
// Programacao Web com jks
// conhecendo e explorando a linguagem
// conhecndo as variaveis em js

let minhaidade = 30; //number
let meunome = "pablo" //String
let souestudante = true //Boolean
let valornumlo = null //null
let valorindefinido =  //Nao atribuir nenhum valor
    let minhadatadenascimento = new Date(2024,07,06); //object

//
let idade = 18;
if (idade >= 18) {
    console.log("voce pode votar");
} else if (idade == 17) {
    console.log("voce pode votar proximo ano");
}

let idade = 15;
if (idade >= 18) {
    console.log(" vocde pode votar");
} else if (idade == 17) {
    console.log("voce pode votar proximo ano");
} else if {
    console.log("voce ainda nao pode votar");
}

let dia = 2;
switch (dia) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda");
        break;
    default:
        console.log("dia invalido")
}

//loop

for (let d = 0; d < 5++) {
    console.log(d);
}

let j = 1;
while (i < 5) {
    console.log(j);
    i++;
}
let i = 0
do {
    console.log(i);
    i++;
} while (i < 5)

//conversao de tipos de dados

let num = 10;
let str = "20"
console.log(num + str); //resultarar em 30
str = Number(str);
console.log(num + str); //resultara em 30 (soma)

//operadores 

let a = 15;
let b = 5;
let c;
c = a + b;
console.log(c); //resultara em 20
c = a - b;
console.log(c); //resultara em 10
c = a * b
console.log(c); //resultara em 75
c = a / b
console.log(c); //resultara em 3

//funsao senm js

function nome(parami, parami, parami)
//codigo de execusao

function saldacao(nome) {
    console.log("ola", + nome + "!")
}
let cor = "vermelho"; //variavel  global

function mostrarcor() {
    console.log(cor);
}
function mostrarcarro(); {
    let carro = "ferrari"; //variavel local
    console.log(carro);
}
mostrarcarro()  //imprime "ferrari"
console.log(carro); //erro carr in not difind

const number = [[1, 2, 3, 4, 5];


const quadrados = number.map(function (n) {
    return n * n;
}
console.log(quadrados); // imprime (1,2,3,15,25)
function conprimentar(callback) {
    console.log(Ola);
    callback();
    function dizernome() {
        console.log("pablo");

    }
}
comprimentar(dizernome);
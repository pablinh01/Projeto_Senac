// coonhecendo o javascript

// entender sobre funcioes basicas

function saudacoes(nome) {
    return "olá" + nome + "!";
}

// funcoes com multiplos parametros

function soma(num1, num2) {
    return num1 + num2;
}

//funcoes com estrutura condicional

function parouimpar(num) {
    if (num % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}

//funcao com laco de repeticao

function contagemregessiva(num) {
    for (let i = num; i >= 0; i++) {
        console.log(i);
    }
}

//criando e manipulando objetos

let carro = {
    marca: "Nissan",
    modelo: "versa",
    ano: 2023,
    ligar: function () {
        console.log("O carro estar ligado");
    }
};

// acessando as propriedade objeto 


console.log(carro.marca); //mostre a marca do carro - Nissan
console.log(carro['modelo']); // motre o modelo - Versa

//manipular objetos

carro.cor = "azul"
console.log(carro.cor);

carro.ano = 2023;
console.log(carro.ano);

delete carro.cor;
console.log(carro.cor);

//manipulando e criando arrays

let numeros=[1,2,3,4,5,6];
let nome = ["maria", "joao", "paulo", "lose"];
let misto = [1,"j", true,[1,2],{nome: "joao", idade:30}];
let frutas = ["banana", "maca", "pera", "cereja"]
 console.log(frutas[0]);
console.log(nome[1]);

//alterando valores em arrays

let frutas2 = ["banana", "maca", "pera", "cereja"];
frutas[2] = "mamao"
console.log(frutas);

//metodos comuns de arrays
//push(): adiciona um novo elemento no final do array
//pop(): ele remove o ultimo elemento do array
//shift(): remove o primeiro elemento do array
//unshift(): adicional um novo elemento no inicio do array
//slice(): ele cria um novo array com base em parte do array antigo
//joing(): une todos os elementos do array em uma unica string
//splice(): adiciona ou remove elemento de um array em uma posicao expecifica

let frutas3 = ["banana", "maca", "pera", "cereja"];
frutas3.push("uva");
console.log(frutas3);

frutas3.pop();
console.log(frutas3);

frutas.shift();
console.log(frutas3);

frutas3.unshift("morango");
console.log(frutas3);

frutas.splice(1,0,"kiwi");
console.log(frutas3);

let frutastropicais = frutas3.slice(0,2);
console.log(frutastropicais);

let algumasfrutas = frutas.slice(1,3);
console.log(algumasfrutas);

//metodos de intecacao : foreacht() - mat() - filter()

let frutas4 = ["banana", "maca", "pera", "cereja"];
frutas4.forEach(function(frutas4){
    console.log(frutas4)
});
let numeros2 = [1,2,3,4,5,6];
let quadrados = numeros2.map (function (numero2){
return numeros2 * numeros2
});
console.log(quadrados);

//Document : Object Model
//document.getElementsByTagName(nome) document.querySelector(seletor) document.querySelectorAll(seletor)

let heading = document.getElementById('main');
heading.textContent = '<p> Este é um novo paragrafo';

let div = document.getElementById('main');
div.style.color = 'blue';



 
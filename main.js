import {sum} from './functions';

console.log(sum(5, 5));

const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({nome: 'Solaire'});

console.log(teste());

const usuario = {
    nome: 'Fellipe',
    idade: '33',
    empresa: 'N/A',
    endereco: {
        cidade: 'Santo André',
        estado: 'SP'
    },
};

const {nome, idade} = usuario;

console.log(nome + ', ' + idade);

// operador rest 
const {empresa, ...resto} = usuario;
console.log(resto);

const [a, b, ...c] = arr;
console.log(c);

// operador spread
const usuario2 = {...usuario, nome: 'Isamu'};
console.log(usuario2);

// template literals
console.log(`Meu nome é ${nome}`);

// Object short syntax
var texto_1 = 'Exemplo texto 1';
var texto_2 = 'Exemplo texto 2';

var objeto = {
    texto_1,
    texto_2,
    texto_3: 'Exemplo texto 3'
};

console.log(objeto);
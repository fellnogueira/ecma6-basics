import {sum} from './functions'; //O caminho ./ relativo, sem isso ele buscaria no node_modules
import axios from 'axios';

console.log(sum(5, 7));

const arr = [1, 2, 3, 4, 5, 6];

// map faz alterações no array e forach só percorre
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

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

async function executaPromise() {
    console.log(await minhaPromise());
    // A próxima linha só executa após a finalização da promise anterior
    // Dessa forma não é necessário fazer encadeado utilizado o .then
    console.log(await minhaPromise());
    
    // Utilizando .then
    minhaPromise().then(response => {
        console.log(response);
        minhaPromise().then(response => {
            console.log(response);
        });
    });
}

executaPromise();

// Usar async/await com o retorno pra dentro de uma variavel
const retorno = async () => {
    console.log(await minhaPromise());
}

retorno();

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);            
        } catch (error) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('fellnogueira');
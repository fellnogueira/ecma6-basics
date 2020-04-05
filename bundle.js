"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: 'Solaire'
  };
};

console.log(teste());
var usuario = {
  nome: 'Fellipe',
  idade: '33',
  empresa: 'N/A',
  endereco: {
    cidade: 'Santo André',
    estado: 'SP'
  }
};
var nome = usuario.nome,
    idade = usuario.idade;
console.log(nome + ', ' + idade); // operador rest 

var empresa = usuario.empresa,
    resto = _objectWithoutProperties(usuario, ["empresa"]);

console.log(resto);
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(c); // operador spread

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Isamu'
});

console.log(usuario2); // template literals

console.log("Meu nome \xE9 ".concat(nome)); // Object short syntax

var texto_1 = 'Exemplo texto 1';
var texto_2 = 'Exemplo texto 2';
var objeto = {
  texto_1: texto_1,
  texto_2: texto_2,
  texto_3: 'Exemplo texto 3'
};
console.log(objeto);

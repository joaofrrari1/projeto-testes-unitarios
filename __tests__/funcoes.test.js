const { adicao, subtracao, multiplicacao, divisao } = require('../src/funcoes');

test('adicao de 1 + 2 deve ser 3', () => {
  expect(adicao(1, 2)).toBe(3);
});

test('subtracao de 5 - 3 deve ser 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('multiplicacao de 4 * 3 deve ser 12', () => {
  expect(multiplicacao(4, 3)).toBe(12);
});

test('divisao de 10 / 2 deve ser 5', () => {
  expect(divisao(10, 2)).toBe(5);
});

test('divisao por zero deve lançar erro', () => {
  expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida');
});

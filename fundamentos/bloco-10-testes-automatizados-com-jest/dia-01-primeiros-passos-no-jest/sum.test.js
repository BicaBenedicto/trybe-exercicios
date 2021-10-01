const { it, expect } = require('@jest/globals');
const sum = require('./sum');

describe('Teste de soma', () => {
  it('a soma é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('a soma é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it('só aceita números', () => {
    expect(() => sum(4,'5')).toThrow();
  })
  it('o erro mostra mensagem de só aceitar números', () => {
    expect(() => sum(4,'5')).toThrowError(new Error('parameters must be numbers'));
  })
});
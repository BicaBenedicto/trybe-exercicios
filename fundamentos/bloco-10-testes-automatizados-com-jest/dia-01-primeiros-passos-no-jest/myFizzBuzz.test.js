function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('Teste de FizzBuzz', () => {
  it('o valor divisivel por 3 e 5 tem o retorno esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('o valor divisivel por 3, tem o retorno esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  it('o valor divisivel por 5 tem o retorno esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  it('o valor nao divisivel por 3 ou 5 tem o valor esperado', () => {
    expect(myFizzBuzz(2)).toBe(2);
  })
  it('o valor nao é um numero tem o retorno esperado', () => {
    expect(myFizzBuzz('2')).toBe(false);
  })
})
function encode(valor) {
  let out;
  out = valor.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4)
    .replace(/u/g, 5);
  return out;
}

function decode(valor) {
  let out;
  out = valor.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return out;
}

describe('Teste de encode e decode', () => {
  it('encode e decode são funcões', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })
  it('vogais a, e, i, o, u, são convertidas pelo encode', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it('numeros 1, 2, 3, 4, 5, são convertidas pelo decode', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  it('as demais não sao convertidas', () => {
    expect(encode('estou testando')).toBe('2st45 t2st1nd4');
    expect(decode('2st45 t2st1nd4')).toBe('estou testando');
  })
  it('mantem as mesma quantidade de caracteres', () => {
    expect(encode('estou testando').length).toBe(14);
    expect(decode('2st45 t2st1nd4').length).toBe(14);
  })
})
const { expect } = require('@jest/globals');
const exercise = require('./exercises');
const show = (frase) => console.log(frase);

describe('Teste exercicio 1', () => {
  it('as letras retornam maiusculas', (done) => {
   exercise.uppercase('teste', (result) => {
     try {
       expect(result).toBe('TESTE');
       done();
     } catch (error) {
       done(error);
     }
   });
  })
})

describe('Teste exercicio 2', () => {
  it('se a promise tem resultado esperado', () => {
   return expect(exercise.getUserName(1)).resolves.toEqual('Mark');
  })
  it('se a promise tem resultado esperado', () => {
   return expect(exercise.getUserName(4)).rejects.toEqual(new Error(`User with 4 not found.`));
   })
})

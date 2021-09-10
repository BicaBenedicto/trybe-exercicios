const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.toString().toLowerCase().split('').reduce((results, value) => (value === 'a') ? results + 1 : results, 0);
}

assert.deepStrictEqual(containsA(), 20);
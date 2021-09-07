const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNoturno = (objeto, chave, valor) => {
  return objeto.chave = valor;
}

console.log(addNoturno(lesson2, 'turno', 'noite'));
console.log(' ');
console.log('----------------');
console.log(' ');

const listKeys = (objeto) => {
  return Object.keys(objeto);
}

console.log((listKeys(lesson3)));
console.log(' ');
console.log('----------------');
console.log(' ');

const lengthObject = (objeto) => {
  return Object.keys(objeto).length;
}

console.log(lengthObject(lesson2));
console.log(' ');
console.log('----------------');
console.log(' ');

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});;

console.log(allLessons);
console.log(' ');
console.log('----------------');
console.log(' ');

const countStudent = (objeto) => {
  let count = 0;

  for (let k in allLessons) {
    if (allLessons[k].numeroEstudantes) {
      count += allLessons[k].numeroEstudantes;
    }
  } return count;
}


console.log(countStudent(allLessons));
console.log(' ');
console.log('----------------');
console.log(' ');

const getValueOfKey = (objeto, index) => {
  const output = Object.values(objeto);
  return output[index];
}

console.log(getValueOfKey(lesson1, 0));
console.log(' ');
console.log('----------------');
console.log(' ');

const compareKeyAndValue = (objeto, key, value) => {
  const object = Object.entries(objeto);
  for (let index = 0; index < object.length; index += 1) {
    console.log(object[index], [key, value]);
    if (object[index][0] === key) {
      return (object[index][1] === value) ? true : false;
    }
  }
}

console.log(compareKeyAndValue(lesson2, 'professor', 'Carlos'));
//ES6
let msg = {
  de: {
    'This is a string': 'Das ist eine Zeichenkette',
    'Hello, how are you?': 'Hallo, wie geht es dir?'
  },
  fr: {
    'This is a string': 'C\'est une chaîne de caractères',
    'Hello, how are you?': 'Salut, comment ça va?'
  }
};

let i18n = {
  lang: 'fr',
  translate(str, ...subsets) {

    return msg[this.lang][str];
  }
}

console.log(i18n.translate`This is a string`);
// C'est une chaîne de caractères

console.log(i18n.translate`Hello, how are you?`);
// Salut, comment ça va?

// ES5

console.warn('Don\'t try this at home!');

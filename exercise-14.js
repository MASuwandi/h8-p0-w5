
// Logic Challenge - Password Generator

var kamusVoc1 = 'aiueo',
    kamusVoc2 = 'bjvfp';
function changeVocals (str) {
  //code di sini
  var vocalsChanged = '';
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < kamusVoc1.length; j++) {
      if (str[i] == kamusVoc1[j]) {
        vocalsChanged += kamusVoc2[j];
      } else if (str[i] == kamusVoc1[j].toUpperCase()) {
        vocalsChanged += kamusVoc2[j].toUpperCase();
      }
    }
    if (vocalsChanged.length != i + 1) {
      vocalsChanged += str[i];
    }
  }
  return vocalsChanged;
}

function reverseWord (str) {
  //code di sini
  var reverse = '';
  for (i = str.length - 1; i >= 0 ; i--) {
    reverse += str[i];
  }
  return reverse;
}

function setLowerUpperCase (str) {
  //code di sini
  var lowUpCased = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      lowUpCased += str[i].toUpperCase()
    } else if (str[i] == str[i].toUpperCase()) {
      lowUpCased += str[i].toLowerCase()
    }
  }
  return lowUpCased;
}

function removeSpaces (str) {
  //code di sini
  var noSpace = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      noSpace += str[i];
    }
  }
  return noSpace;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  var changedVocals = changeVocals (name),
      reversedWord = reverseWord (changedVocals),
      settedCase = setLowerUpperCase (reversedWord),
      removedSpaces = removeSpaces (settedCase),
      password = removedSpaces;
  return password;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

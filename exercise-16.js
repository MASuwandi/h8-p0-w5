
// Logic Challenge - Total Digit (Rekursif)

function totalDigitRekursif(angka) {
  // you can only write your code here!
  strAngka = String(angka);
  var nilaiTotal = 0;
  nilaiTotal += parseInt(strAngka[0]);
  var irisan = parseInt(strAngka.substr(1));
  if (strAngka.length == 1) {
    return nilaiTotal;
  }
  return nilaiTotal + totalDigitRekursif(irisan);
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

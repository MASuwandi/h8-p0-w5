
// Logic Challenge - Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var strAngka = String(angka),
      result = parseInt(strAngka[0]);
  console.log(strAngka, ' --> strAngka')
  console.log(result, ' --> result')
  if (strAngka.length == 0) {
    return result = 1;
  } else {
    var irisan = parseInt(strAngka.slice(1));
    console.log(irisan, ' --> irisan')
    return result * kaliTerusRekursif(irisan);
  }
}


// ---- code 2 -----------------------------------------------

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var strNum = String(angka),
      result = parseInt(strNum[0]),
      strResult = String(result),
      strArg = strNum.substr(1);
  if(strResult.length == 1 && strArg.length == 0) {
    return 1;
  } else if (strArg.length > 1 && strArg.length == 0) {
    nexArg = strArg; 
  } else {
    nexArg = parseInt(strNum.substr(1));
    console.log(result, ' --> result')
  }
  return result * kaliTerusRekursif(nexArg);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
// console.log(kaliTerusRekursif(3)); // 3
// console.log(kaliTerusRekursif(24)); // 8
// console.log(kaliTerusRekursif(654)); // 0
// console.log(kaliTerusRekursif(1231)); // 6

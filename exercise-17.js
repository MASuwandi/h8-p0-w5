
// Logic Challenge - Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var strResult = String(angka),
      str = '';
  if (strResult.length == 1) {
    return parseInt(strResult);
  } else {
    str = strResult[0] * strResult[1];
    if (String(str).length > 1 && strResult.length > 2) {
      str = str * strResult[2];
      return kaliTerusRekursif(parseInt(str + strResult.substr(3)));
    } else if (strResult.length > 2) {
      return kaliTerusRekursif(parseInt(str + strResult.substr(2)));
    }
    return kaliTerusRekursif(str);
  } 
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6

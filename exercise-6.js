
// Logic Challenge: Melee Ranged Grouping

function meleeRangedGrouping (str) {
  //your code here
  var arrMul = [],
      arr = str.split(',');
  for (i = 0; i < arr.length; i++) {
    if (!arrMul[0]) {
      arrMul = [ [ ],[ ] ]
    }
    var temp = '';
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == '-') {
        if (arr[i][j + 1] == 'R') {
          arrMul[0].push(temp);
        } else if (arr[i][j + 1] == 'M') {
          arrMul[1].push(temp);
        }
      } else {
        temp += arr[i][j];
      }
    }
  }
  return arrMul;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []

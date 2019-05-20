
// Logic Challenge: Damage Calculation

function attack (damage) {
  // Code disini
  var dealt = damage - 2;
  return dealt;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var totalDamage = attack (damagePerAttack) * numberOfAttacks;
  return totalDamage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90

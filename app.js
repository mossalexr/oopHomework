const arr = [[4, 7, 85]]

const arr2 = [[4, 7, 85], [2, 3, 43]];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
      console.log(arr2[i][j]);
    }
  }

const arr3 = [['bengals', 14, ['touchdowns', 6], ['fieldGoals', 3]], ['steelers', 0, ['safety', 2], ['extraPoint', 1]]]

function myFunc(x, y) {
    if (x > y) {
        return x;
    } else return y;
}
console.log(myFunc(30, 10));

function myFunc2(a, b) {
    if (a === b) {
        return 'the values are equal'
    } else return 'the values are not equal'
}
console.log(myFunc2(30, 30));
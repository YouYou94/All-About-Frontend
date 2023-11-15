function solution(brown, yellow) {
  for (var y = 3; y <= (brown + yellow) / y; y++) {
    var x = Math.floor((brown + yellow) / y);
    if ((x - 2) * (y - 2) === yellow) {
      break;
    }
  }

  return [x, y];
}

let brown = 10;
let yellow = 2;
console.log(brown, yellow);

brown = 8;
yellow = 1;
console.log(brown, yellow);

brown = 24;
yellow = 24;
console.log(brown, yellow);

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    results.push(...attached);
  });

  return results;
};

function solution(k, dungeons) {
  var answer = [];
  let result = getPermutations(dungeons, dungeons.length);

  for (let i = 0; i < result.length; i++) {
    let pirodo = k;
    let count = 0;

    for (let j = 0; j < result[i].length; j++) {
      if (pirodo >= result[i][j][0]) {
        pirodo -= result[i][j][1];

        if (pirodo >= 0) count++;
      }
    }
    answer.push(count);
  }

  return Math.max.apply(null, answer);
}

let k = 80;
let dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
console.log(solution(k, dungeons));

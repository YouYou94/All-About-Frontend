function solution(land) {
  const columns = land.length;
  const rows = land[0].length;

  let answer = Array.from(new Array(columns), () => new Array(rows).fill(0));

  for (let i = 0; i < land.length; i++) {
    if (i === 0) answer[i] = land[i];
    else {
      for (let j = 0; j < land[i].length; j++) {
        let max = 0;

        for (let k = 0; k < land[i - 1].length; k++) {
          if (j !== k) {
            if (land[i][j] + answer[i - 1][k] > max)
              max = land[i][j] + answer[i - 1][k];
          }
        }
        answer[i][j] = max;
      }
    }
  }

  return Math.max(...answer.pop());
}

const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];
console.log(solution(land));

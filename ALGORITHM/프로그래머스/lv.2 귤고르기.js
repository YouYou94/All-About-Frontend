function solution(k, tangerine) {
  let answer = {};

  tangerine.forEach((t) => (answer[t] = (answer[t] || 0) + 1));

  const sortArr = Object.values(answer).sort((a, b) => b - a);
  let count = 0;

  for (let i = 0; i < sortArr.length; i++) {
    count++;

    if (k > sortArr[i]) k -= sortArr[i];
    else break;
  }

  return count;
}

let k = 6;
let tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, tangerine));

k = 4;
tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, tangerine));

k = 2;
tangerine = [1, 1, 1, 1, 2, 2, 2, 3];
console.log(solution(k, tangerine));

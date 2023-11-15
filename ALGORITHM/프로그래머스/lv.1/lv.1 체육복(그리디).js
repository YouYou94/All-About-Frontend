function solution(n, lost, reserve) {
  let answer1 = Array.from({ length: n + 1 }).fill(1);
  let answer2 = Array.from({ length: n + 1 }).fill(1);
  answer1[0] = 0;
  answer2[0] = 0;

  reserve.forEach((value) => answer1[value]++);
  lost.forEach((value) => answer1[value]--);
  reserve.forEach((value) => answer2[value]++);
  lost.forEach((value) => answer2[value]--);

  for (let i = 1; i < answer1.length; i++) {
    let checkReserve = [false, -1];

    if (answer1[i] === 0) {
      if (answer1[i + 1] === 2 && i !== answer1.length - 1) {
        checkReserve[0] = true;
        checkReserve[1] = i + 1;
      } else if (answer1[i - 1] === 2) {
        checkReserve[0] = true;
        checkReserve[1] = i - 1;
      }

      if (checkReserve[0]) {
        answer1[i]++;
        answer1[checkReserve[1]]--;
      }

      checkReserve = [false, -1];

      if (answer2[i - 1] === 2) {
        checkReserve[0] = true;
        checkReserve[1] = i - 1;
      } else if (answer2[i + 1] === 2 && i !== answer2.length - 1) {
        checkReserve[0] = true;
        checkReserve[1] = i + 1;
      }

      if (checkReserve[0]) {
        answer2[i]++;
        answer2[checkReserve[1]]--;
      }
    }
  }

  console.log(answer1, answer2);

  return Math.max(
    answer1.filter((a) => a > 0).length,
    answer2.filter((a) => a > 0).length
  );
}

let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];
console.log(solution(n, lost, reserve)); // 5

n = 5;
lost = [2, 4];
reserve = [3];
console.log(solution(n, lost, reserve)); // 4

n = 3;
lost = [3];
reserve = [1];
console.log(solution(n, lost, reserve)); // 2

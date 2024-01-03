function solution(number, k) {
  let count = 0;
  let answer = number.split("");

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (Number(answer[j]) === 9) continue;

      if (Number(answer[j]) < Number(answer[j + 1])) {
        answer.splice(j, 1);
        count++;
        break;
      }
    }
  }

  if (count < k)
    number[0] > number[number.length - 1]
      ? answer.splice(answer.length - (k - count), k - count)
      : answer.splice(0, k - count);

  return answer.join("");
}

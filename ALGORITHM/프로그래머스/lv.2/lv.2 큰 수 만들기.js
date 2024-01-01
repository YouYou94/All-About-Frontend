function solution(number, k) {
  let count = 0;
  let answer = number.split("");

  for (let i = 0; i < k; i++) {
    // 숫자 제거를 k번 반복함
    for (let j = 0; j < answer.length; j++) {
      // 숫자의 최대 크기가 9이기 때문에 9가 나오면 해당 경우를 넘어감
      if (Number(answer[j]) === 9) {
        continue;
      }
      // 현재 숫자와 다음수를 비교해 다음수가 더 크면 현재 숫자를 제거함
      if (Number(answer[j]) < Number(answer[j + 1])) {
        answer.splice(j, 1);
        count++;
        break;
      }
    }
  }

  if (count < k) {
    // 제거한 숫자 count가 k보다 작을 경우 맨 앞과 뒤를 비교함
    number[0] > number[number.length - 1]
      ? answer.splice(answer.length - (k - count), k - count) // 앞의 숫자가 큰 경우 뒤에서 부터 k-count만큼 잘라냄
      : answer.splice(0, k - count); // 뒤의 숫자가 큰 경우 앞에서 부터 k-count만큼 잘라냄
  }

  return answer.join("");
}

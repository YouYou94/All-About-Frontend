function solution(num) {
  let answer = 0;
  while (answer < 500) {
    if (num === 1) return answer;
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return answer >= 500 ? -1 : answer;
}

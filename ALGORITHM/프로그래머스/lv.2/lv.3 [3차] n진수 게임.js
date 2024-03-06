function solution(n, t, m, p) {
  let answer = "";
  let numSet = [];
  // 연속된 숫자 구하기
  for (let i = 0; i < t * m; i++) numSet.push(i.toString(n));

  //다 이어서 문자열로 만들기
  let numStr = numSet.join("");

  // 말해야 하는 숫자 출력하기
  for (let j = 0; j < t * m; j++)
    if (j % m === p - 1)
      // 몇번째인지 조건 구하기
      answer = answer + numStr[j].toUpperCase();

  return answer;
}

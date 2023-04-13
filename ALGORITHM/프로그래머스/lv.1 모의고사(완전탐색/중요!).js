function solution(answers) {
  var answer = [
    { name: 1, count: 0 },
    { name: 2, count: 0 },
    { name: 3, count: 0 },
  ];
  let first = [1, 2, 3, 4, 5]; // 5개
  let second = [2, 1, 2, 3, 2, 4, 2, 5]; // 8개
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10개

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) answer[0].count++;

    if (answers[i] === second[i % 8]) answer[1].count++;

    if (answers[i] === third[i % 10]) answer[2].count++;
  }

  const newAnswer = answer.sort((a, b) => b.count - a.count);
  answer = [];

  if (newAnswer[0].count !== 0) {
    answer.push(newAnswer[0].name);

    for (let i = 1; i < newAnswer.length; i++) {
      if (newAnswer[i].count === newAnswer[0].count)
        answer.push(newAnswer[i].name);
    }
  } else
    for (let i = 0; i < newAnswer.length; i++) answer.push(newAnswer[i].name);

  return answer;
}

/*
    문제를 보기 전에 이 문제를 풀면서 내가 부족한 것을 알게 되었다.
    그것은 바로 문제를 제대로 읽지 않는 습관
    주어진 시간 내에 알고리즘을 해결하는 것도 좋지만,
    해결하는 과정에서 무엇을 정확히 어떻게 해결해야하는지가 가장 중요한 것 같다.
    
    해당 문제를 1시간이나 걸린 이유는??
    내가 문제를 제대로 읽지 않았기 때문이다.
    해당 문제의 경우 최댓값을 정렬하는 거지 많이 푼 순서대로 정렬하는 것이 아니다.

    예를 들어, 1번 학생이 2문제, 2번 학생이 3문제, 3번 학생이 4문제일 경우
    나는 3, 2, 1로 나열했으나 그것이 아니라 최댓값, 3번 학생이 4문제를 풀었으니
    4문제를 푼 학생들끼리 정렬을 하는 것이다.

    오늘 알고리즘을 풀면서 깨달은 것은 하나!!
    문제를 제대로 읽고 해결해야하는 정확한 것이 뭔지 꼭 짚고 넘어가자!
*/

let answers = [1, 2, 3, 4, 5]; // [1]
console.log(solution(answers));

answers = [1, 3, 2, 4, 2]; // [1, 2, 3]
console.log(solution(answers));

answers = [0, 0, 0, 0, 0]; // [1, 2, 3]
console.log(solution(answers));

answers = [3, 3, 2, 1, 5]; // [3]
console.log(solution(answers));

answers = [5, 5, 4, 2, 3]; // [1, 2, 3]
console.log(solution(answers));

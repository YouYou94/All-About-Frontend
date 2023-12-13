function solution(priorities, location) {
  let answer = 0; // 실행 순서 저장할 변수
  const queue = priorities.map((priority, index) => ({ priority, index }));

  while (queue.length) {
    const current = queue.shift(); // 현재 기준 큐의 첫 번째 요소

    // 큐에 현재 중요도보다 더 높은 중요도가 하나라도 있으면 큐에 끝부분에 추가
    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
      // 그렇지 않으면 answer 증가
    } else {
      answer++;
      // 현재 요소의 index와 location 같아지면 중단
      if (current.index === location) {
        break;
      }
    }
  }

  return answer;
}

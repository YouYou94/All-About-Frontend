function solution(msg) {
  const answer = [];
  const dictionary = [...Array(26)].reduce((acc, _, i) => {
    acc[String.fromCharCode(65 + i)] = i + 1;
    return acc;
  }, {});
  let dictLength = 26;

  let i = 0;
  while (i < msg.length) {
    const curIndex = i;
    let target = msg[i];
    let nextTarget = msg.slice(curIndex, ++i + 1);
    while (i - 1 < msg.length && dictionary[nextTarget]) {
      target = nextTarget;
      nextTarget = msg.slice(curIndex, ++i + 1);
    }
    const index = dictionary[target];
    if (i < msg.length) {
      dictionary[nextTarget] = ++dictLength;
    }
    answer.push(index);
  }
  return answer;
}

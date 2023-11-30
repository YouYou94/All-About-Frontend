function solution(str1, str2) {
  const CONSTANT = 65536;
  const [setStr1, setStr2] = [genSet(str1), genSet(str2)];
  if (setStr1.length === 0 && setStr2.length === 0) return CONSTANT;

  const set = new Set([...setStr1, ...setStr2]);
  let interLen = 0,
    unionLen = 0;
  set.forEach((x) => {
    const existsLen1 = setStr1.filter((y) => x === y).length;
    const existsLen2 = setStr2.filter((y) => x === y).length;
    interLen += Math.min(existsLen1, existsLen2);
    unionLen += Math.max(existsLen1, existsLen2);
  });

  return Math.floor((interLen / unionLen) * CONSTANT);
}

function genSet(str) {
  str = str.toLowerCase();
  const result = [];

  for (let i = 0; i < str.length - 1; i++) {
    if (isAlphabet(str[i]) && isAlphabet(str[i + 1])) {
      result.push(str[i] + str[i + 1]);
    }
  }
  return result;
}

function isAlphabet(ch) {
  return 97 <= ch.charCodeAt() && ch.charCodeAt() <= 122;
}

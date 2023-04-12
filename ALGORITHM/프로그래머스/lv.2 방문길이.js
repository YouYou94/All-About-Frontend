function solution(dirs) {
  let answer = [];
  let preX = 0;
  let preY = 0;
  let nowX = 0;
  let nowY = 0;
  const U = [0, 1];
  const D = [0, -1];
  const R = [1, 0];
  const L = [-1, 0];

  for (let i = 0; i < dirs.length; i++) {
    let location = "";

    if (dirs[i] === "U") {
      if (nowY + U[1] <= 5) {
        preX = nowX;
        preY = nowY;
        nowX = nowX + U[0];
        nowY = nowY + U[1];

        const preString = "" + preX + preY;
        const nowString = "" + nowX + nowY;

        if (preString > nowString) location = nowString + preString;
        else location = preString + nowString;

        answer.push(location);
      }
    } else if (dirs[i] === "D") {
      if (nowY + D[1] >= -5) {
        preX = nowX;
        preY = nowY;
        nowX = nowX + D[0];
        nowY = nowY + D[1];

        const preString = "" + preX + preY;
        const nowString = "" + nowX + nowY;

        if (preString > nowString) location = nowString + preString;
        else location = preString + nowString;

        answer.push(location);
      }
    } else if (dirs[i] === "R") {
      if (nowX + R[0] <= 5) {
        preX = nowX;
        preY = nowY;
        nowX = nowX + R[0];
        nowY = nowY + R[1];

        const preString = "" + preX + preY;
        const nowString = "" + nowX + nowY;

        if (preString > nowString) location = nowString + preString;
        else location = preString + nowString;

        answer.push(location);
      }
    } else if (dirs[i] === "L") {
      if (nowX + L[0] >= -5) {
        preX = nowX;
        preY = nowY;
        nowX = nowX + L[0];
        nowY = nowY + L[1];

        const preString = "" + preX + preY;
        const nowString = "" + nowX + nowY;

        if (preString > nowString) location = nowString + preString;
        else location = preString + nowString;

        answer.push(location);
      }
    }
  }

  const uniqeAnser = [...new Set(answer)];

  return uniqeAnser.length;
}

let dirs = "ULURRDLLU";
console.log(solution(dirs));

dirs = "LULLLLLLU";
console.log(solution(dirs));

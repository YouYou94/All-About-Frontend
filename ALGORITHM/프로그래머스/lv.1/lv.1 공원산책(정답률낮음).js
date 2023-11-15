const getStart = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "S") {
        return [i, j];
      }
    }
  }
};

function solution(park, routes) {
  let startPos = getStart(park);
  console.log(startPos);

  const parkArr = park.map((p) => [...p]);
  const row = parkArr.length;
  const col = parkArr[0].length;
  let curPos = [];

  for (let i = 0; i < routes.length; i++) {
    curPos[0] = startPos[0];
    curPos[1] = startPos[1];

    let check = false;

    const dir = routes[i].split(" ")[0];
    let count = routes[i].split(" ")[1];

    for (let j = 1; j <= count; j++) {
      if (dir === "E") curPos[1] += 1;
      else if (dir === "W") curPos[1] -= 1;
      else if (dir === "S") curPos[0] += 1;
      else if (dir === "N") curPos[0] -= 1;

      if (
        curPos[0] >= row ||
        curPos[0] < 0 ||
        curPos[1] >= col ||
        curPos[1] < 0
      ) {
        check = true;
        break;
      }

      if (parkArr[curPos[0]][curPos[1]] === "X") {
        check = true;
        break;
      }
    }

    if (check) continue;

    startPos[0] = curPos[0];
    startPos[1] = curPos[1];
  }

  return startPos;
}

let park = ["SOO", "OOO", "OOO"];
let routes = ["E 2", "S 2", "W 1"];
console.log(solution(park, routes)); // [2,1]

park = ["SOO", "OXX", "OOO"];
routes = ["E 2", "S 2", "W 1"];
console.log(solution(park, routes)); // [0, 1]

park = ["OSO", "OOO", "OXO", "OOO"];
routes = ["E 2", "S 3", "W 1"];
console.log(solution(park, routes)); // [0, 0]

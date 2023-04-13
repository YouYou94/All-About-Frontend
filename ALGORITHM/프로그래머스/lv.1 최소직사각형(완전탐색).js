function solution(sizes) {
  let maxWidth = -1;
  let maxHeight = -1;

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
  }

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > maxWidth) maxWidth = sizes[i][0];
    if (sizes[i][1] > maxHeight) maxHeight = sizes[i][1];
  }

  return maxWidth * maxHeight;
}

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(solution(sizes));

sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];
console.log(solution(sizes));

sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];
console.log(solution(sizes));

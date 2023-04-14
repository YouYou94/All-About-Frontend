function solution(wallpaper) {
  let startX = wallpaper.length,
    startY = wallpaper[0].length,
    endX = 0,
    endY = 0;
  const wallpaperArr = wallpaper.map((wp) => [...wp]);

  for (let i = 0; i < wallpaperArr.length; i++) {
    for (let j = 0; j < wallpaperArr[i].length; j++) {
      if (wallpaperArr[i][j] === "#") {
        console.log(i, j);
        if (startX > i) startX = i;
        if (startY > j) startY = j;
        if (endX <= i) endX = i + 1;
        if (endY <= j) endY = j + 1;
      }
    }
  }

  return [startX, startY, endX, endY];
}

let wallpaper = [".#...", "..#..", "...#."];
console.log(solution(wallpaper)); // [0, 1, 3, 4]

wallpaper = [
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
];
console.log(solution(wallpaper)); // [1, 3, 5, 8]

wallpaper = [
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
];
console.log(solution(wallpaper)); // [0, 0, 7, 9]

wallpaper = ["..", "#."];
console.log(solution(wallpaper)); // [1, 0, 2, 1]

wallpaper = ["...#"];
console.log(solution(wallpaper)); // [0, 3, 1, 4]

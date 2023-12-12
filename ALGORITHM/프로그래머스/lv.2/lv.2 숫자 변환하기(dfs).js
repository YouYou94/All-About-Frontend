function solution(x, y, n) {
  function dfs(val, count) {
    if (val == y) {
      arr.push(count);
    } else if (val < y) {
      dfs(val * 2, count + 1);
      dfs(val * 3, count + 1);
      dfs(val + n, count + 1);
    }
  }
  dfs(x, 0);

  return arr.length ? Math.min(...arr) : -1;
}

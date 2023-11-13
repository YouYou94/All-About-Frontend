function solution(m, n, puddles) {
  // dp 배열 초기화
  const dp = Array.from(Array(n), () => Array(m).fill(0));

  // 물웅덩이 좌표 -1로 저장
  puddles.forEach(([x, y]) => (dp[y - 1][x - 1] = -1));

  // 집 좌표 경로의 수가 1이므로 1로 초기화
  dp[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 시작점인 경우 해당 경로 건너뜀
      if (i === 0 && j === 0) continue;

      // 현재 위치가 물웅덩이인 경우 해당 경로 건너뜀
      if (dp[i][j] === -1) continue;

      // 현재 위치까지 갈 수 있는 경로 수 = 현재 지점 + 위쪽 지점까지의 경로 수를 더한 값
      if (i > 0 && dp[i - 1][j] !== -1) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j]) % 1000000007;
      }

      // 현재 위치까지 갈 수 있는 경로 수 = 현재 지점 + 왼쪽 지점까지의 경로 수를 더한 값
      if (j > 0 && dp[i][j - 1] !== -1) {
        dp[i][j] = (dp[i][j] + dp[i][j - 1]) % 1000000007;
      }
    }
  }
  // 출발점부터 도착점까지 갈 수 있는 경로의 수를 저장한 도착 지점 반환
  return dp[n - 1][m - 1];
}

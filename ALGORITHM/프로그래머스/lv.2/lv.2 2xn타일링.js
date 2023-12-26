function solution(n) {
  let dp = Array.from({ length: n }, () => 0);

  (dp[0] = 1), (dp[1] = 2);

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n - 1] % 1000000007;
}

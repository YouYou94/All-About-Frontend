function solution(n) {
  let dp = Array.from({ length: n }, () => 0);

  (dp[0] = 1), (dp[1] = 2);

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n - 1] % 1000000007;
}

// 가로 2, 세로 1 (width: 2, height: 1)
// 세로는 무조건 2, 가로는 상관 없다.
// 1000000007로 나눈 나머지 (% 1000000007)
// 1개 = 1, 2개 = 2, 3개 = 3, 4개 = 5개, 5개 = 8개
// 결과에 대한 진행상황을 보니 피보나치 수열, dp를 이용하여 풀어보자!

let n = 5;
console.log(solution(n));

n = 10302;
console.log(solution(n));

n = 123456;
console.log(solution(n));

// https://school.programmers.co.kr/learn/courses/30/lessons/12914

export const solution = (n: number): number => {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
};

console.log(solution(4)); // 5
console.log(solution(10)); // 3

// 매개변수
// n : 칸을 나타내는 자연수

// 출력
// 1. 1번째 칸부터 n번째 칸까지 도달하는 방법의 수를 1234567로 나눈 나머지

// 문제 설명 및 해결
// 1번째 칸부터 n번째 칸까지 도달하는 방법의 수를 1234567로 나눈 나머지를 반환하는 문제
// 칸을 한번에 1칸 또는 2칸씩 뛰어서 도달할 수 있다.
// DP를 활용해서 문제를 해결했다.
// dp[1] = 1, dp[2] = 2로 초기화하고, dp[i] = dp[i - 1] + dp[i - 2]로 점화식을 세웠다.
// 그리고 dp[i]를 1234567로 나눈 나머지를 반환했다.
// 처음에는 1234567로 나누지 않고 dp[i]에 저장했는데, 테스트케이스에서 실패했고
// 찾아보니 1234567로 나눈 나머지를 반환해야 했다.
// 또한 전형적인 피보나치 수열 문제라는 것도 알게 되었다.

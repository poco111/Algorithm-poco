// https://school.programmers.co.kr/learn/courses/30/lessons/154538

export const solution = (x: number, y: number, n: number): number => {
  // dp 배열의 각 index의 값은 해당 index의 값까지 도착하는데의 최소 연산 횟수
  const dp = Array.from({ length: y + 1 }, () => Infinity);

  // x부터 시작이며, x는 연산 횟수가 0부터 시작한다.
  dp[x] = 0;

  // dp[i] + 1과 비교하는 이유는 연산 횟수를 1씩 카운트 하기 때문이다.
  // 따라서, 해당 index의 기존 값과 새로운 값 중 최솟값을 넣어줘야 한다.
  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
};

console.log(solution(2, 8, 3)); // 2
console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1

// 매개변수
// x, y, n : 자연수
// 1 ≤ x ≤ y ≤ 1,000,000
// 1 ≤ n < y

// 출력
// x를 y로 변환할 때, 필요한 최소 연산 횟수를 반환(x를 y로 변환할 수 없다면 -1을 반환)

// 문제 설명 및 해결
// x를 y로 변환할 때 다음과 같은 연산을 사용할 수 있다
// 1. x에 n을 더한다
// 2. x에 2를 곱한다
// 3. x에 3을 곱한다
// x를 y로 변환할 때, 필요한 최소 연산 횟수를 찾는 문제(x를 y로 변환할 수 없다면 -1을 반환)

// https://school.programmers.co.kr/learn/courses/30/lessons/12945

export const solution = (n: number) => {
  const fibonacciArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacciArr[i] = (fibonacciArr[i - 1] + fibonacciArr[i - 2]) % 1234567;
  }

  return fibonacciArr[n];
};

// 매개변수
// n : 피보나치 수열의 n번째 수

// 출력
// n번째 피보나치 수를 1234567으로 나눈 나머지

// 문제 설명 및 해결
// 피보나치 수열은 0과 1로 시작하며, 이후에는 이전의 두 수를 더한 값이 된다.
// 피보나치 수열의 n번째 수를 1234567로 나눈 나머지를 구하는 문제이다.
// 피보나치 수열을 구하기 위해 배열을 만들고, 0번째와 1번째 수는 0과 1로 초기화한다.
// 그리고 2번째부터 n번째까지 반복문을 돌면서 피보나치 수열을 구한다.
// 이때, 1234567로 나눈 나머지를 구해야 하므로, 나머지 연산을 해주면 된다.
// 그리고 n번째 피보나치 수를 반환하면 된다.

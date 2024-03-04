// https://school.programmers.co.kr/learn/courses/30/lessons/12927

export const solution = (n: number, works: number[]) => {
  if (works.reduce((acc, cur) => (acc += cur), 0) <= n) return 0;

  const sortedWorks = works.sort((a, b) => b - a);

  while (n) {
    const maxWork = sortedWorks[0];

    for (let i = 0; i < sortedWorks.length; i++) {
      if (sortedWorks[i] === maxWork) {
        sortedWorks[i] -= 1;
        n -= 1;
      }

      if (!n) break;
    }
  }
  return sortedWorks.reduce((acc, cur) => (acc += Math.pow(cur, 2)), 0);
};

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 0

// 매개변수
// n : 퇴근까지 남은 시간
// works : 각 일에 대한 작업량을 담은 배열

// 출력
// 최소한의 야근 피로도를 반환

// 문제 설명 및 해결
// 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값이다
// 1시간 동안 작업량 1만큼을 처리할 수 있을 때, 야근 피로도를 최소화한 값을 반환하는 문제(야근을 하지 않아도 되는 경우에는 0을 반환한다)
// 첫 번째 시도와 달리 while문이 한번 순회할 때, 최대한 많은 작업량을 줄이기 위해 for문을 순회하여 가장 큰 값에 대해서는 한번의 while문에서 빼주는 연산을 처리하였고, 이를 위해 매번 내림차순으로 정렬하지 않고 max 값을 구해 계산했다.
// 먼저 전체 작업량의 합이 n보다 작거나 같은 경우에는 야근을 하지 않아도 되기 때문에 0을 반환했고
// while문을 순회하면서 내림차순으로 정렬한 sortedWorks 배열에서 max 값을 구하고, for문으로 최대값과 동일한 값들을 1씩 빼주었다.
// 만약 for문을 순회하면서 n이 0이 되는 경우에는 for문을 탈출(break)하였다.
// while문을 모두 순회한 후 sortedWorks 배열의 요소들을 제곱하여 모두 더한 값을 반환했다.

// 첫 번째 시도(실패)
// 각 작업량의 제곱 값을 더하기 때문에, 큰 수를 없애는 것이 중요하다고 생각했다.
// n만큼 while문을 순회하면서 works 배열을 내림차순으로 정렬하여 0 번째 (가장 큰 수)를 1만큼 빼주었다.
// 마지막에는 works 배열을 순회하면서 만약 works의 i번째 값이 음수일 경우에는 0을 반환하고 아닌 경우에는 제곱값을 answer에 더해줬다.
// 효율성 테스트에서 시간초과 발생
// n이 최대 100만이고, works의 길이가 최대 20만이기 때문에 while문 내부에서 sort 메서드를 사용하는 경우 시간복잡도가 매우 높다.

// export const solution = (n: number, works: number[]) => {
//   let answer = 0;

//   while (n) {
//     works.sort((a, b) => b - a);
//     works[0] -= 1;
//     n -= 1;
//   }

//   for (let i = 0; i < works.length; i++) {
//     if (works[i] < 0) return 0;
//     answer += Math.pow(works[i], 2);
//   }

//   return answer;
// };

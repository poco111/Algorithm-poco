// https://school.programmers.co.kr/learn/courses/30/lessons/87390

export const solution = (n: number, left: number, right: number): number[] => {
  const answer = [];

  while (left <= right) {
    answer.push(Math.max(Math.floor(left / n), left % n) + 1);
    left += 1;
  }

  return answer;
};

console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]

// 매개변수
// n : 정수
// left : 정수
// right : 정수

// 출력
// 문제의 조건대로 1차원 배열을 만들었을 때, 1차원 배열

// 문제 설명 및 해결
// 다음과 같은 과정으로 1차원 배열을 만들어서 반환한다.
// n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
// i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
// 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
// 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
// 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.

// left와 right에 좌표에 해당하는 값을 구하는 방법은 다음과 같다.
// 먼저 left 좌표와 right 좌표의 위치는 다음과 같다.
// left => left / n 행, left % n 열
// right => right / n 행, right % n열
// 즉, 둘다 [(left 혹은 right)/n, (left 혹은 right) % n]으로 좌표를 구할 수 있다.
// 2차 행렬에서 좌표의 값은 Math.max(x, y) + 1(배열의 값이 1부터 시작하기 때문)로 나타낼 수 있다.

// 첫 번째 시도
// 문제의 규칙에 맞춰 n x n의 2차원 배열을 만들고, flat과 slice를 사용하여 답을 반환하였다.
// n이 최대 10^7이기 때문에, O(n^2)은 시간복잡도에서 통과할 수 없었다.
// export const solution = (n: number, left: number, right: number): number[] => {
//   const arr = Array.from({ length: n }, () =>
//     Array.from({ length: n }, () => 1)
//   );

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       arr[i][j] = Math.max(i + 1, j + 1);
//     }
//   }

//   return arr.flat().slice(left, right + 1);
// };

// https://school.programmers.co.kr/learn/courses/30/lessons/68645

export const solution = (n: number): number[] => {
  const answer = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

  let x = 0;
  let y = 0;

  let num = 1;
  while (num <= (n * (n + 1)) / 2) {
    while (x < n && answer[x][y] === 0) {
      answer[x][y] = num;
      x++;
      num++;
    }

    x--;
    y++;

    while (y < n && answer[x][y] === 0) {
      answer[x][y] = num;
      y++;
      num++;
    }
    x--;
    y -= 2;

    while (x > 0 && answer[x][y] === 0) {
      answer[x][y] = num;
      x--;
      y--;
      num++;
    }
    x += 2;
    y += 1;
  }

  return answer.flat();
};

console.log(solution(4)); // [1, 2, 9, 3, 10, 8, 4, 5, 6, 7]
console.log(solution(5)); // [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]
console.log(solution(6)); // [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]

// 매개변수
// n : 1 이상 1,000 이하인 자연수

// 출력
// 높이가 n인 달팽이 채우기를 할 때, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 반환

// 문제 설명 및 해결
// 먼저 answer 배열을 정답에서 요구하는 형태의 2차원 배열로 초기화한다.
// x, y 값을 0으로, num을 1로 초기화한다.
// 큰 while문을 num이 n * (n + 1) / 2 보다 작거나 같을 때까지 반복한다.
// 큰 while문의 한번 반복은 겉에서부터 큰 삼각형을 그리는 것이다.
// 큰 while문 내부에서는 순서대로 삼각형의 위 꼭지점에서부터 좌측으로 이동하며 숫자를 채운다.

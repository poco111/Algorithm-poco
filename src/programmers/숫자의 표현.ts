// https://school.programmers.co.kr/learn/courses/30/lessons/12924

export const solution = (n: number): number => {
  let answer = 0;

  let start = 1;
  let end = 1;
  let sequenceSum = start;

  while (end <= n) {
    if (sequenceSum < n) {
      end++;
      sequenceSum += end;
    }

    if (sequenceSum === n) {
      answer++;
      end++;
      sequenceSum += end;
    }

    if (sequenceSum > n) {
      sequenceSum -= start;
      start++;
    }
  }
  return answer;
};

console.log(solution(15)); // 4

// 매개변수
// n : 10,000 이하의 자연수

// 출력
// 연속된 자연수들로 n을 표현하는 방법의 수를 반환하는 문제

// 문제 설명 및 해결
// 매개변수 n이 주어질 때, n을 연속된 자연수들로 표현하는 방법의 수를 반환하는 문제다.
// 투포인터 알고리즘을 사용해서 문제를 해결했다.
// start와 end를 각각 1로 초기화하고, while문(end가 n보다 작거나 같을때 까지)을 반복한다.
// while문 안에서는 sequenceSum이 n보다 작다면 end를 1 증가시키고, sequenceSum에 end를 더한다.
// sequenceSum이 n과 같다면 answer를 1 증가시키고, end를 1 증가시키고, sequenceSum에 end를 더한다.
// sequenceSum이 n보다 크다면 sequenceSum에서 start를 빼고, start를 1 증가시킨다.
// while문이 종료되면 answer를 반환한다.

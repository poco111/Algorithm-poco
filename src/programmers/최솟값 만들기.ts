// https://school.programmers.co.kr/learn/courses/30/lessons/12941

export const solution = (A: number[], B: number[]) => {
  let answer = 0;

  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i < sortedA.length; i++) {
    answer += sortedA[i] * sortedB[i];
  }

  return answer;
};

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10

// 매개변수
// A : 1,000 이하의 자연수를 담은 배열
// B : 1,000 이하의 자연수를 담은 배열

// 출력
// 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱하고 배열의 길이만큼 이 과정을 반복했을 때, 두 수를 곱한 값을 누적하여 더했을 때, 최솟값을 반환

// 문제 설명 및 해결
// 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱하고 배열의 길이만큼 이 과정을 반복했을 때, 두 수를 곱한 값을 누적하여 더했을 때, 최솟값을 구하는 문제이다
// 하나의 배열의 최솟값과 다른 배열의 최댓값을 곱하면 최솟값이 나온다.
// A를 오름차순으로 정렬하고, B를 내림차순으로 정렬한다.
// answer를 0으로 초기화하고, for문을 사용하여 sortedA.length만큼 반복한다.
// answer에 sortedA[i] * sortedB[i]를 더한다.

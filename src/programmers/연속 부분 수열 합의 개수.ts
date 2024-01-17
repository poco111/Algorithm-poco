// https://school.programmers.co.kr/learn/courses/30/lessons/131701

export const solution = (elements: number[]): number => {
  const answerSet = new Set();
  const copyElements = [...elements, ...elements.slice(0, elements.length - 1)];
  let distance = 1;

  while (distance <= elements.length) {
    for (let i = 0; i < elements.length; i++) {
      let sum = 0;
      for (let j = i; j < i + distance; j++) {
        sum += copyElements[j];
      }
      answerSet.add(sum);
    }
    distance++;
  }

  return answerSet.size;
};

console.log(solution([7, 9, 1, 1, 4])); // 18

// 매개변수
// elements : 원형 수열의 모든 원소(숫자로 이루어진 1차원 배열)

// 출력
// 원형 수열의 연속 부분 수열의 합으로 만들 수 있는 수의 개수

// 문제 설명 및 해결
// 원형 수열의 모든 원소가 주어질 때, 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 반환하는 문제(중복 값은 제외한다)
// 먼저 elements 배열을 복사하여 원형 수열을 만들고, 간격이 1부터 elements.length까지의 while문을 반복한다.
// while문 내부에서는 이중 for문을 통해서 elements 배열의 시작 인덱스 값부터 distance만큼까지의 elements 배열의 인덱스의 값을 더한 값을 answerSet에 저장한다.
// while문이 종료되면 answerSet의 size를 반환한다.

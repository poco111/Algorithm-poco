// https://school.programmers.co.kr/learn/courses/30/lessons/178870

export const solution = (sequence: number[], k: number): number[] => {
  // k를 만족하는 요소가 있는 경우에는 길이가 1로 가장 짧기 때문에 바로 return
  const foundIndex = sequence.indexOf(k);
  if (foundIndex !== -1) return [foundIndex, foundIndex];

  let answer: number[][] = [];

  const sequenceArr = [];

  let start = 0;
  let end = 0;
  let sequenceSum = sequence[start];

  while (end < sequence.length) {
    if (sequenceSum < k) {
      end++;
      sequenceSum += sequence[end];
    }

    if (sequenceSum === k) {
      sequenceArr.push([start, end]);
      end++;
      sequenceSum += sequence[end];
    }

    if (sequenceSum > k) {
      sequenceSum -= sequence[start];
      start++;
    }
  }

  for (let i = 0; i < sequenceArr.length; i++) {
    if (answer.length === 0) {
      answer.push(sequenceArr[i]);
      continue;
    }

    if (sequenceArr[i][1] - sequenceArr[i][0] < answer[0][1] - answer[0][0]) {
      answer = [sequenceArr[i]];
    }
  }

  return answer[0];
};

console.log(solution([2, 2, 2, 2, 2], 6)); // [0,2]
console.log(solution([1, 2, 3, 4, 5], 7)); // [2, 3]
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6, 6]

// 매개변수
// sequence : 수열의 모든 원소(숫자로 이루어진 1차원 배열)
// k : 부분 수열의 합

// 출력
// sequence의 부분 수열 중 합이 k인 부분 수열의 시작 인덱스와 마지막 인덱스를 담은 1차원 배열

// 문제 설명 및 해결
// 수열의 부분 수열 중 합이 k인 부분 수열 시작 인덱스와 마지막 인덱스를 담은 1차원 배열을 반환하는 문제
// 만약 부분 수열이 여러 개인 경우 길이가 가장 짧은 수열의 시작 인덱스와 마지막 인덱스를 반환
// 길이가 짧은 수열이 여러개인 경우, 시작 인덱스가 가장 작은 수열의 시작 인덱스와 마지막 인덱스를 반환
// 투포인터 알고리즘을 사용해서 문제를 해결했다.
// 가장 먼저 sequence 배열에서 k와 일치하는 요소가 있다면 해당 요소의 인덱스를 조기 반환한다.
// k와 일치하는 요소가 없다면 start와 end를 0으로 초기화하고, sequenceSum에 sequence[start]를 할당한다.
// while문을 통해 end가 sequence의 길이보다 작을 때까지 반복한다.(end가 sequence의 마지막 요소까지 판단했다면 더이상 판단할 필요가 없기 때문)
// 만약 sequenceSum이 k보다 작다면 end를 1 증가시키고 sequenceSum에 sequence[end]를 더한다.
// 만약 sequenceSum이 k와 같다면 sequenceArr에 [start, end]를 push하고 end를 1 증가시키고 sequenceSum에 sequence[end]를 더한다.
// 만약 sequenceSum이 k보다 크다면 sequenceSum에서 sequence[start]를 빼고 start를 1 증가시킨다.
// 다음으로 sequenceArr를 순회하면서 answer에 값을 할당한다.
// 만약 answer의 길이가 0이라면 answer에 sequenceArr[i]를 할당한다.
// 만약 answer의 길이가 0이 아니면 sequenceArr[i]의 길이가 answer[0]의 길이보다 작다면 answer에 sequenceArr[i]를 할당한다.
// 마지막으로 answer[0]을 반환한다.

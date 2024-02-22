// https://school.programmers.co.kr/learn/courses/30/lessons/118667

export const solution = (queue1: number[], queue2: number[]) => {
  let answer = 0;

  const initialQueueLength = queue1.length;

  let queue1Idx = 0;
  let queue1Sum = queue1.reduce((acc, cur) => (acc += cur), 0);

  let queue2Idx = 0;
  let queue2Sum = queue2.reduce((acc, cur) => (acc += cur), 0);

  while (
    (answer <= initialQueueLength * 2 && queue1Idx < queue1.length) ||
    (answer <= initialQueueLength * 2 && queue2Idx < queue2.length)
  ) {
    if (queue1Sum === queue2Sum) return answer;

    if (queue1Sum > queue2Sum) {
      queue1Sum -= queue1[queue1Idx];
      queue2Sum += queue1[queue1Idx];
      queue2.push(queue1[queue1Idx]);
      queue1Idx += 1;
    } else if (queue1Sum < queue2Sum) {
      queue1Sum += queue2[queue2Idx];
      queue2Sum -= queue2[queue2Idx];
      queue1.push(queue2[queue2Idx]);
      queue2Idx += 1;
    }

    answer += 1;
  }
  return -1;
};

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1

// 매개변수
// queue1 : 숫자로 이루어진 배열
// queue2 : 숫자로 이루어진 배열
// queue1과 queue2의 길이는 같다

// 출력
// 각 큐의 원소 합을 같게 만들기 위해 필요한 최소 작업의 횟수를 반환

// 문제 설명 및 해결
// 하나의 큐에서 pop을 하고 다른 큐에 insert하는 것을 하나의 작업 횟수로 가정했을 때
// 각 큐의 원소 합을 같게 만들기 위해 필요한 최소 작업 횟수를 반환하는 문제
// 두 포인터 방식으로 풀었으며, queue1과 queue2의 idx와 sum을 관리하면서 작업을 수행했다
// while문을 반복하면서 두 큐의 합이 같아지면 answer를 반환하고, answer가 초기 큐의 길이의 2배의 + 2보다 커지면 -1을 반환했다
// answer가 초기 큐의 길이의 2배의 + 2보다 커지면 -1을 반환한 이유는,
// answer의 길이가 초기 큐의 길이의 2배의 + 2보다 커지면 두 큐의 합을 같게 만들 수 없다는 것을 의미하기 때문이다

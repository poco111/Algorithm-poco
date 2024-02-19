// https://school.programmers.co.kr/learn/courses/30/lessons/42584

export const solution = (prices: number[]): number[] => {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let stack = 0;
    for (let j = i + 1; j < prices.length; j++) {
      stack++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(stack);
  }

  return answer;
};

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]

// 매개변수
// prices : 초 단위로 기록된 주식 가격

// 출력
// 가격이 떨어지지 않은 기간은 몇 초인지를 담은 배열

// 문제 설명 및 해결
// 주식 가격이 떨어지지 않은 기간을 구하는 문제이다.
// 이중 for문을 사용하여 각 가격에 대해 뒤의 가격들과 비교하여 가격이 떨어지지 않은 기간을 구하였다.

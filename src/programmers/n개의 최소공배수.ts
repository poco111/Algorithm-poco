// https://school.programmers.co.kr/learn/courses/30/lessons/12953

const getGreatestCommonDivisor = (minNum: number, maxNum: number): number => {
  return minNum % maxNum === 0
    ? maxNum
    : getGreatestCommonDivisor(maxNum, minNum % maxNum);
};

const getLowestCommonMultiple = (minNum: number, maxNum: number): number => {
  return (minNum * maxNum) / getGreatestCommonDivisor(minNum, maxNum);
};

export const solution = (arr: number[]): number => {
  let standNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const minNum = Math.min(standNum, arr[i]);
    const maxNum = Math.max(standNum, arr[i]);

    standNum = getLowestCommonMultiple(minNum, maxNum);
  }
  return standNum;
};

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6

// 매개변수
// arr : 자연수가 담긴 배열

// 출력
// arr 요소들의 최소 공배수를 반환하는 문제

// 문제 설명 및 해결
// 자연수 배열 arr이 주어졌을 때, arr 요소들의 최소 공배수를 구하는 문제
// 매개변수 arr 배열의 0번째와 1번째 요소의 최소공배수를 구하고 그 최소공배수와 arr의 다음 요소의
// 최소공배수를 구하는 방식으로 문제를 해결했다.
// 먼저 최소공배수를 구하는 방법은
// A와 B의 최대공약수를 구하고 A X B / 최대공약수를 하면 최소공배수를 구할 수 있다.
// 최대공약수를 구하는 방법은 유클리드 호제법을 사용하여 구할 수 있다.
// 유클리드 호제법이란 A와 B의 최대공약수를 구하는 방법으로, 다음과 같다.
// A, B를 서로 나눌때, 나누어진다면 B가 최대 공약수 이다. (A > B)
// 만약 A, B가 나누어지지 않으면 A는 B가 되고, B는 B와 A를 B로 나눈 나머지가 되어 다시 A, B를 나눈다.

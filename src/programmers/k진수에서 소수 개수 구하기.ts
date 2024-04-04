// https://school.programmers.co.kr/learn/courses/30/lessons/92335

const checkPrime = (num: number) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const convertToBaseK = (num: number, k: number) => {
  return num.toString(k);
};

export const solution = (n: number, k: number): number => {
  const answer = [];
  const num = k === 10 ? n : convertToBaseK(n, k);

  const numArr = num.toString().split('');

  let temp = '';

  numArr.forEach((el) => {
    if (el === '0') {
      if (temp) {
        if (checkPrime(parseInt(temp))) {
          answer.push(parseInt(temp));
        }
        temp = '';
      }
    } else {
      temp += el;
    }
  });

  if (temp) {
    if (checkPrime(parseInt(temp))) {
      answer.push(parseInt(temp));
    }
  }
  return answer.length;
};

console.log(solution(437674, 3)); // 3 211, 2, 11
console.log(solution(110011, 10)); // 2 11, 11

// 매개변수
// n : 1 이상 100,000 이하인 자연수
// k : 2 이상 10 이하인 자연수

// 출력
// 변환된 수 안에서 찾을 수 있는 위 조건에 맞는 소수의 개수

// 문제 설명 및 해결
// 매개변수 n을 k진수로 변환했을 때, 변환된 수 안에 아래 조건에 맞는 소수가 몇 개인지 구하는 문제
// 0P0처럼 소수 양쪽에 0이 있는 경우
// P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
// 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
// P처럼 소수 양쪽에 아무것도 없는 경우
// 단, P는 각 자릿수에 0을 포함하지 않는 소수입니다.
// 예를 들어, 101은 P가 될 수 없습니다.

// n을 k진수로 변환한 후 배열로 만들고 forEach로 순회하면서 해당 요소가 0이 아니라면 temp에 저장하고 아닌 경우에는 temp에 저장된 값을 소수인지 판별한 후 answer에 추가
// 마지막에 temp에 값이 남아있는 경우에도 소수인지 판별한 후 answer에 추가

// https://school.programmers.co.kr/learn/courses/30/lessons/12985

export const solution = (n: number, a: number, b: number): number => {
  let answer = 0;

  while (n >= 2) {
    if ((a % 2 === 0 && a - 1 === b) || (a % 2 !== 0 && a + 1 === b)) {
      return answer + 1;
    } else {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      n = Math.ceil(n / 2);
      answer++;
    }
  }
  return 1;
};

console.log(solution(8, 4, 7)); // 3

// 매개변수
// n : 참가자의 수
// a : 참가자 A의 첫 라운드의 번호
// b : 참가자 B의 첫 라운드의 번호

// 출력
// A와 B가 몇 번째 라운드에서 만나는지 반환

// 문제 설명 및 해결
// n명이 대회에 참가하고 1번부터 n번까지 번호를 부여받는다.
// 1-2, 3-4 ... (n-1)-n 참가자끼리 대결을 하고 이긴 사람이 다음 라운드로 진출한다.
// 다음 라운드에서는 다시 1번부터 번호를 부여받는다.
// A와 B가 만나는 라운드를 반환하는 문제이다.(A와 B는 서로 만나기 전까지 항상 이긴다고 가정한다.)
// while 문을 사용하여 n이 2 이상일 때까지 반복한다.
// a가 짝수이고 a-1이 b와 같거나 a가 홀수이고 a+1이 b와 같다면 현재 a와 b가 대결하고 있기 때문에 answer에 1을 더한 값을 반환한다.
// 그렇지 않다면 a, b, n을 각각 2로 나누고 answer에 1을 더한다.

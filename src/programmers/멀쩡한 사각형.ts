// https://school.programmers.co.kr/learn/courses/30/lessons/62048

const getGreatestCommonDivisor = (minNum: number, maxNum: number): number => {
  return minNum % maxNum === 0
    ? maxNum
    : getGreatestCommonDivisor(maxNum, minNum % maxNum);
};

export const solution = (w: number, h: number): number => {
  return w * h - (w + h - getGreatestCommonDivisor(w, h));
};

console.log(solution(8, 12)); // 80

// 매개변수
// w: 직사각형의 가로 길이(cm)
// h: 직사각형의 세로 길이(cm)

// 출력
// 직사각형 대각선 꼭지점 2개를 잇는 방향으로 잘랐을 때, 사용할 수 있는 1cm x 1cm 정사각형의 개수

// 문제 설명 및 해결
// 규칙을 찾아보면, 잘리는 사각형을 구하는 공식은 사각형의 가로 + 사각형의 세로 - (사각형의 가로, 세로의 최대공약수)가 된다.
// 즉, 멀쩡한 사각형의 개수는 전체 사각형의 개수(가로 * 세로)에서 잘리는 사각형(가로 + 세로 - 최대공약수)를 뺀 값임을 알 수 있다.
// 최대공약수를 구하는 방법은 유클리드 호제법을 사용하여 구할 수 있다.
// 유클리드 호제법이란 A와 B의 최대공약수를 구하는 방법으로, 다음과 같다.
// A, B를 서로 나눌때, 나누어진다면 B가 최대 공약수 이다. (A > B)
// 만약 A, B가 나누어지지 않으면 A는 B가 되고, B는 B와 A를 B로 나눈 나머지가 되어 다시 A, B를 나눈다.

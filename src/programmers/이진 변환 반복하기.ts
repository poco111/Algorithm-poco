// https://school.programmers.co.kr/learn/courses/30/lessons/70129

export const solution = (s: string): number[] => {
  let str = s;
  const answer = [0, 0];

  while (str !== '1') {
    let temp = 0;
    if (str.indexOf('0') !== -1) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
          temp += 1;
        }
      }
    }
    answer[1] += temp;
    answer[0] += 1;
    str = (str.length - temp).toString(2);
  }

  return answer;
};

console.log(solution('110010101001'));

// 매개변수
// s : 0과 1로 이루어진 문자열

// 출력
// S를 "1"이 될 때까지 이진 변환한 횟수와 변환 과정에서 제거된 0의 개수를 배열에 담아 반환

// 문제 설명 및 해결
// 0과 1로 이루어진 문자열 S가 주어진다.
// S가 "1"이 될 때까지 다음과 같은 과정을 반복한다.
// 1. S의 모든 0을 제거한다.
// 2. S의 길이를 c라고 하자. S를 "c를 2진법으로 표현한 문자열"로 바꾼다.
// s가 "1"이 되기까지 과정을 반복하면서, 과정을 반복한 횟수와 제거된 0의 갯수를 배열에 담아 반환하라.
// 변수 str을 선언하고 매개변수를 담아준다. while문(str이 -1이 아닐때까지 반복)을 반복하면서
// temp라는 변수를 선언하고 0으로 초기화한다.(이번 반복에서 제거된 0의 갯수를 담을 변수)
// 만약 str에 0이 포함되어 있다면, for문을 순회하면서 str의 길이만큼 반복하면서
// 만약 str[i]가 0이라면 temp를 1씩 증가시킨다.
// answer[1]에 temp를 더해주고, answer[0]에 1을 더해준다.
// str을 (str.length - temp).toString(2)로 바꿔준다.

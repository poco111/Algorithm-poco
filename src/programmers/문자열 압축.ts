// https://school.programmers.co.kr/learn/courses/30/lessons/60057

export const solution = (s: string): number => {
  if (s.length === 1) return 1;

  let answer = s.length;

  for (let cutLength = 1; cutLength <= s.length / 2; cutLength++) {
    let compressedStr = '';
    let tempStr = s.slice(0, cutLength);
    let sequenceCount = 1;

    for (let i = cutLength; i <= s.length; i += cutLength) {
      const nextStr = s.slice(i, i + cutLength);
      if (tempStr === nextStr) {
        sequenceCount++;
      } else {
        compressedStr += (sequenceCount > 1 ? sequenceCount : '') + tempStr;
        tempStr = nextStr;
        sequenceCount = 1;
      }
    }

    compressedStr += (sequenceCount > 1 ? sequenceCount : '') + tempStr;
    answer = Math.min(answer, compressedStr.length);
  }

  return answer;
};

console.log(solution('aabb')); // 4
console.log(solution('aabbaccc')); // 7
console.log(solution('ababcdcdababcdcd')); // 9
console.log(solution('abcabcdede')); // 8

// 매개변수
// s : 압출할 문자열

// 출력
// 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이

// 문제 설명 및 해결
// 1개 이상 단위로 문자열을 잘라 압축할 때, 표현한 문자열 중 가장 짧은 것의 길이를 구하는 문제
// 만약 매개변수 s의 길이기 1이면 1을 반환한다.
// answer 변수를 s의 길이로 초기화한다.
// 첫 번째 for문을 사용하여 cutLength를 1부터 s.length / 2까지 반복한다.
// s.length /2 까지만 반복하는 이유는 s.length / 2보다 큰 단위로 자르면 압축이 불가능하기 때문이다.
// compressedStr, tempStr, sequenceCount를 초기화하고 두 번째 for문을 사용하여 i를 cutLength부터 s.length까지 cutLength만큼 증가시키며 반복한다.
// nextStr에 s.slice(i, i + cutLength)를 할당한다.
// 만약 tempStr와 nextStr이 같다면 sequenceCount를 1 증가시킨다.
// 그렇지 않다면 compressedStr에 (sequenceCount > 1 ? sequenceCount : '') + tempStr를 할당하고 tempStr에 nextStr를 할당하고 sequenceCount를 1로 초기화한다.
// 마지막 남은 tempStr을 compressedStr에 합치기 위해 compressedStr에 (sequenceCount > 1 ? sequenceCount : '') + tempStr를 한번 더 실행한다.
// answer와 compressedStr.length 중 작은 값을 answer에 할당한다.

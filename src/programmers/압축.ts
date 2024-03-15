// https://school.programmers.co.kr/learn/courses/30/lessons/17684

export const solution = (msg: string): number[] => {
  const answer = [];
  // 새롭게 추가되는 색인번호는 27부터 시작
  let startNum = 27;

  // 새롭게 추가되는 문자열을 담을 사전
  const dictionaryMap = new Map();

  // 현재 문자열
  let curStr = msg[0];

  for (let i = 1; i <= msg.length; i++) {
    // 현재 문자열과 i번째 문자열을 더했을 때, 사전에 해당 문자열이 있는 경우에는 curStr에 i번째 문자열을 저장하고 continue
    if (dictionaryMap.has(curStr + msg[i])) {
      curStr = curStr + msg[i];
      continue;
    } else {
      // 현재 문자열과 i번째 문자열을 더한 문자열이 사전에 없는 경우에는
      // 사전에 현재 문자열 + i번째 문자열을 추가해주고
      // startNum을 1 추가
      dictionaryMap.set(curStr + msg[i], startNum);
      startNum += 1;
      // 만약 curStr의 길이가 1인 경우에는 charCodeAt을 활용해서 색인번호를 찾고
      // 1이 아닌 경우에는, 사전에서 색인번호를 찾아서 answer에 push
      curStr.length === 1
        ? answer.push(curStr.charCodeAt(0) - 64)
        : answer.push(dictionaryMap.get(curStr));
      // curStr은 i번째 문자열로 교체
      curStr = msg[i];
    }
  }
  return answer;
};

console.log(solution('KAKAO')); // [11, 1, 27, 15]
console.log(solution('TOBEORNOTTOBEORTOBEORNOT')); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]

// 매개변수
// msg : 문자열

// 출력
// 매개변수 msg를 압축했을 때, 색인변호를 담은 배열

// 문제 설명 및 해결
// LZW 압축을 통해 msg를 압축했을 때, 색인번호를 담은 배열을 반화하는 문제
// LZW 압축은 다음과 같다.
// 1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화
// 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 W 찾기
// 3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거
// 4. 입력에서 처리되지 않은 문자가 있으면(c), w + c에 해당하는 단어를 사전에 맨 뒤에 등록
// 5. 단계 2로 돌아간다
// 사전은 1부터 26까지 A~Z 알파벳 순으로 색인되어있다

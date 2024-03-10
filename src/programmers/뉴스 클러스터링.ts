// https://school.programmers.co.kr/learn/courses/30/lessons/17677

const strToArr = (str: string): string[] => {
  const pattern = /[a-zA-Z]/g;
  const answer: string[] = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (pattern.test(str[i]) && pattern.test(str[i + 1])) {
      answer.push((str[i] + str[i + 1]).toLowerCase());
    }
  }
  return answer;
};

export const solution = (str1: string, str2: string): number => {
  const str1Arr = strToArr(str1);
  const str2Arr = strToArr(str2);

  console.log(str1Arr);
  console.log(str2Arr);

  let intersection = 0;
  let union = 0;

  union = str1Arr.length;

  for (let i = 0; i < str2Arr.length; i++) {
    if (str1Arr.includes(str2Arr[i])) {
      intersection += 1;
      str1Arr.splice(str1Arr.indexOf(str2Arr[i]), 1);
    } else {
      union += 1;
    }
  }

  // console.log('inter', intersection);
  // console.log('un', union);
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
};

// console.log(solution('FRANCE', 'french')); // 16384
// console.log(solution('handshake', 'shake hands')); // 65536
// console.log(solution('aa1+aa2', 'AAAA12')); // 43690
// console.log(solution('E=M*C^2', 'e=m*c^2')); // 65536
// console.log(solution('aaabbcccccccc', 'aaaabbcccc')); // 40329

// 매개변수
// str1 : 문자열
// str2 : 문자열

// 출력
// 두 문자열의 자카드 유사도를 반환하는 문제

// 문제 설명 및 해결
// 두 문자열의 자카드 유사도를 구하는 문제
// 자카드 유사도란 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값
// 만약 두 집합 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 1로 정의한다.

// 다중집합 A는 원소 "1"을 3개 가지고 있고, 다중집합 B는 원소 "1"을 5개 가지고 있다면,
// 다중집합 A와 B의 교집합은 원소 "1"을 min(3,5)인 3개, 합집합은 "1"을 max(3,5)인 5개가 된다.

// 문자열 사이의 유사도를 계산하는데 이용하면, 두 글자씩 끊어서 다중집합을 만들 수 있다.
// "FRANCE"와 "FRENCH"는 두 글자씩 끊어서 자카드 유사도를 판단하면 교집합 2, 합집합 8로 0.25가 된다.

// 입력으로 str1, str2라는 문자열이 들어올 때, 매개변수 str1과 str2를 두 글자씩 끊어서 다중집합 원소로 만들고
// 영문으로 된 글자 쌍만 유효, 기타 공백이나 숫자, 특수 문자가 들어있는 경우에는 그 글자 쌍을 버린다.
// 만약 "ab+"가 들어오면, "ab"만 다중집합의 원소로 삼고, "b+"는 버린다.
// 다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다.

// str1, str2의 자카드 유사도를 반환하는 문제(유사도 값은 0에서 1사이의 실수이므로, 65536을 곱한 후 소수점 아래를 버리고 정수부만 출력)
// str1, str2를 순회하면서 연속으로 영문자열인 경우에 두 문자열씩 자른 배열을 반환하는 함수 strToArr을 만들고
// union은 처음 str1Arr의 길이로 정한다.
// str2Arr을 순회하면서, str1Arr에서 동일한 문자열이 있다면 intersection의 값을 1 더해주고
// 해당 문자열을 str1Arr에서 splice로 제거한다.
// 만약 str1Arr에 일치하는 문자열이 없다면 union을 더해준다.

// 첫 번째 시도
// 테스트 케이스 4, 7, 9, 10, 11 실패
// 반례 'aaabbcccccccc', 'aaaabbcccc' -> 정답 : 40329, 출력 값 : 65536
// const strToArr = (str) => {
//   const pattern = /[a-z,A-Z]/;
//   const answer = [];
//   for (let i = 0; i < str.length - 1; i++) {
//     if (pattern.test(str[i]) && pattern.test(str[i + 1])) {
//       answer.push((str[i] + str[i + 1]).toLowerCase());
//     }
//   }
//   return answer;
// };

// const solution = (str1, str2) => {
//   const str1Arr = strToArr(str1);
//   const str2Arr = strToArr(str2);

//   let intersection = 0;
//   let union = str1Arr.length;

//   const longestArr = str1Arr.length >= str2Arr.length ? str1Arr : str2Arr;
//   const shortestArr = str1Arr.length >= str2Arr.length ? str2Arr : str1Arr;

//   for (let i = 0; i < longestArr.length; i++) {
//     if (shortestArr.includes(str1Arr[i])) {
//       intersection += 1;
//     } else {
//       union += 1;
//     }
//   }

//   return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
// };

// 두 번째 시도
// 테스트 케이스 4, 7, 10, 11 실패
// 두 번째 시도에서의 문제점은 결국, 정규표현식 내부의 ","였다...
// const strToArr = (str: string): string[] => {
//   const pattern = /[a-z,A-Z]/;
//   const answer: string[] = [];
//   for (let i = 0; i < str.length - 1; i++) {
//     if (pattern.test(str[i]) && pattern.test(str[i + 1])) {
//       answer.push((str[i] + str[i + 1]).toLowerCase());
//     }
//   }
//   return answer;
// };

// export const solution = (str1: string, str2: string): number => {
//   const str1Arr = strToArr(str1);
//   const str2Arr = strToArr(str2);

//   const longestArr = str1Arr.length >= str2Arr.length ? str1Arr : str2Arr;
//   const shortestArr = str1Arr.length >= str2Arr.length ? str2Arr : str1Arr;

//   let intersection = 0;
//   let union = shortestArr.length;

//   for (let i = 0; i < longestArr.length; i++) {
//     if (shortestArr.indexOf(longestArr[i]) !== -1) {
//       intersection += 1;
//       shortestArr.splice(shortestArr.indexOf(longestArr[i]), 1);
//     } else {
//       union += 1;
//     }
//   }
//   return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
// };

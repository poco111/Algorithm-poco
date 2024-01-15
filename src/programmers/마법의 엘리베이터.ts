// https://school.programmers.co.kr/learn/courses/30/lessons/148653

const solution = (storey: number): number => {
  const storeyArr = [
    0, // storey의 첫 번째 자리 수가 5보다 큰 경우에 필요
    ...String(storey)
      .split('')
      .map((el) => Number(el)),
  ];
  for (let i = storeyArr.length - 1; i > 0; i--) {
    if (storeyArr[i] < 5) continue;
    if (storeyArr[i] === 5 && storeyArr[i - 1] < 5) continue;

    storeyArr[i - 1] += 1;
    storeyArr[i] = 10 - storeyArr[i];
  }

  return storeyArr.reduce((acc, cur) => acc + cur, 0);
};

console.log('정답', solution(85));

// 매개변수
// storey : 민수와 마법의 엘리베이터가 있는 층

// 출력
// 0층으로 가기 위해 필요한 마법의 돌의 최소값

// 문제 설명 및 해결
// -1, +1, -10, +10 등과 같이 절댓값이 10c (c ≥ 0 인 정수) 형태인 정수들이 적힌 버튼이 있는
// 마법의 엘리베이터가 있다. 버튼 한 번당 마법의 돌 한 개를 사용하게 된다고 했을 때, 현재 층(storey)에서
// 0층으로 이동하기 위해 사용해야할 최소의 마법의 돌 개수를 구하라.

// 숫자를 뒤부터 확인하면서 5보다 작다면 그대로, 5보다 크다면 자기 자리보다 한 자리 큰 수에 1을 더해준 후,
// 본인은 10의 보수(10에서 본인을 뺀 값)를 취한 값을 가져오면 된다.
// 숫자가 5일때는 본인 상위자리가 5보다 작다면 5를 올림할 필요가 없지만, 그외의 경우라면 올림을 한다.
// 왜 상위 자리가 5보다 작을 때는 올림을 하지 않아도 되는 이유는
// 상위 자리의 수가 5보다 작을 때는, 상위 자리의 수를 판단할 때 그 숫자를 그대로 가져가기 때문이다.
// 괜히 1을 더할 필요가 없다.

// 처음 풀이(실패)
// 앞에서 두 번째 자리가 5보다 큰지 작은지에 따라서 다르게 푸는 방식
// 예제 코드는 전부 통과 및 테스트 케이스 2번은 통과
// 테스트 케이스 나머지 전부 미통과
// const checkSecondDigitUnderFive = (number: number): boolean => {
//   const digits = String(number);

//   return Number(digits[1]) > 5;
// };

// const countButton = (number: number): number => {
//   let answer = 0;
//   const digits = String(number);

//   for (let i = 0; i < digits.length; i++) {
//     answer += Number(digits[i]);
//   }
//   return answer;
// };

// const solution = (storey: number): number => {
//   let answer = 0;
//   const stringStorey = String(storey);
//   const storeyLength = stringStorey.length;
//   const firstDigit = Number(stringStorey[0]);

//   if (storey < 10) {
//     storey > 5 ? (answer = 10 - storey + 1) : (answer = storey);
//   } else if (storey >= 10) {
//     // 두 번째 자리 수가 5보다 작거나 같을 때
//     if (!checkSecondDigitUnderFive(storey)) {
//       const goal = 0;
//       const difference = storey - goal;
//       answer = countButton(difference);
//     } // 두 번째 자리 수가 5보다 클 때
//     else if (checkSecondDigitUnderFive(storey)) {
//       const goal =
//         firstDigit === 9
//           ? 1 * Math.pow(10, storeyLength)
//           : (firstDigit + 1) * Math.pow(10, storeyLength - 1);

//       const difference = goal - storey;

//       answer =
//         countButton(difference) + (firstDigit === 9 ? 1 : firstDigit + 1);
//     }
//   }

//   return answer;
// };

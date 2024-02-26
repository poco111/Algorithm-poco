// https://school.programmers.co.kr/learn/courses/30/lessons/12936

function solution(n: number, k: number) {
  const answer = [];

  // 1부터 n까지의 배열을 만든다
  const people = Array.from({ length: n }, (_, i) => i + 1);

  // factorial을 이용하여 n명의 사람을 나열하는 경우의 수
  let caseNum = people.reduce((ac, v) => ac * v, 1);

  // while문의 조건은
  // answer의 길이가 n보다 작을 때까지 반복한다
  while (answer.length < n) {
    // caseNum을 people 배열의 길이로 나누어 준다
    // 그 이유는 현재 넣을 자리에 숫자가 입력되었을 때 다음번에 나올 수 있는 경우의 수를 구하기 위함이다
    caseNum = caseNum / people.length;

    // k - 1 / caseNum을 해주는 이유는
    // k는 1부터 시작하므로 배열의 index로 계산하기 위해 1을 뺀 값에
    // 해당 값의 내림값 index에 해당하는 people 배열의 요소가 현재 넣을 자리에 들어갈 숫자를 찾기 위해서이다
    answer.push(...people.splice(Math.floor((k - 1) / caseNum), 1));

    // k를 caseNum으로 나눈 나머지 값은
    // 현재 넣을 자리에 들어갈 숫자를 제외하고 남은 사람들을 줄 세우는 방법 중 몇번째인지에 대한 값이므로
    // k를 해당값으로 변경하여 준다
    k = k % caseNum;
  }

  return answer;
}

console.log(solution(3, 6)); // [3,1,2]

// 매개변수
// n : 사람의 수(1번부터 n번까지)
// k : k번째 순서를 나타내는 수

// 출력
// n명의 사람을 사전순으로 나열했을 때, k번째 방법을 나타내는 배열

// 문제 설명 및 해결
// n이 3이고 k가 5일 때,
// 1이 첫번째 자리에 존재할 때 경우의 수 2개,
// 2가 첫번째 자리에 존재할 때 경우의 수 2개,
// 3이 첫번째 자리에 존재할 때 경우의 수 2개 이므로 총 6개의 경우의 수가 존재(3! 값).
// 사전순으로 나열했을 때 5번째 방법을 구하기 위해서는, 1이 첫번째 자리에 존재하는 경우의 수와
// 2가 첫번째 자리에 존재하는 경우의 수 4개를 건너 뛰어 3이 첫번째 자리에 존재하는 경우의 수 2가지 중 첫번째 방법이 정답이 된다.

// 그러므로 while문을 반복하면서 k번째 순서의 각 자리의 숫자를 answer에 하나씩 추가한다
// 기존 caseNum을 people 배열의 길이로 나누어 현재 넣을 자리에 숫자가 입력되었을 때
// 다음번에 나올 수 있는 경우의 수를 caseNum에 저장한다
// k는 몇번째 방법인지를 나타내지만 1부터 시작하므로 배열에서 index로 계산하기 위해 1을 뺀 값에 caseNum을 나누고
// 해당 값의 내림값 index에 해당하는 people 배열의 요소가 현재 넣을 자리에 들어갈 숫자가 되므로,
// splice()를 사용하며 people에서는 제거하고 answer에 담는다.
// 그리고 k를 caseNum으로 나눈 나머지 값은 현재 넣을 자리에 들어갈 숫자를 제외하고 남은 사람들을 줄 세우는 방법 중
// 몇번째인지에 대한 값이므로 k를 해당값으로 변경한다.
// 이 과정을 반복하여 answer에 전체 사람의 수만큼 요소를 채워넣으면 원하는 순서를 얻을 수 있고, answer를 반환하면 된다.

// 첫 번째 시도
// 순열을 만드는 함수 permutation을 만들고, n명의 사람을 사전순으로 나열했을 때, k번째 방법을 나타내는 배열을 반환한다.
// 런타임 에러 발생한다.
// const permutation = (arr: number[], m: number): number[][] => {
//   const result: number[][] = [];

//   if (m === 1) return arr.map((e) => [e]);

//   arr.forEach((fixedNum, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const restArr = permutation(rest, m - 1);
//     const newRestArr = restArr.map((e) => [fixedNum, ...e]);
//     result.push(...newRestArr);
//   });
//   return result;
// };

// export const solution = (n: number, k: number): number[] => {
//   const peopleArr = Array.from({ length: n }, (_, i) => i + 1);

//   return permutation(peopleArr, peopleArr.length)[k - 1];
// };

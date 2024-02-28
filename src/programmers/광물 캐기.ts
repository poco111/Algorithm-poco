// https://school.programmers.co.kr/learn/courses/30/lessons/172927

export const solution = (picks: number[], minerals: string[]) => {
  let answer = 0;
  const sortArr = []; // 5개씩 자른 [dia, iron, stone]의 개수가 담기는 2차원 배열
  const fatigue = [
    [1, 1, 1],
    [5, 1, 1],
    [25, 5, 1],
  ];

  // 곡괭이 갯수에 따라 총 작업할 수 있는 횟수
  const maxCount = picks[0] + picks[1] + picks[2];

  // 하나의 곡괭이로 5번 작업을 할 수 있기 때문에, 광물을 5개씩 나눈 길이(총 작업할 수 있는 횟수)
  const mineralsCutLength = Math.ceil(minerals.length / 5);

  for (let i = 0; i < mineralsCutLength; i++) {
    // 곡괭이가 없으면 광물을 캘 수 없으므로 곡괭이 개수 보다 크면 반복문을 빠져나온다.
    if (i >= maxCount) break;

    const arr = [0, 0, 0]; // 작업할 수 있는 전체 다이아몬드, 철, 돌 개수

    // 광물을 5개씩 자르고, 자른 광물을 다이아몬드, 철, 돌의 개수를 카운트한다.
    minerals.splice(0, 5).forEach((mineral) => {
      switch (mineral) {
        case 'diamond':
          arr[0]++;
          break;
        case 'iron':
          arr[1]++;
          break;
        default:
          arr[2]++;
          break;
      }
    });

    // 배열에 추가한다.
    sortArr.push(arr);
  }

  // sortArr의 요소들을 다이아몬드 > 철 > 돌 우선순위로 내림차순 정렬한다.
  // 즉, 다이아몬드가 많은 5개 묶음을 우선적으로 캔다.
  sortArr.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return b[2] - a[2];
      } else {
        return b[1] - a[1];
      }
    } else {
      return b[0] - a[0];
    }
  });

  // 채광한 광물들의 피로도를 계산한다.
  sortArr.forEach((item) => {
    const [dia, iron, stone] = item; // 다이아몬드, 철, 돌의 각각 개수
    let idx = 0;

    // 피로도를 계산하기 위해 곡괭이가 있을 경우 다이아 > 철 > 돌 순의로 idx를 설정한다.
    if (picks[0] !== 0) idx = 0;
    else if (picks[1] !== 0) idx = 1;
    else if (picks[2] !== 0) idx = 2;

    if (picks[idx] !== 0) {
      // idx(0:다이아, 1:철, 2:돌) 곡괭이를 사용할 경우 다이아, 철, 돌의 피로도를 계산한다.
      answer += fatigue[idx][0] * dia;
      answer += fatigue[idx][1] * iron;
      answer += fatigue[idx][2] * stone;

      // 사용한 곡괭이를 감소시킨다.
      picks[idx]--;
    }
  });

  return answer;
};

console.log(
  solution(
    [0, 1, 1],
    [
      'diamond',
      'diamond',
      'diamond',
      'diamond',
      'diamond',
      'iron',
      'iron',
      'iron',
      'iron',
      'iron',
      'diamond',
    ]
  )
);

// console.log(
//   solution(
//     [1, 3, 2],
//     [
//       'diamond',
//       'diamond',
//       'diamond',
//       'iron',
//       'iron',
//       'diamond',
//       'iron',
//       'stone',
//     ]
//   )
// );

// 매개변수
// picks : 마인이 갖고 있는 곡괭이의 개수를 나타내는 정수 배열([dia, iron, stone] 구조로 이루어짐)
// minerals : 광물들의 순서를 나타내는 문자열 배열

// 출력
// 마인이 작업을 끝내기까지 필요한 최소한의 피로도

// 문제 설명 및 해결
// 다음과 같은 규칙으로 곡갱이로 광산에서 광석을 캘 때, 마인이 작업을 끝내기까지 필요한 최소한의 피로도를 구하는 문제이다.
// 다이아몬드 곡괭이로는 다이아몬드, 철, 돌을 캘 때 모두 피로도가 1이다.
// 철 곡괭이로는 다이아몬드는 5, 철과 돌을 캘 때 모두 피로도가 1이다.
// 돌 곡괭이로는 다이아몬드는 25, 철은 5, 돌은 1이다.
// 사용할 수 있는 곡괭이중 아무거나 하나를 선택해 광물을 캔다.
// 각 곡괭이는 종류에 상관없이 광물 5개를 캔 후에는 더 이상 사용할 수 없다.
// 한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용한다.
// 광물은 주어진 순서대로만 캘 수 있다.
// 광산에 있는 모든 광물을 캐거나, 더 사용할 곡괭이가 없을 때까지 광물을 캔다.
// 광물은 한번 작업에 5개씩 캘 수 있기 때문에, 광물을 5개씩 자른 길이를 구하고, 전체 곡괭이 갯수(작업 횟수)를 가지고
// 전체 작업에서 캘 수 있는 다이아몬드, 철, 돌의 조합을 구한다.
// 이후 다이아몬드 > 철 > 돌 순으로 우선순위를 정하고 우선순위가 높은 작업 순으로 내림차순 정렬을 한다.
// 이후 각 작업별로 피로도를 계산하고, 사용한 곡괭이를 감소시킨다.
// 이때, 피로도는 다이아몬드, 철, 돌의 각각 개수에 따라 피로도를 계산하면 된다.

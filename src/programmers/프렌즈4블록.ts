// https://school.programmers.co.kr/learn/courses/30/lessons/17679

export const solution = (m: number, n: number, board: string[]): number => {
  const boardArr: (string | number)[][] = board.map((v) => v.split(''));

  let answer = 0;
  let flag = true;

  while (flag) {
    const removed = [];

    // boardArr 순회하면서 2x2 블록이 같은 경우 removed 배열에 추가
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          boardArr[i][j] !== 0 &&
          boardArr[i][j] === boardArr[i + 1][j + 1] &&
          boardArr[i][j] === boardArr[i + 1][j] &&
          boardArr[i][j] === boardArr[i][j + 1]
        ) {
          removed.push([i, j]);
        }
      }
    }

    // removed 배열을 순회하면서 블록을 제거하고 answer 증가
    // 위의 이중 for문에서 바로 삭제하지 않는 이유는
    // 근접한 2x2 블록이 여러개일 경우 한번에 삭제하기 위함이다
    removed.forEach((cor) => {
      const [i, j] = cor;

      if (boardArr[i][j] !== 0) {
        boardArr[i][j] = 0;
        answer++;
      }
      if (boardArr[i + 1][j] !== 0) {
        boardArr[i + 1][j] = 0;
        answer++;
      }
      if (boardArr[i][j + 1] !== 0) {
        boardArr[i][j + 1] = 0;
        answer++;
      }
      if (boardArr[i + 1][j + 1] !== 0) {
        boardArr[i + 1][j + 1] = 0;
        answer++;
      }
    });

    // 세로로 두칸 이상 제거된 블록이 있을 수 있기 때문에, for문의 순서는 폭(n)부터 시작
    for (let k = 0; k < n; k++) {
      let count = 0;
      for (let l = m - 1; l >= 0; l--) {
        if (boardArr[l][k] === 0) {
          count++;
        } else if (count > 0) {
          // boardArr[l][k]가 0이 아니고 count가 0인 경우에는 아래에 있는 블록들 중 제거된 블록이 없다는 의미
          // boardArr[l][k]가 0이 아니고 count가 0보다 크다는 것은 제거된 블록이 있다는 의미이기 때문에
          // 한칸씩 아래로 내려줘야 한다.
          boardArr[l + count][k] = boardArr[l][k];
          // 현재 위치의 블록은 count만큼 아래로 이동했기 때문에, 0으로 변경
          boardArr[l][k] = 0;
        }
      }
    }

    flag = removed.length === 0 ? false : true;
  }

  return answer;
};

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 14
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
); // 15

// 매개변수
// m : 2 이상 30 이하인 자연수
// n : 2 이상 30 이하인 자연수
// board : 길이 n인 문자열 m개 배열 (2 <= m, n <= 30)

// 출력
// 지워지는 블록이 모두 몇개인지 반환하는 문제

// 문제 설명 및 해결
// 높이 m, 폭 n의 판과 배치 정보 board가 있을 때, 같은 블록이 2x2 형태로 4개가 붙어있을 경우 지워지는 블록이 있다.
// 같은 블록은 여러 2×2에 포함될 수 있으며, 지워지는 조건에 만족하는 2×2 모양이 여러 개 있다면 한꺼번에 지워진다.
// 블록이 지워진 후 위에 있는 블록이 아래로 떨어져 빈 공간을 채우게 된다.
// 만약 빈 공간을 채운 후에 다시 2×2 형태로 같은 모양의 블록이 모이면 다시 지워지고 떨어지고를 반복하게 된다.

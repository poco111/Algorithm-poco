// https://school.programmers.co.kr/learn/courses/30/lessons/12913

export const solution = (land: number[][]): number => {
  return Math.max(
    ...land.reduce(
      (acc: number[], cur: number[]): number[] => {
        return [
          cur[0] + Math.max(acc[1], acc[2], acc[3]),
          cur[1] + Math.max(acc[0], acc[2], acc[3]),
          cur[2] + Math.max(acc[0], acc[1], acc[3]),
          cur[3] + Math.max(acc[0], acc[1], acc[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
};

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16

// 매개변수
// land : 2차원 배열로 주어지는 땅의
// 행의 개수 N (1 ≤ N ≤ 100,000)

// 출력
// 땅의 정보를 따라 내려왔을 때, 얻을 수 있는 최대 점수

// 문제 설명 및 해결
// 땅따먹기 게임을 하려고 합니다.
// 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다.
// 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.
// 단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
// 즉, 1행에서 2행으로 내려올 때 1행의 3열을 밟았다면, 2행의 3열은 밟을 수 없습니다.
// 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 문제
// reduce 함수를 통해 각 행의 요소들에 이전 행의 요소들(해당 열의 인덱스 제외) 중 가장 큰 값을 누적해서 더했다
// 마지막 행까지 완료한 후에 마지막 행 중의 최대 값을 출력

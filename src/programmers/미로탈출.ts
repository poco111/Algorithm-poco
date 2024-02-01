// https://school.programmers.co.kr/learn/courses/30/lessons/159993

const bfs = (arr: string[][], startIndex: number[], target: string) => {
  let answer = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const xLength = arr.length;
  const yLength = arr[0].length;

  const queue = [];
  queue.push(startIndex);
  arr[startIndex[0]][startIndex[1]] = 'X';

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift() as number[];

      for (let j = 0; j < 4; j++) {
        const nextX: number = x + dx[j];
        const nextY: number = y + dy[j];

        if (
          nextX >= 0 &&
          nextX < xLength &&
          nextY >= 0 &&
          nextY < yLength &&
          arr[nextX][nextY] !== 'X'
        ) {
          if (arr[nextX][nextY] === target) {
            return ++answer;
          }
          queue.push([nextX, nextY]);
          arr[nextX][nextY] = 'X';
        }
      }
    }
    answer++;
  }
  return -1;
};

export const solution = (maps: string[]): number => {
  const startToLeverMap = maps.map((map) => map.split(''));
  const leverToExitMap = maps.map((map) => map.split(''));
  let startCoordinate: number[] = [];
  let leverCoordinate: number[] = [];

  startToLeverMap.forEach((map, i) => {
    if (map.includes('S')) {
      startCoordinate = [i, map.indexOf('S')];
    }
    if (map.includes('L')) {
      leverCoordinate = [i, map.indexOf('L')];
    }
  });

  const startToLever = bfs(startToLeverMap, startCoordinate, 'L');
  const leverToExit = bfs(leverToExitMap, leverCoordinate, 'E');

  if (startToLever === -1 || leverToExit === -1) return -1;

  return startToLever + leverToExit;
};

console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE'])); // 16
console.log(solution(['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO'])); // -1
console.log(solution(['OOOOOL', 'OXOXOO', 'OOSXOX', 'OXXXOX', 'EOOOOX'])); // 14
console.log(solution(['SXXOX', 'EXXXL', 'OOXOO', 'OXXXX', 'OOOOO'])); // -1

// 매개변수
// 미로를 나타내는 문자열 배열
// 각 문자는 다음을 의미합니다.
// S : 시작 지점
// E : 출구
// L : 레버
// O : 통로
// X : 벽

// 출력
// 미로를 탈출하는데 필요한 최소 시간

// 문제 설명 및 해결
// 미로를 탈출하는데 필요한 최소 시간을 구하는 문제이다.
// 미로 한 칸을 이동하는데 1초가 걸린며, 시작 지점과 출구, 레버는 항상 다른 곳에 존재하며 한 개씩만 존재한다.
// 출구는 레버를 당겨야만 열린다.
// 출구는 레버가 당겨지지 않아도 지나갈 수 있으며, 모든 통로, 출구, 레버, 시작점은 여러 번 지나갈 수 있다.
// bfs를 활용하여 문제를 해결했다.
// 시작 지점 S와 레버 L을 찾고, 각각의 지점에서 bfs를 실행하여 출구 E를 찾는다.
// 중요한 것은 처음 L을 찾을 때 사용했던 맵을 그대로 사용하면 안된다는 것이다.
// 예를들어 "EOOSL"과 같은 경우, S에서 L을 찾고, L에서 E를 찾는 방식으로 구현했는데,
// L에서 E를 찾는 과정에서 S에서 L을 찾을 때 사용한 Map을 사용하면, S에서 L을 찾을 때 사용한 Map에서는
// O와 S가 X로 바뀌어 있기 때문에 L에서 E를 찾을 수 없다.

// 첫 번째 시도
// bfs를 활용하여 처음 시작지점 S를 찾고, 그 다음 L을 찾고, 그 다음 E를 찾는 방식으로 구현했다.
// L과, E를 찾을 때, 동일한 Map을 사용해서 문제가 발생했다고 생각한다.
// 예를들어 "EOOSL"과 같은 경우, S에서 L을 찾고, L에서 E를 찾는 방식으로 구현했는데,
// L에서 E를 찾는 과정에서 S에서 L을 찾을 때 사용한 Map을 사용하면, S에서 L을 찾을 때 사용한 Map에서는
// O와 S가 X로 바뀌어 있기 때문에 L에서 E를 찾을 수 없다.

// 예시코드 2개는 통과 / 테스틐 케이스 2, 3 ,5, 6, 7, 8, 11, 12, 13, 14, 16, 17, 19, 21, 23 실패
// export const solution = (maps: string[]): number => {
//   let answer = 0;
//   const splitMap = maps.map((map) => map.split(''));
//   let startCoordinate: number[] = [];
//   let goal = 'L';

//   splitMap.forEach((map, i) => {
//     if (map.includes('S')) {
//       startCoordinate = [i, map.indexOf('S')];
//     }
//   });

//   let queue = [];

//   const dx = [-1, 1, 0, 0];
//   const dy = [0, 0, -1, 1];
//   const yLength = maps.length;
//   const xLength = maps[0].length;

//   queue.push(startCoordinate);
//   splitMap[startCoordinate[0]][startCoordinate[1]] = 'X';

//   while (queue.length > 0) {
//     const size = queue.length;

//     for (let i = 0; i < size; i++) {
//       let coordinate = queue.shift();

//       for (let j = 0; j < 4; j++) {
//         const [x, y] = coordinate as number[];
//         const nextX: number = x + dx[j];
//         const nextY: number = y + dy[j];

//         if (
//           nextX >= 0 &&
//           nextX < xLength &&
//           nextY >= 0 &&
//           nextY < yLength &&
//           splitMap[nextX][nextY] === 'O'
//         ) {
//           answer++;
//           queue.push([nextX, nextY]);
//           splitMap[nextX][nextY] = 'X';
//         } else if (
//           nextX >= 0 &&
//           nextX < xLength &&
//           nextY >= 0 &&
//           nextY < yLength &&
//           splitMap[nextX][nextY] === goal
//         ) {
//           if (goal === 'E') return ++answer;
//           answer++;
//           queue = [[nextX, nextY]];
//           splitMap[nextX][nextY] = 'X';
//           goal = 'E';
//         }
//       }
//     }
//   }

//   return -1;
// };

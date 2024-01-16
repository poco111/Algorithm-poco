// https://school.programmers.co.kr/learn/courses/30/lessons/132265

export const solution = (topping: number[]): number => {
  let answer = 0;
  const firstPiece = topping.reduce(
    (acc: { [key: number]: number }, cur: number) => {
      acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
      return acc;
    },
    {}
  );

  const secondPiece: { [key: number]: number } = {};

  let firstPieceToppingCount = new Set(topping).size;
  let secondPieceToppingCount = Object.keys(secondPiece).length;

  for (let i = topping.length - 1; i >= 0; i--) {
    const toppingNum = topping[i];

    firstPiece[toppingNum] -= 1;
    firstPiece[toppingNum] === 0
      ? (delete firstPiece[toppingNum], (firstPieceToppingCount -= 1))
      : null;

    secondPiece[toppingNum]
      ? (secondPiece[toppingNum] += 1)
      : ((secondPiece[toppingNum] = 1), (secondPieceToppingCount += 1));

    if (firstPieceToppingCount === secondPieceToppingCount) answer += 1;
  }
  return answer;
};

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
// console.log(solution([1, 2, 3, 1, 4])); // 0
// console.log(solution([2, 3, 4, 1]));

// 매개변수
// topping : 롤케이크에 올라간 토핑의 번호가 담긴 배열

// 출력
// 롤케이크를 공평하게 자를 수 있는 경우의 수 반환

// 문제 설명 및 해결
// 여러가지 토핑이 일렬로 올라가있는 롤케이크를 두 조각으로 자르려고 한다.
// 두 조각의 토핑의 종류의 갯수가 같아야 한다.
// 만약 [1,2,1,3,1,4,1,2]가 주어졌을 때, 3번째 토핑과 4번째 토핑 사이를 자르면 [1,2,1], [3,1,4,1,2]로 나뉘게 된다.
// 첫 번째 조각은 1,2 총 두 가지 종류가, 두 번째 조각은 1,2,3,4가 있으므로 총 네 가지 종류가 있기 때문에 공평하게 나뉘었다고 볼 수 없다.
// 만약 [1,2,1,3,1,4,1,2]가 주어졌을 때, 4번째 토핑과 5번째 토핑 사이를 자르면
// [1,2,1,3], [1,4,1,2]로 나뉘게 된다.
// 첫 번째 조각에는 1,2,3이 있고 두 번째 조각에는 1,2,4가 있으므로 공평하게 나뉘었다고 볼 수 있다.
// 이 때, 공평하게 나뉘는 경우의 수를 구하라.
// 첫 번째 풀이에서 forEach문의 index 마다 slice를 사용해서 시간 초과가 발생했다.
// 따라서, slice로 새로운 배열을 생성하지 않고 문제를 해결하기 위해
// 처음에 모든 토핑을 가진 조각과 그렇지 않은 조각을 나누어서, 각 조각의 토핑의 종류의 갯수와 총 토핑 종류의 갯수를 구했다.
// for문을 순회하면서 모든 토핑을 가진 조각에서 토핑을 하나씩 빼서 다른 조각으로 토핑을 옮긴다.
// 이때 조건문에 따라, 전체 토핑의 종류의 갯수를 수정했고, 두 조각의 토핑 종류의 갯수가 같아지면 answer를 1씩 증가시켰다.

// 첫 번째 풀이 (시간 초과로 실패!) -> 매개변수 topping의 크기가 최대 100만 개...
// 매개변수 topping 배열을 순회하면서, 매 인덱스를 기준으로 첫 번째와 두 번째 조각을 나눈다.
// 각 조각을 Set 객체로 만들어서 토핑의 종류의 갯수를 구한다.
// const countTopping = (piece: number[]): number => {
//   const toppingSet = new Set(piece);
//   return toppingSet.size;
// };

// export const solution = (topping: number[]): number => {
//   let answer = 0;

//   topping.forEach((_, index) => {
//     const firstPiece = topping.slice(0, index);
//     const secondPiece = topping.slice(index);

//     if (countTopping(firstPiece) === countTopping(secondPiece)) {
//       answer += 1;
//     }
//   });
//   return answer;
// };

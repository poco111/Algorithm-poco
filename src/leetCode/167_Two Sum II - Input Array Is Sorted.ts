// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

function twoSum(numbers: number[], target: number): number[] {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];

    if (sum === target) return [start + 1, end + 1];
    if (sum < target) start++;
    if (sum > target) end--;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 12, 14, 22], 23)); // [1, 2]

// 매개변수
// numbers : 내림차순이 아닌 순서로 정렬된 숫자 배열
// target : 두 숫자의 합

// 출력
// numbers 배열에서 두 개의 요소의 합이 target이 될 때, 해당 요소의 각 인덱스 + 1을 담은 1차원 배열

// 문제 설명 및 해결
// numbers 배열에서 두 개의 요소의 합이 target이 될 때, 해당 요소의 각 인덱스 + 1을 담은 1차원 배열을 반환하는 문제이다.
// 투 포인터를 사용해서 해결했다.
// start와 end를 각각 0과 numbers.length - 1로 초기화하고, while문을 통해 start가 end보다 작을 때까지 반복한다.
// numbers[start]와 numbers[end]의 합이 target과 같다면 [start + 1, end + 1]을 반환한다.
// numbers[start]와 numbers[end]의 합이 target보다 작다면 start를 1 증가시킨다.
// numbers[start]와 numbers[end]의 합이 target보다 크다면 end를 1 감소시킨다.

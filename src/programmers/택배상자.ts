// https://school.programmers.co.kr/learn/courses/30/lessons/131704

export const solution = (order: number[]): number => {
  let answer = 0;
  const stack: number[] = [];
  let index = 0;

  // i는 1부터 n까지 순서대로 박스
  for (let i = 1; i <= order.length; i++) {
    // 현재 박스(i번)이 order[index]와 같지 않다면 stack에 박스를 넣고,
    // order[index]와 같으면 answer와 index를 각각 1씩 증가시킨다.
    order[index] !== i ? stack.push(i) : (answer++, index++);

    // stack에 박스가 있고, 스택의 맨 뒤의 박스 번호가 order[index]와 같을때까지 반복
    while (stack.length && stack[stack.length - 1] === order[index]) {
      stack.pop();
      answer++;
      index++;
    }
  }
  return answer;
};

console.log(solution([4, 3, 1, 2, 5])); // 2
console.log(solution([1, 2, 3, 4, 5])); // 5
console.log(solution([2, 3, 1, 4, 5])); // 5

// 매개변수
// order : 트럭에 실어야 하는 택배 상자 순서

// 출력
// 트럭에 실어야 하는 택배 상자 순서대로 트럭에 실을 때, 실을 수 있는 택배 상자 개수

// 문제 설명 및 해결
// 매개변수로 트럭에 실어야 하는 택배 상자 순서가 주어지고, 택배 상자는 1부터 순서대로 번호가 붙어있고, 순서대로 꺼낼 수 있다.
// 택배 상자를 임시 보관할 수 있는 트레일러가 있고 트럭에 실어야 하는 택배 상자 순서대로 트럭에 실을 때, 실을 수 있는 택배 상자 개수를 구하는 문제이다.
// 풀이는 먼저 for문을 통해서 전체 박스(1부터 n까지)를 순회한다.
// 현재 박스(i번)가 order[index]와 같지 않다면 stack에 박스를 넣고, order[index]와 같으면 answer와 index를 각각 1씩 증가시킨다.
// 위 조건문을 판단하고, stack에 박스가 있고, 스택의 맨 뒤의 박스 번호가 order[index]와 같을때까지 while문으로
// stack에서 박스를 꺼내고, answer와 index를 각각 1씩 증가시킨다.

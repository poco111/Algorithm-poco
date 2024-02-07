// https://school.programmers.co.kr/learn/courses/30/lessons/131127

const isEqual = (wantObj: { [key: string]: number }, discount: string[]) => {
  const discountObj: { [key: string]: number } = {};

  discount.forEach((el) => {
    discountObj[el] = discountObj[el] ? (discountObj[el] += 1) : 1;
  });

  console.log('wantObj', wantObj);
  console.log('discountObj', discountObj);

  for (const key in wantObj) {
    if (wantObj[key] !== discountObj[key]) return false;
  }
  return true;
};

export const solution = (
  want: string[],
  number: number[],
  discount: string[]
) => {
  let answer = 0;

  const wantObj: { [key: string]: number } = {};
  want.forEach((el, i) => {
    wantObj[el] = number[i];
  });

  for (let i = 0; i < discount.length; i++) {
    if (i + 9 > discount.length) break;
    if (isEqual(wantObj, discount.slice(i, i + 10))) {
      answer += 1;
    }
  }
  return answer;
};

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);

// 매개변수
// want : 구매하고 싶은 제품들의 이름이 담긴 배열
// number : 각 제품의 수량이 담긴 배열
// discount : 할인하는 제품들의 이름이 담긴 배열

// 출력
// 10일 동안 회원권을 유지할 수 있고 할인 상품을 구매할 수 있다고 할때,
// 회원등록시 원하는 제품을 모두 할인 받을 수 있는 회원 등록 날짜의 총 일수를 반환

// 문제 설명 및 해결
// 10일 동안 회원권을 유지할 수 있고 할인 상품을 구매할 수 있다고 할때,
// 회원등록시 원하는 제품을 모두 할인 받을 수 있는 회원 등록 날짜의 총 일수를 반환하는 문제
// want, number 배열로 원하는 상품 이름과 수량이 담긴 객체를 만든다.
// for문을 순회하면서, 만약 i + 9(총 10개 항목)이 discount.length보다 크다면 break한다.
// isEqual 함수를 통해 wantObj와 discount.slice(i, i + 10)이 같은지 확인하고,
// 같다면 answer에 1을 더해준다.

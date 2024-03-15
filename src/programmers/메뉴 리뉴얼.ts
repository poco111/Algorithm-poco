// https://school.programmers.co.kr/learn/courses/30/lessons/72411

// 한 명의 손님이 주문한 단품메뉴들 중 course의 요소인 갯수만큼 조합을 구하는 함수
const getCombinations = (arr: string[], selectedNum: number): string[][] => {
  const result: string[][] = [];
  if (selectedNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixedStr, index, origin) => {
    const restArr = [...origin.slice(index + 1)];
    const combinations = getCombinations(restArr, selectedNum - 1);
    const attached = combinations.map((combination) => [
      fixedStr,
      ...combination,
    ]);
    result.push(...attached);
  });
  return result;
};

export const solution = (orders: string[], course: number[]): string[] => {
  const answer: string[] = [];
  const combinationMap = new Map();

  // course 배열을 순회하면서 코스 요리 갯수만큼의 조합을 구하고
  // 해당 조합의 갯수를 Map 객체에 저장
  course.forEach((num) => {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].length < num) continue;
      const combinations = getCombinations([...orders[i]], num);
      console.log(num, combinations);
      combinations.forEach((combination) => {
        // 메뉴는 알파벳순으로 동일하게 판단되기 때문에 sort 메서드를 실행한 후 join 실행
        const str = combination.sort().join('');
        combinationMap.has(str)
          ? combinationMap.set(str, combinationMap.get(str) + 1)
          : combinationMap.set(str, 1);
      });
    }
  });

  // course 배열을 순회하면서
  // 각 코스요리 갯수 중 가장 많은 선택을 받은 메뉴들을 answer 배열에 저장
  course.forEach((num) => {
    let tempArr = [];
    let max = 0;
    for (const [str, count] of combinationMap) {
      if (str.length === num && count > max && count >= 2) {
        max = count;
        tempArr = [str];
      } else if (str.length === num && count === max && count >= 2) {
        tempArr.push(str);
      }
    }
    answer.push(...tempArr);
  });

  return answer.sort();
};

// 매개변수
// orders : 손님들의 주문이 담긴 배열
// course : 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수

// 출력
// 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 반환하는 문제

// 문제 설명 및 해결
// 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성하고 최소 2명 이상의 손님으로부터
// 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함한다.
// course 배열에 들어있는 코스요리를 구성하는 단품메뉴들의 갯수 중 가장 많이 주문된 메뉴를 반환한다.
//

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
); // ['AC', 'ACDE', 'BCFG', 'CDE']

console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])
); //	["ACD", "AD", "ADE", "CD", "XYZ"]

console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4])); // ["WX", "XY"]

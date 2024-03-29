// https://school.programmers.co.kr/learn/courses/30/lessons/17680

// 7, 11, 16, 17, 19, 20

export const solution = (cacheSize: number, cities: string[]) => {
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  let runtime = 0;
  let cacheArr: string[] = [];

  for (let i = 0; i < cities.length; i++) {
    const newCity = cities[i].toLowerCase();
    const cityIdx = cacheArr.indexOf(newCity);

    if (cityIdx === -1) {
      runtime += 5;
      if (cacheArr.length < cacheSize) {
        cacheArr.push(newCity);
      } else {
        cacheArr = [...cacheArr.slice(1, cacheArr.length), newCity];
      }
    } else {
      cacheArr = [
        ...cacheArr.slice(0, cityIdx),
        ...cacheArr.slice(cityIdx + 1, cacheArr.length),
        newCity,
      ];
      runtime += 1;
    }
  }

  return runtime;
};

// 매개변수
// cacheSize : 캐시 크기(0<= cacheSize <= 30)
// cities : 도시 이름 배열(최대 길이 100,000)

// 출력
// 입력된 도시이름 배열을 순서대로 처리할 때, "총 실행 시간"을 반환하는 문제

// 문제 설명 및 해결
// LRU(Least Recently Used) 알고리즘
// 캐시에서 가장 사용한지 오래된 캐시를 지우는 알고리즘
// 즉, 캐시크기가 꽉 찼고 새로운 값을 캐시에 넣을 때, 캐시 내에서 사용한지 가장 오래된 값을 지우고 새로운 값을 캐시에 넣는다.
// cache hit는 새로운 값이 이미 현재 캐시에 있는 경우
// cache miss는 새로운 값이 현재 캐시에 없는 경우
// cacheSize가 0인 경우에는 cities 배열 길이의 * 5를 한 값을 조기 반환
// runtime과 cacheArr를 초기화하고, for문을 통해 cities 배열을 순회한다.
// 먼저 i번째의 도시가 cacheArr에 없고 cacheArr의 길이가 cacheSize보다 작은 경우에는 i번째 도시를 cacheArr에 push, runtime에 +5
// i번째의 도시가 cacheArr에 없고 cacheArr의 길이가 cacheSize보다 같거나 큰 경우에는 0번째 idx를 제외한 cacheArr에 i번째 도시를 추가, runtime에 +5
// i번째 도시가 cacheArr에 있는 경우에는 해당 도시를 cacheArr의 맨 뒤로 보내고 runtime +1

// 첫 번째 시도
// 11, 16, 19, 20번 케이스 실패
// cacheSize가 3이고 cities가 ['seoul', 'seoul', 'seoul', 'tokyo', 'seoul', 'tokyo']와 경우에 실패
// export const solution = (cacheSize: number, cities: string[]) => {
//   if (cacheSize === 0) {
//     return cities.length * 5;
//   }
//   let runtime = 5 * cacheSize;
//   let cacheArr: string[] = Array.from({ length: cacheSize }, (_, i) =>
//     cities[i].toLowerCase()
//   );

//   for (let i = cacheSize; i < cities.length; i++) {
//     const newCity = cities[i].toLowerCase();
//     const cityIdx = cacheArr.indexOf(newCity);
//     if (cityIdx !== -1) {
//       cacheArr = [
//         ...cacheArr.slice(0, cityIdx),
//         ...cacheArr.slice(cityIdx + 1, cities.length),
//         newCity,
//       ];
//       runtime += 1;
//     } else {
//       cacheArr = [...cacheArr.slice(1, cities.length), newCity];
//       runtime += 5;
//     }
//   }

//   return runtime;
// };

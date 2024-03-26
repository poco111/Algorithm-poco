// https://school.programmers.co.kr/learn/courses/30/lessons/17686

export const solution = (files: string[]) => {
  return files.sort((a: string, b: string) => {
    const aHead: string = (a.match(/^\D+/) || [''])[0].toLowerCase();
    const bHead: string = (b.match(/^\D+/) || [''])[0].toLowerCase();

    // HEAD에서 정렬이 가능한 경우
    if (aHead < bHead) return -1;
    if (aHead > bHead) return 1;

    // 연속된 숫자로 시작하는 부분을 찾고, 0으로 시작하는 경우 0을 제거
    const aNum: string = (a.match(/\d+/) || [''])[0].replace(/^0+/, '');
    const bNum: string = (b.match(/\d+/) || [''])[0].replace(/^0+/, '');

    // 숫자로 변환된 aNum과 bNum을 뺀 결과를 반환하여 정렬
    // 반환값이 음수이면 a를 b보다 앞에 위치시키고, 양수이면 b를 a보다 앞에 위치
    // 숫자로 변환된 aNum이 더 작으면(작은 값이 더 앞에 위치해야 하므로) 음수가 반환되고,
    // 더 크면 양수가 반환
    return Number(aNum) - Number(bNum);
  });
};

console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ])
); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ])
); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

// 매개변수
// files : 문자열로 이루어진 배열
// 배열의 요소는 파일명을 포함하는 문자열로, 100 글자 이하 길이로 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기부호("-")만으로 이루어져 있다.

// 출력
// 정렬 기준에 따라 파일명을 정렬하여 반환하는 문제

// 문제 설명 및 해결
// 파일명을 기준에 따라 정렬하는 문제
// 먼저 파일명은 세 부분으로 구성되어 있다.
// HEAD : 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상
// NUMBER : 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있고, 앞에 0이 올 수도 있다.
// TAIL : 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있고, 아무 글자가 없을 수도 있다.
// 정렬 방법은 다음과 같다.
// 우선 HEAD 부분을 기준으로 대소문자 구분없이 사전 순으로 정렬한다.
// 만약 HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다. 이때 숫자 앞의 0은 무시되며, 012와 12는 정렬시에 같은 값으로 처리된다.
// 만약 두 파일의 HEAD와 NUMBER 부분의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지한다.

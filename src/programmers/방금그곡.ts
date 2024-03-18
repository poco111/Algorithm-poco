// https://school.programmers.co.kr/learn/courses/30/lessons/17683

// 노래의 음 중에 #이 붙은 경우 소문자로 변경하는 함수
// "ABC#D" -> "ABcD"
const filterMusicInfo = (musicInfo: string) => {
  let userMusicInfo = '';

  for (let i = 0; i < musicInfo.length; i++) {
    if (musicInfo[i + 1] === '#') {
      userMusicInfo += musicInfo[i].toLowerCase();
    } else if (musicInfo[i] === '#') {
      continue;
    } else {
      userMusicInfo += musicInfo[i];
    }
  }

  return userMusicInfo;
};

// 노래가 재생된 총 시간을 구하는 함수
const calculateTime = (start: string, end: string): number => {
  const [startHour, startMin] = start.split(':');
  const [endHour, endMin] = end.split(':');

  const startTime = Number(startHour) * 60 + Number(startMin);
  const endTime = Number(endHour) * 60 + Number(endMin);

  return endTime - startTime;
};

// 재생시간에 따라 반복되는 음을 구하는 함순
const getPlayedMusicInfo = (musicInfo: string, time: number) => {
  const length = musicInfo.length;
  const repeatCount = Math.floor(time / length);
  const remainder = time % length;

  let playedMusicInfo = '';

  for (let i = 0; i < repeatCount; i++) {
    playedMusicInfo += musicInfo;
  }

  playedMusicInfo += musicInfo.slice(0, remainder);

  return playedMusicInfo;
};

interface MusicInfo {
  [key: string]: {
    time: number;
    info: string;
    index: number;
  };
}

export const solution = (m: string, musicinfos: string[]): string => {
  let answer = '';
  let maxTime = 0;
  // musicinfos의 최대 길이가 100이기 때문에 101로 할당
  let index = 101;

  let userMusicInfo = filterMusicInfo(m);

  const musicInfoObj: MusicInfo = {};

  // musicinfos를 순회하면서, musicInfoObj를 만든다
  for (let j = 0; j < musicinfos.length; j++) {
    const [start, end, name, info] = musicinfos[j].split(',');
    const playedTime = calculateTime(start, end);

    const playedInfo = getPlayedMusicInfo(filterMusicInfo(info), playedTime);

    musicInfoObj[name] = { time: playedTime, info: playedInfo, index: j };
  }

  // musicInfoObj를 순회하면서 음악 재생 시간만큼의 음 중에서 user가 기억하는 음이 포함되는 경우
  // 만약 해당 노래의 재생시간이 maxTime보다 크면 answer에 할당, maxTime, index 수정
  // 만약 해당 노래의 재생시간이 현재 maxTime과 같으면, index를 비교
  for (const [name, musicInfo] of Object.entries(musicInfoObj)) {
    if (musicInfo.info.includes(userMusicInfo)) {
      if (musicInfo.time > maxTime) {
        answer = name;
        maxTime = musicInfo.time;
        index = musicInfo.index;
      } else if (musicInfo.time === maxTime) {
        if (musicInfo.index < index) {
          answer = name;
          index = musicInfo.index;
        }
      }
    }
  }

  return answer.length === 0 ? 'None' : answer;
};

console.log(
  solution('ABCDEFG', ['11:50,12:04,HELLO,CDEFGAB', '12:57,13:11,BYE,CDEFGAB'])
);

// console.log(
//   solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
// ); // "HELLO"

// console.log(
//   solution('CC#BCC#BCC#BCC#B', [
//     '03:00,03:30,FOO,CC#B',
//     '04:00,04:08,BAR,CC#BCC#BCC#B',
//   ])
// ); // 'FOO'

// console.log(
//   solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
// ); // "WORLD"

// 매개변수
// m : 기억하고 있는 멜로디를 담은 문자열(1 <= m <= 1439)
// musicinfos : 방송된 곡의 정보를 담고 있는 배열( musicinfos <= 100이며 요소는 음악 시작 시간, 끝난시간, 음악 제목, 악보 정보가 ","로 구분된 문자열)

// 출력
// 조건과 일치하는 음악 제목을 반환

// 문제 설명 및 해결
// 음악이 주어진 시간만큼 재생되었을 때, user가 기억하는 음과 일치하는 경우 음악 제목을 반환하는 문제
// 음악 길이보다 재생된 시간이 긴 경우에는 음악은 처음부터 반복 재생된다
// 음악 길이보다 재생된 시간이 짧은 경우에는 처음부터 재생 시간만큼 재생된다
// 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 긴 음악 제목을 반환
// 재생된 시간까지 같은 경우에는 먼저 입력된 음악 제목을 반환
// 조건에 일치하는 음악이 없으면 "(None)"을 반환

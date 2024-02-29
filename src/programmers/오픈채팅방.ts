// https://school.programmers.co.kr/learn/courses/30/lessons/87390

export const solution = (record: string[]): string[] => {
  const answer: string[][] = [];
  const nickNameMap = new Map();

  record.forEach((e) => {
    const [command, uid, nickName] = e.split(' ');

    if (command === 'Change') {
      nickNameMap.set(uid, nickName);
    } else if (command === 'Enter') {
      answer.push([uid, '님이 들어왔습니다.']);
      nickNameMap.set(uid, nickName);
    } else if (command === 'Leave') {
      answer.push([uid, '님이 나갔습니다.']);
    }
  });

  return answer.map((message) => nickNameMap.get(message[0]) + message[1]);
};

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// 매개변수
// record : 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열

// 출력
// 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 반환

// 문제 설명 및 해결
// 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열이 주어진다.
// 이때, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 반환하는 문제이다.
// 채팅방에 들어오면 "닉네임님이 들어왔습니다."라는 메시지가 출력되고, 나가면 "닉네임님이 나갔습니다."라는 메시지가 출력된다.
// 닉네임을 변경하면 기존 닉네임으로 작성된 메시지들이 변경된 닉네임으로 수정된다.
// 채팅방은 중복으로 닉네임을 허용한다.
// 닉네임 변경은 채팅방에서 하거나, 채팅방에서 나간 후 새로운 닉네임으로 다시 들어간다.
// 첫 번째 시도와 달리 record를 한번만 순회하였고, 추가로 순회하는 것은 Change 기록을 제외한 answer 배열을 순회하였다.
// 먼저 record 배열을 순회하면서, answer 배열에 uid와 메시지 배열을 저장하였고, uid에 따른 nickName을 Map 객체로 관리하였다.
// 마지막으로 answer 배열을 순회하면서, uid에 해당하는 nickName과 메시지를 반환하였다

// 첫 번째 시도
// 테스트 25부터 시간초과 발생
// record 배열을 순회하면서, 각 uid에 따른 nickName을 저장하고
// 다시 record 배열을 순회하면서 Enter, Leave에 따른 메시지 작성하여 결과를 반환

// export const solution = (record: string[]): string[] => {
//   const userObj: { [key: string]: string } = {};
//   const commandObj: { [key: string]: string } = {
//     Enter: '들어왔습니다.',
//     Leave: '나갔습니다.',
//   };

//   record.forEach((e) => {
//     const [command, uid, nickname] = e.split(' ');

//     if (command !== 'Leave') {
//       userObj[uid] = nickname;
//     }
//   });

//   return record.reduce((acc, cur) => {
//     const [command, uid, nickName] = cur.split(' ');
//     if (command !== 'Change') {
//       const message = `${userObj[uid]}님이 ${commandObj[command]}`;
//       return [...acc, message];
//     } else {
//       return acc;
//     }
//   }, [] as string[]);
// };

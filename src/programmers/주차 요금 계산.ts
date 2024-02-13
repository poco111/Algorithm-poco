// https://school.programmers.co.kr/learn/courses/30/lessons/92341

const calculateFee = (fees: number[], time: number): number => {
  let totalFee = 0;
  let totalTime = time;
  const [minTime, minFee, unitTime, unitFee] = fees;

  if (time <= minTime) return minFee;

  totalTime -= minTime;
  totalFee += minFee;
  totalFee += Math.ceil(totalTime / unitTime) * unitFee;

  return totalFee;
};

const calculateTime = (time: string): number => {
  const [hour, min] = time.split(':');
  return Number(hour) * 60 + Number(min);
};

export const solution = (fees: number[], records: string[]): number[] => {
  const carInfoObj: {
    [key: string]: { status: string; inTime: string; accTime: number };
  } = {};

  records.forEach((car) => {
    const [time, carNumber, status] = car.split(' ');
    if (status === 'IN') {
      carInfoObj[carNumber]
        ? (carInfoObj[carNumber] = {
            status: status,
            inTime: time,
            accTime: carInfoObj[carNumber].accTime,
          })
        : (carInfoObj[carNumber] = {
            status: status,
            inTime: time,
            accTime: 0,
          });
    } else if (status === 'OUT') {
      const calculatedTime =
        calculateTime(time) - calculateTime(carInfoObj[carNumber].inTime);

      carInfoObj[carNumber].status = status;
      carInfoObj[carNumber].accTime += calculatedTime;
    }
  });

  for (const key in carInfoObj) {
    if (carInfoObj[key].status === 'IN') {
      const calculatedTime = 1439 - calculateTime(carInfoObj[key].inTime);
      carInfoObj[key].accTime += calculatedTime;
    }
  }

  const keys = Object.keys(carInfoObj);

  keys.sort((a, b) => parseInt(a) - parseInt(b));

  return keys.map((key) => calculateFee(fees, carInfoObj[key].accTime));
};

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
);

// 매개변수
// fees : 기본 시간과 기본 요금, 단위 시간과 단위 요금이 담긴 배열
// records : 자동차의 입차, 출차 내역이 담긴 배열

// 출력
// 각 자동차에 대한 주차 요금을 계산한 배열(차량 번호가 작은 자동차부터 순서대로 담긴 배열)

// 문제 설명 및 해결
// 자동차의 입차, 출차 내역이 담긴 records 배열을 순회하면서, carInfoObj 객체에
// 각 자동차의 입차, 출차 내역을 담는다.
// carInfoObj 객체를 순회하면서, 입차만 있고 출차가 없는 경우에는 23:59까지의 시간을 더해준다.
// carInfoObj 객체의 key값을 정렬한 배열을 순회하면서, calculateFee 함수를 통해 주차 요금을 계산한다.
// 계산된 요금을 배열에 담아 반환한다.

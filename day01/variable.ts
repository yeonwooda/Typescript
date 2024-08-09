// 1. 타입 어노테이션
const coffee1: string = "1";

// 2. 타입 추론
const coffee = "아메리카노";

// const coffeeList = ["아메리카노", "라떼", "초코"];
const coffeeList: string[] = ["아메리카노", "라떼", "초코"];

const test = (arr: string[]) => {
  arr.forEach((v) => {
    v.toUpperCase();
  });
};

// number 배열 변수 만들기
const numList: number[] = Array(10).fill(10);

// const test1 = (arr: number[]) => {
//   arr.forEach((v) => v.toString());
// };

// boolean 배열 변수 만들기 그리고 js화 시키기
const boolList: boolean[] = [true, !!"123"];

// const test2 = (arr: boolean[]) => {
//   arr.forEach((v) => {
//     v.valueOf();
//   });
// };

const test2: object = { name: "shinji", positon: "middle", num: 7 };
const test3: { name: string; positon: string; num: number } = {
  name: "신지",
  positon: "middle",
  num: 7,
};

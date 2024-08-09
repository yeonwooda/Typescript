// 1. 타입 어노테이션
var coffee1 = "1";
// 2. 타입 추론
var coffee = "아메리카노";
// const coffeeList = ["아메리카노", "라떼", "초코"];
var coffeeList = ["아메리카노", "라떼", "초코"];
var test = function (arr) {
    arr.forEach(function (v) {
        v.toUpperCase();
    });
};
// number 배열 변수 만들기
var test1 = function (arr) {
    arr.forEach(function (v) { return v.toString(); });
};
// boolean 배열 변수 만들기 그리고 js화 시키기
var test2 = function (arr) {
    arr.forEach(function (v) {
        v.valueOf();
    });
};

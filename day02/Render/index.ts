// 네모 박스 만들기
// BoxStyle 이라는 타입을 만들기
// backgroundColor, padding, borderRadius, border , width, height
// widht, height small -> 50px 50px
// medium -> 100 100
// large -> 150, 150
// backgroundColor는 5개

// applyStyle 이라는 함수 만들기
// 매개변수는 element, style 넣으면  element에 style이 적용되는
// 로직을 만들기

// ts를 js로 바꾸고 html에 js 넣어서 실행하는 퀴즈

// type BoxStyle = {
//   width: "50px" | "100px" | "150px";
//   height: "50px" | "100px" | "150px";
//   backgroundColor: "#1abc9c" | "#2ecc71" | "#3498db" | "#9b59b6" | "#34495e";
//   padding: "20px";
//   borderRadius: "5px";
// };

type BoxSize = "small" | "medium" | "large";
type BoxBG = "blue" | "red" | "green" | "yellow" | "oranger";
type BoxBR = "0px" | "4px" | "10px" | "9999px";
type BoxBorder = "1px solid black" | "1px solid grey";
type BoxStyle = {
  size: BoxSize;
  backgroundColor: BoxBG;
  borderRadius: BoxBorder;
  border: BoxBorder;
};
// const myBoxStyle: BoxStyle = {
//   size: "large",
//   backgroundColor: "blue",
//   border: "1px solid black",
//   borderRadius: "9999px",
// };

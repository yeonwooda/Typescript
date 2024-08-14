// Mapped
// ex) sm: 100px, lg:150px, md:200px
// 1. 코드가 중복 제거
// 2. 유연성과 확장성 용이

// 1. Record
type Animal = "dog" | "cat" | "rat";

const zoo: Record<Animal, string> = {
  dog: "흰둥이",
  cat: "삼색이",
  rat: "라따뚜이",
};

// 2. Nullish[?]
type Dog1 = {
  name: string;
  breed: string;
  age?: number;
};

const kingyul: Dog1 = {
  name: "킹율",
  breed: "이탈리안 하우스",
  age: 3,
};

// 3. Partial
type Cat = {
  name: string;
  breed: number;
  age: number;
};

const sam: Partial<Cat> = {
  name: "삼색이",
};

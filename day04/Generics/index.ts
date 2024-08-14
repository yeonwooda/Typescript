// geberuc.ts -> geberakuze[일반화하다]

type My<A, B> = {
  first: A;
  second: B;
};

const test1: My<number, string> = {
  first: 1,
  second: "문자",
};

type Mcdonald<M extends McMorningMain | NormalMain, S, D> = {
  main: M;
  side: S;
  drink: D;
};

type McMorningMain = "핫케익" | "맥퍼핀" | "브렉퍼스트";
type McMorningSide = "해쉬브라운" | "에그";
type McMorningDrink = "드립커피" | "탄산";

type NormalMain = "상하이 버거" | "빅맥" | "스낵랩";
type NormalSide = "감자튀김" | "맥너겟";
type NormalDrink = "탄산" | "드립커피" | "우유";

const shinji: Mcdonald<McMorningMain, McMorningSide, McMorningDrink> = {
  main: "핫케익",
  side: "에그",
  drink: "드립커피",
};

const kang: Mcdonald<NormalMain, NormalSide, NormalDrink> = {
  main: "상하이 버거",
  side: "감자튀김",
  drink: "탄산",
};

//  서브웨이 메뉴 <빵, 치즈, 야채, 소스>
type Subway<B extends SubwayBread, C, V, S> = {
  bread: B;
  cheese: C;
  vegetable: V[];
  sauce: S;
};

type SubwayBread = "화이트" | "파마산오래가노" | "허니오트";
type SubwayCheese = "아메리칸치즈" | "슈레드치즈";

type SubwayVegetable = "양상추" | "토마토" | "오이" | "피망" | "양파";
type SubwaySauce = "렌치" | "마요네즈" | "스위트어니언" | "허니머스타드";

type SauceType = {
  first: SubwaySauce;
  second: SubwaySauce;
};

const myOrder: Subway<
  SubwayBread,
  SubwayCheese,
  SubwayVegetable,
  Partial<SauceType>
> = {
  bread: "파마산오래가노",
  cheese: "슈레드치즈",
  sauce: { first: "렌치", second: "마요네즈" },
  vegetable: ["양파", "양상추", "오이"],
};

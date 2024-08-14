type Pizza<D, C, T extends Pizzatopping, S> = {
  dough: D;
  cheese: C;
  topping: T[];
  sauce: S;
};

type Pizzadough = "오리지널" | "씬" | "치즈크러스트";
type Pizzacheese = "모짜렐라" | "고르곤졸라" | "체다";
type Pizzatopping = "페퍼로니" | "베이컨" | "양파" | "올리브" | "피망";
type Pizzasauce = "토마토" | "크림" | "핫소스";

const myOrder1: Pizza<Pizzadough, Pizzacheese, Pizzatopping, Pizzasauce> = {
  dough: "씬",
  cheese: "고르곤졸라",
  sauce: "크림",
  topping: ["베이컨", "양파", "올리브"],
};

type IceCream<B, T extends IceCreamTopping, S> = {
  base: B;
  topping: T[];
  syrup: S;
};

type IceCreamBase = "바닐라" | "초콜릿" | "딸기";
type IceCreamTopping = "아몬드" | "초콜릿 칩" | "카라멜";
type IceCreamSyrup = "초콜릿" | "카라멜" | "딸기";

const myOrder2: IceCream<IceCreamBase, IceCreamTopping, IceCreamSyrup> = {
  base: "딸기",
  topping: ["아몬드", "초콜릿 칩"],
  syrup: "초콜릿",
};

type Ramen<N, B, T extends RamenTopping, A> = {
  noodle: N;
  broth: B;
  topping: T[];
  addon?: Partial<A>;
};
type RamenNoodle = "소면" | "중면" | "우동면";
type RamenBroth = "간장" | "된장" | "매운맛";
type RamenTopping = "계란" | "차슈" | "파" | "김치";
type RamenAddon = "떡" | "치즈" | "만두";

const myOrder3: Ramen<RamenNoodle, RamenBroth, RamenTopping, RamenAddon> = {
  noodle: "소면",
  broth: "간장",
  topping: ["계란", "김치"],
  addon: "만두",
};

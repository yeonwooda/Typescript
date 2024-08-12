type Coffee1 = {
  name: string;
  price: number;
  hasShot: boolean;
};

const latte: Coffee1 = {
  name: "라뗴",
  hasShot: true,
  price: 2500,
};

type CoupangItem = {
  link: string;
  name: string;
  starRate: number;
  review: number;
  price: number;
  discountPercent: number;
};

const birakZero: CoupangItem = {
  link: "https://www.coupang.com/",
  name: "팔도 비락식혜 제로",
  starRate: 5,
  review: 2235,
  price: 264000,
  discountPercent: 52,
};

// type paldo = {
//   origin: string;
//   name: string;
//   subName: string;
//   price: number;
// };

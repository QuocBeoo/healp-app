import { randomDate, randomNumber, randomValue } from "../helper/Utils";

const listImgComlumn = [
  "/imgs/column/column-1.jpg",
  "/imgs/column/column-2.jpg",
  "/imgs/column/column-3.jpg",
  "/imgs/column/column-4.jpg",
  "/imgs/column/column-5.jpg",
  "/imgs/column/column-6.jpg",
  "/imgs/column/column-7.jpg",
  "/imgs/column/column-8.jpg",
];

const listTagComlumn = [
  "魚料理",
  "和食",
  "DHA",
  "Tag",
  "IQ",
  "EQ",
  "Sport",
  "Stack",
];

export const DataComlumn = {
  listColumn: Array.from({ length: 20 }, () => ({
    img: randomValue(listImgComlumn),
    date: randomDate(new Date(2020, 0, 1), new Date()),
    content:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ. 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ. 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    listTag: Array.from({ length: randomNumber(2, 11) }, () =>
      randomValue(listTagComlumn)
    ),
  })),
};

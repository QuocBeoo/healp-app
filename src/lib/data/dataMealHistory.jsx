import { UtilsConst } from "../definitions/UtilsConst";
import { randomDate, randomValue } from "../helper/Utils";

const { morning, lunch, dinner, snack } = UtilsConst.menuHistory;

const listType = [morning, lunch, dinner, snack];

const listImgHistory = [
  "/imgs/history/d01.jpg",
  "/imgs/history/d02.jpg",
  "/imgs/history/l01.jpg",
  "/imgs/history/l02.jpg",
  "/imgs/history/l03.jpg",
  "/imgs/history/m01.jpg",
  "/imgs/history/m02.jpg",
  "/imgs/history/m03.jpg",
  "/imgs/history/s01.jpg",
];

export const DataMealHistory = {
  listMealHistory: Array.from({ length: 120 }, () => ({
    img: randomValue(listImgHistory),
    type: randomValue(listType),
    date: randomDate(new Date(2020, 0, 1), new Date()),
  })),
};

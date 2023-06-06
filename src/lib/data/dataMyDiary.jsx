import { randomDate, randomValue } from "../helper/Utils";

export const DataMyDiary = {
  listMyDiary: Array.from({ length: 30 }, () => ({
    date: randomDate(new Date(2020, 0, 1), new Date()),
    content:
      "私の日記の記録が一部表示されます。<br/>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキステキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
  })),
};

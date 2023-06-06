import { randomDate, randomNumber } from "../helper/Utils";

export const DataMyExercise = {
  listMyDiary: {
    date: randomDate(new Date(2020, 0, 1), new Date()),
    data: Array.from({ length: 30 }, () => ({
      content: "家事全般（立位・軽い",
      kcal: randomNumber(1, 120),
      minutes: randomNumber(1, 120),
    })),
  },
};

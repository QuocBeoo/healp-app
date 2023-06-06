import { UtilsConst } from "../definitions/UtilsConst";
import { randomNumber } from "../helper/Utils";

const numberToal = randomNumber(10, 100);
const numberCurrent = randomNumber(1, numberToal);
const progress = Math.round((numberCurrent * 100) / numberToal);

export const DataAchievement = {
  listAchievement: {
    numberCurrent: numberCurrent,
    numberToal: numberToal,
    progress: progress,
    datasets: [
      {
        data: [progress, 100 - progress],
        borderColor: [UtilsConst.variableCSS.light, "transparent"],
        borderWidth: 3,
        weight: 0,
      },
    ],
  },
};

import { UtilsConst } from "../definitions/UtilsConst";
import {
  generateDataGrap,
  generateLabelsGrap,
  randomNumber,
} from "../helper/Utils";

const labels = generateLabelsGrap(
  randomNumber(1, 12),
  Array.from({ length: 12 }, (_, i) => i + 1),
  " 月"
);

export const DataGrap = {
  listGrap: {
    labels,
    datasets: [
      {
        label: "D0",
        data: generateDataGrap(labels),
        borderColor: UtilsConst.variableCSS["primary-300"],
        backgroundColor: UtilsConst.variableCSS["primary-300"],
      },
      {
        label: "D1",
        data: generateDataGrap(labels),
        borderColor: UtilsConst.variableCSS["secondary-300"],
        backgroundColor: UtilsConst.variableCSS["secondary-300"],
      },
    ],
  },
};

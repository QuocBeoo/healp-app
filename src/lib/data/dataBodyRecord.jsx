import { UtilsConst } from "../definitions/UtilsConst";
import {
  generateDataGrap,
  labelsHourse,
  labelsMonth,
  labelsWeekChar,
  labelsYear,
  randomDate,
} from "../helper/Utils";

const { day, month, week } = UtilsConst.bodyRecord;

function DataBodyRecord(types) {
  let labels;

  switch (types) {
    case day:
      labels = labelsHourse;
      break;
    case month:
      labels = labelsMonth;
      break;
    case week:
      labels = labelsWeekChar;
      break;
    default:
      labels = labelsYear;
      break;
  }

  if (!labels) {
    return {};
  }

  return {
    date: randomDate(new Date(2020, 0, 1), new Date()),
    data: {
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
}
export default DataBodyRecord;

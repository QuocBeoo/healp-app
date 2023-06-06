import { UtilsConst } from "../definitions/UtilsConst";

export const randomNumber = (start = 0, end = start + 1) => {
  return Math.floor(Math.random() * end) + start;
};

export const randomDate = (start, end) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date;
};

export const randomValue = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

export const formatZero = (value) => {
  return value < 10 ? "0" + value : "" + value;
};

export const generateLabelsGrap = (
  fromMonth = 1,
  listValue,
  subString = ""
) => {
  const indexStop = listValue.indexOf(fromMonth);
  let start = indexStop;
  let result = [];
  do {
    result.push(`${listValue[start]}${subString}`);
    start += 1;
    if (start === listValue.length) {
      start = 0;
    }
    if (start === indexStop) {
      break;
    }
  } while (true);
  return [...result];
};

export const generateDataGrap = (labels, start = 1, end = 1000) => {
  return labels.map(() => randomNumber(start, end));
};

export const labelsYear = generateLabelsGrap(
  randomNumber(1, 12),
  Array.from({ length: 12 }, (_, i) => i + 1),
  " 月"
);

export const labelsHourse = generateLabelsGrap(
  randomNumber(0, 24),
  Array.from({ length: 24 }, (_, i) => i),
  " 時間"
);

export const labelsMonth = generateLabelsGrap(
  randomNumber(1, 31),
  Array.from({ length: 31 }, (_, i) => i + 1),
  " 日"
);

export const labelsWeekNumber = generateLabelsGrap(
  randomNumber(0, 7),
  Array.from({ length: 7 }, (_, i) => i)
);

export const labelsWeekChar = labelsWeekNumber?.map(
  (_) => UtilsConst.listWeek[_]
);

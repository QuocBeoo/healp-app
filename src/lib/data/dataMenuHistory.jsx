import { UtilsConst } from "../definitions/UtilsConst";
import IconMenuDrink from "@/icons/iconMenuDrink";
import IconMenuEat from "@/icons/iconMenuEat";

const { morning, lunch, dinner, snack } = UtilsConst.menuHistory;

export const DataMenuHistory = {
  listMenu: [
    {
      label: morning,
      icon: <IconMenuEat />,
    },
    {
      label: lunch,
      icon: <IconMenuEat />,
    },
    {
      label: dinner,
      icon: <IconMenuEat />,
    },
    {
      label: snack,
      icon: <IconMenuDrink />,
    },
  ],
};

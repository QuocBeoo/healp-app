import { UtilsConst } from "../definitions/UtilsConst";
import IconChallenge from "@/icons/iconChallenge";
import IconMemo from "@/icons/iconMemo";
import IconInfo from "@/icons/iconInfo";
import { randomNumber } from "../helper/Utils";

export const DataNav = {
  listNav: [
    {
      title: "自分の記録",
      icon: <IconMemo />,
      link: UtilsConst?.page.recordPage.url,
    },
    {
      title: "チャレンジ",
      icon: <IconChallenge />,
      link: "#",
    },
    {
      title: "お知らせ",
      icon: <IconInfo />,
      link: "#",
      notification: randomNumber(1, 50),
    },
  ],
};

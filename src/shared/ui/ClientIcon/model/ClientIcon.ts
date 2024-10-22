//функция для получения иконки по строке
//(с сервера приходит название иконки, хранящейся на клиенте)
import { FC, SVGProps } from "react";
import BeefIcon from "@/shared/assets/icons/beef.svg";
import SoupIcon from "@/shared/assets/icons/soup.svg";
import SaladIcon from "@/shared/assets/icons/salad.svg";
import WineIcon from "@/shared/assets/icons/wine.svg";
import CheryIcon from "@/shared/assets/icons/cherry.svg";

export const Icons: Record<string, FC<SVGProps<SVGElement>>> = {
  beef: BeefIcon,
  soup: SoupIcon,
  salad: SaladIcon,
  wine: WineIcon,
  cherry: CheryIcon,
  default: CheryIcon,
};

// icons
import MainIcon from "@/shared/assets/icons/beef.svg";
import SoupIcon from "@/shared/assets/icons/soup.svg";
import SaladIcon from "@/shared/assets/icons/salad.svg";
import DrinkIcon from "@/shared/assets/icons/wine.svg";
import DessertIcon from "@/shared/assets/icons/cherry.svg";

import { Category } from "./category";

export const CategoriesList: Category[] = [
  //   {
  //     path: "all",
  //     name: "Все категории",
  //     Image: DesertImage,
  //   },
  {
    path: "main",
    name: "Основные блюда",
    Icon: MainIcon,
  },
  {
    path: "soups",
    name: "Супы",
    Icon: SoupIcon,
  },
  {
    path: "salads",
    name: "Салаты",
    Icon: SaladIcon,
  },
  //   {
  //     path: "dinners",
  //     name: "Завтраки",
  //     Image: DinnerImage,
  //   },
  {
    path: "drinks",
    name: "Напитки",
    Icon: DrinkIcon,
  },
  {
    path: "desserts",
    name: "Десерты",
    Icon: DessertIcon,
  },
];

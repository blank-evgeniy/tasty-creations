// pictures
import MainDishtImage from "@/shared/assets/pictures/main.jpg";
import SoupImage from "@/shared/assets/pictures/soup.jpg";
import SaladImage from "@/shared/assets/pictures/salad.jpg";
// import DinnerImage from "@/shared/assets/pictures/dinner.jpg";
import DrinkImage from "@/shared/assets/pictures/drink.jpg";
import DessertImage from "@/shared/assets/pictures/dessert.jpg";

import { Category } from "./category";

export const CategoriesList: Category[] = [
  //   {
  //     path: "all",
  //     name: "Все категории",
  //     image: DesertImage,
  //   },
  {
    path: "main",
    name: "Основные блюда",
    image: MainDishtImage,
  },
  {
    path: "soups",
    name: "Супы",
    image: SoupImage,
  },
  {
    path: "salads",
    name: "Салаты",
    image: SaladImage,
  },
  //   {
  //     path: "dinners",
  //     name: "Завтраки",
  //     image: DinnerImage,
  //   },
  {
    path: "drinks",
    name: "Напитки",
    image: DrinkImage,
  },
  {
    path: "desserts",
    name: "Десерты",
    image: DessertImage,
  },
];

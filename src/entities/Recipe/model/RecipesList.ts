import { Recipe } from "./recipe";

export const RecipesListMock: Recipe[] = [
  {
    name: "Блины вкусные",
    category: "Десерты",
    description: "Очень вкусные блины",
    ingredients: [
      {
        name: "молоко",
        value: 1,
        unit: "л",
      },
    ],
    steps: ["взять", "приготовить"],
    calories: 200,
    time: 30,
  },
];

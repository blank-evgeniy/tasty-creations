import { routes } from "@/app/config/routes";

export interface NavigationLink {
  href: string;
  title: string;
}

export const NavigationLinks: NavigationLink[] = [
  { href: routes.PUBLIC.CATEGORIES, title: "Категории" },
  { href: routes.PUBLIC.RECIPES, title: "Рецепты" },
];

export const NavigationLinksWithAuth: NavigationLink[] = [
  ...NavigationLinks,
  { href: routes.PRIVATE.RECIPE_BOOK, title: "Книга рецептов" },
];

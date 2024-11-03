class Routes {
  private privateRoute = "/i";

  get PUBLIC() {
    return {
      HOME: "/",
      AUTH: "/auth",
      CATEGORIES: "/categories",
      RECIPES: "/recipes",
    };
  }

  get PRIVATE() {
    return {
      RECIPE_BOOK: `${this.privateRoute}/recipe-book`,
      PROFILE: `${this.privateRoute}/profile`,
    };
  }
}

export const routes = new Routes();

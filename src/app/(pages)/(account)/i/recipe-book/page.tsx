import styles from "./page.module.scss";
import RecipeBook from "./RecipeBook/RecipeBook";

export const metadata = {
  title: "Книга рецептов | Tasty Creations",
  robots: {
    index: false,
    follow: false,
  },
};

const RecipeBookPage = () => {
  return (
    <div className={styles.page}>
      <RecipeBook />
    </div>
  );
};

export default RecipeBookPage;

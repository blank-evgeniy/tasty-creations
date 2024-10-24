import styles from "./page.module.scss";
import Image from "next/image";
import HeroImage from "@/shared/assets/pictures/hero2.jpg";
import AppLink, { LinkTheme } from "@/shared/ui/Link/AppLink";
import MoveRightIcon from "@/shared/assets/icons/move-right.svg";
import { PagesUrl } from "@/app/config/pagesUrl";
import { Reveal } from "@/shared/ui/Animation";
import { CategoriesList } from "@/entities/Category";
import Heading from "@/shared/ui/Heading/Heading";

export default function Categories() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Reveal delay={0.2}>
          <Heading>Категории</Heading>
        </Reveal>

        <Reveal delay={0.4}>
          <h2 className={styles.subtitle}>
            Выберите рецепты какой категории вы хотите найти
          </h2>
        </Reveal>
        <Reveal delay={0.6}>
          <CategoriesList className={styles.categories_list} />
        </Reveal>

        <Reveal delay={0.8}>
          <div className={styles.link_section}>
            <h2 style={{ display: "inline" }} className={styles.subtitle}>
              Или перейдите к списку всех рецептов
            </h2>

            <AppLink
              href={PagesUrl.RECIPES}
              theme={LinkTheme.BUTTON}
              className={styles.button}
            >
              <div className={styles.button_content}>
                <MoveRightIcon />
                <p>Все рецепты</p>
              </div>
            </AppLink>
          </div>
        </Reveal>
      </main>
      <Reveal behaviour={"RIGHT"}>
        <div className={styles.img_container}>
          <Image
            priority
            className={styles.hero_image}
            src={HeroImage}
            alt="персонаж-официант"
          />
        </div>
      </Reveal>
    </div>
  );
}

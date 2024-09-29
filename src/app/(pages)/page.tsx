import Image from "next/image";
import styles from "./page.module.scss";
import HeroImage from "@/shared/assets/illustrations/hero.png";
import Button, { ButtonColor, ButtonSize } from "@/shared/ui/Button/Button";
import AppLink, { LinkTheme } from "@/shared/ui/Link/AppLink";
import GithubIcon from "@/shared/assets/icons/github.svg";
import PersonIcon from "@/shared/assets/icons/circle-user-round.svg";
import EducationIcon from "@/shared/assets/icons/graduation-cap.svg";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
        className={styles.hero_image}
        src={HeroImage}
        alt="персонаж-повар"
      />
      <main className={styles.content}>
        <div className={styles.about}>
          <h1 className={styles.title}>
            Добро пожаловать на наш кулинарный сайт!
          </h1>
          <p className={styles.paragraph}>
            На нашем сайте вы найдете множество вкусных и простых рецептов,
            которые подойдут как для начинающих поваров, так и для опытных
            кулинаров. Мы собираем лучшие рецепты со всего мира и делимся ими с
            вами. Здесь вы сможете найти идеи для завтраков, обедов и ужинов, а
            также десертов и закусок.
          </p>
          <p className={styles.paragraph}>
            Наши рецепты сопровождаются пошаговыми инструкциями и фотографиями,
            чтобы вам было легко готовить. Присоединяйтесь к нашему сообществу
            кулинаров, делитесь своими рецептами и вдохновляйтесь новыми идеями!
          </p>
          <Button color={ButtonColor.SECONDARY} size={ButtonSize.L}>
            Начать готовить!
          </Button>
        </div>
        <div className={styles.sources}>
          <h2 className={styles.sources_title}>Ссылки</h2>
          <div className={styles.links}>
            <AppLink
              withIcon
              theme={LinkTheme.BUTTON}
              href="https://github.com/blank-evgeniy/tasty-creations"
              target="_blank"
            >
              <GithubIcon />
              GitHub
            </AppLink>
            <AppLink
              withIcon
              theme={LinkTheme.BUTTON}
              href="https://blankevgeniy.vercel.app/"
              target="_blank"
            >
              <PersonIcon />
              Blanke
            </AppLink>
            <AppLink
              withIcon
              theme={LinkTheme.BUTTON}
              href="https://klgtu.ru/"
              target="_blank"
            >
              <EducationIcon />
              КГТУ
            </AppLink>
          </div>
        </div>
      </main>
    </div>
  );
}

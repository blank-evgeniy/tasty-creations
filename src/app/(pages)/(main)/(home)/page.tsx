import Image from "next/image";
import HeroImage from "@/shared/assets/pictures/hero.jpg";
import AppLink, {
  LinkColor,
  LinkSize,
  LinkTheme,
} from "@/shared/ui/Link/AppLink";
import GithubIcon from "@/shared/assets/icons/github.svg";
import PersonIcon from "@/shared/assets/icons/circle-user-round.svg";
import { PagesUrl } from "@/app/config/pagesUrl";
import { Reveal, TextReveal } from "@/shared/ui/Animation";
import Heading from "@/shared/ui/Heading/Heading";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Reveal behaviour={"LEFT"}>
        <div className={styles.img_container}>
          <Image
            priority
            className={styles.hero_image}
            src={HeroImage}
            alt="персонаж-повар"
          />
        </div>
      </Reveal>
      <main className={styles.content}>
        <div className={styles.about}>
          <Heading className={styles.title}>
            <TextReveal text="Tasty Creations - твой кулинарный проводник" />
          </Heading>

          <Reveal delay={1}>
            <p className={styles.paragraph}>
              На нашем сайте вы найдете множество вкусных и простых рецептов,
              которые подойдут как для начинающих поваров, так и для опытных
              кулинаров. Мы собираем лучшие рецепты со всего мира и делимся ими
              с вами. Здесь вы сможете найти идеи для завтраков, обедов и
              ужинов, а также десертов и закусок.
            </p>
          </Reveal>

          <Reveal delay={1.2}>
            <p className={styles.paragraph}>
              Наши рецепты сопровождаются пошаговыми инструкциями и
              фотографиями, чтобы вам было легко готовить. Присоединяйтесь к
              нашему сообществу кулинаров, делитесь своими рецептами и
              вдохновляйтесь новыми идеями!
            </p>
          </Reveal>

          <Reveal delay={1.4}>
            <AppLink
              theme={LinkTheme.BUTTON}
              color={LinkColor.SECONDARY}
              size={LinkSize.L}
              href={PagesUrl.CATEGORIES}
            >
              Начать готовить!
            </AppLink>
          </Reveal>
        </div>
        <div className={styles.sources}>
          <Reveal delay={1.6}>
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
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}

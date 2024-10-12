import Image from "next/image";
import styles from "./page.module.scss";
import HeroImage from "@/shared/assets/pictures/hero.png";
import AppLink, {
  LinkColor,
  LinkSize,
  LinkTheme,
} from "@/shared/ui/Link/AppLink";
import GithubIcon from "@/shared/assets/icons/github.svg";
import PersonIcon from "@/shared/assets/icons/circle-user-round.svg";
import Reveal from "@/shared/animations/Reveal/Reveal";
import TextReveal from "@/shared/animations/TextReveal/TextReveal";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "700", subsets: ["cyrillic"] });

export default function Home() {
  return (
    <div className={styles.page}>
      <Reveal behaviour={"LEFT"}>
        <Image
          className={styles.hero_image}
          src={HeroImage}
          alt="персонаж-повар"
        />
      </Reveal>
      <main className={styles.content}>
        <div className={styles.about}>
          <h1 className={`${merriweather.className} ${styles.title}`}>
            <TextReveal text="Tasty Creations - твой кулинарный проводник" />
          </h1>

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
              href="/categories"
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

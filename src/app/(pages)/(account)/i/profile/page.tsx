import Heading from "@/shared/ui/Heading/Heading";
import styles from "./page.module.scss";
import { ProfileCard } from "@/widgets/ProfileCard";
import { MiniRecipeBook } from "@/widgets/MiniRecipeBook";
import { Reveal } from "@/shared/ui/Animation";

const ProfilePage = () => {
  return (
    <div className={styles.page}>
      <Reveal>
        <Heading>Профиль</Heading>
      </Reveal>
      <Reveal delay={0.5}>
        <div className={styles.wrapper}>
          <ProfileCard className={styles.profile} />
          <MiniRecipeBook className={styles.recipe_book} />
        </div>
      </Reveal>
    </div>
  );
};

export default ProfilePage;

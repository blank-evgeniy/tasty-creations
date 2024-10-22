import { classNames } from "@/shared/lib/classNames/classNames";
import { UserResponse } from "@/features/authByUsername";
import styles from "./Profile.module.scss";

interface ProfileProps {
  className?: string;
  user: UserResponse;
}

const Profile = ({ className, user }: ProfileProps) => {
  const { username, role } = user;

  const firstLetter = username.split("")[0].toUpperCase();

  if (role === "admin") {
    return (
      <div className={classNames(styles.profile, {}, [className])}>
        <div className={styles.avatar}>{firstLetter}</div>
        <div>
          <p>{username}</p>
          <p className={styles.admin}>admin</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.profile, {}, [className])}>
      <div className={styles.avatar}>{firstLetter}</div>
      <p>{username}</p>
    </div>
  );
};

export default Profile;

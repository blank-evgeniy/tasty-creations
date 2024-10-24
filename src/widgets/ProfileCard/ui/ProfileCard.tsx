"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./ProfileCard.module.scss";
import Button, { ButtonColor } from "@/shared/ui/Button/Button";
import { useAuth } from "@/features/authByUsername";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const isAdmin = user.role === "admin";
  const firstLetter = user.username.split("")[0].toUpperCase();

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={styles.profile_card}>
        <div className={styles.avatar}>{firstLetter}</div>

        <p className={styles.username}>{user.username}</p>
        <p>{isAdmin ? "администратор" : "кулинарный любитель"}</p>

        <Button
          color={ButtonColor.SECONDARY}
          className={styles.logout_btn}
          onClick={() => logout()}
        >
          Выйти
        </Button>
      </div>
    </div>
  );
};

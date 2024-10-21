import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Banner.module.scss";
import { forwardRef } from "react";
import AppIcon from "@/shared/assets/icons/app-icon.svg";
import { motion } from "framer-motion";

interface BannerProps {
  className?: string;
}

export const Banner = forwardRef<HTMLDivElement, BannerProps>(function Banner(
  props,
  ref
) {
  return (
    <div ref={ref} className={classNames(styles.banner, {}, [props.className])}>
      <AppIcon width={48} height={48} />
    </div>
  );
});

export const MotionBanner = motion.create(Banner);
export default Banner;

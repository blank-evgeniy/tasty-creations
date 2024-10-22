"use client";

import { AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

import styles from "./Transition.module.scss";
import { MotionBanner } from "./Banner/Banner";

const transitionAnimation: Variants = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: {
    top: ["100%", "0%", "0%"],
    transition: {
      duration: 0.5,
    },
  },
};

export const Transition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className={styles.container}>
          <MotionBanner
            variants={transitionAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

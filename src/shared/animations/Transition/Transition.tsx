"use client";
import styles from "./Transition.module.scss";
import AppIcon from "@/shared/assets/icons/app-icon.svg";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

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

const Transition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className={styles.container}>
          <motion.div
            className={styles.transition}
            variants={transitionAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <AppIcon width={48} height={48} />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Transition;

"use client";
import styles from "./PageReveal.module.scss";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageReveal = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          className={styles.page_reveal}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.6, ease: "easeInOut" },
          }}
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageReveal;

"use client";
import { motion, Variants } from "framer-motion";
import styles from "./TextReveal.module.scss";

interface TextRevealProps {
  text: string;
}

const wordAnimation: Variants = {
  hidden: {},
  visible: {},
};

const characterAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: `0.25em`,
    rotateZ: 10,
  },
  visible: {
    opacity: 1,
    y: `0em`,
    rotateZ: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const TextReveal = ({ text }: TextRevealProps) => {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <motion.span
          className={styles.word}
          key={index}
          aria-hidden
          initial="hidden"
          animate="visible"
          variants={wordAnimation}
          transition={{
            delayChildren: index * 0.05 + 0.7,
            staggerChildren: 0.05,
          }}
        >
          {word.split("").map((character, index) => (
            <motion.span
              className={styles.character}
              key={index}
              aria-hidden
              variants={characterAnimation}
            >
              {character}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </>
  );
};


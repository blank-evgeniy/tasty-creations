"use client";
import { motion, Variants } from "framer-motion";

type RevealBehaviourType = Record<"DEFAULT" | "LEFT" | "RIGHT", Variants>;

type RevealBehaviourKeys = keyof RevealBehaviourType;

export const RevealBehaviour: RevealBehaviourType = {
  DEFAULT: {
    hidden: { opacity: 0, y: -20 },
    shown: { opacity: 1, y: 0 },
  },

  LEFT: {
    hidden: { opacity: 0, x: "-100%" },
    shown: { opacity: 1, x: 0 },
  },

  RIGHT: {
    hidden: { opacity: 0, x: "100%" },
    shown: { opacity: 1, x: 0 },
  },
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  behaviour?: RevealBehaviourKeys;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  behaviour = "DEFAULT",
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="shown"
      variants={RevealBehaviour[behaviour]}
      transition={{ delay: delay + 0.7 }}
    >
      {children}
    </motion.div>
  );
};

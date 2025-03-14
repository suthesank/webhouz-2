import { Variants, motion, HTMLMotionProps } from "framer-motion";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function MotionDiv({ children, className, ...rest }: MotionDivProps) {
  return (
    <motion.div className={className} {...rest}>
      {children}
    </motion.div>
  );
}

export const staggerChildrens: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.5,
    },
  },
};

export const slideUpWithFade: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "easeInEaseOut",
    },
  },
};

export const slideDownWithFade: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "easeInEaseOut",
    },
  },
};

export const slideLeftWithFade: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "easeInEaseOut",
    },
  },
};

export const slideRightWithFade: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "easeInEaseOut",
    },
  },
};

export function StaggerChildrens({
  children,
  className = "",
  skipAnimation = false,
}) {
  return (
    <motion.div
      initial={!skipAnimation && "hidden"}
      animate={!skipAnimation && "show"}
      variants={!skipAnimation && staggerChildrens}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildrensWhenVisible({
  children,
  className = "",
  skipAnimation = false,
}) {
  return (
    <motion.div
      initial={!skipAnimation && "hidden"}
      whileInView={!skipAnimation && "show"}
      viewport={{ once: true }}
      variants={!skipAnimation && staggerChildrens}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUpWithFadeWhenVisible({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={slideUpWithFade}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideDownWithFadeWhenVisible({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={slideDownWithFade}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideLeftWithFadeWhenVisible({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={slideLeftWithFade}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideRightWithFade({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={slideRightWithFade}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUpWithFade({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={slideUpWithFade}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideDownWithFade({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={slideDownWithFade}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideLeftWithFade({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={slideLeftWithFade}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideRightWithFadeWhenVisible({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={slideRightWithFade}
      className={className}
    >
      {children}
    </motion.div>
  );
}

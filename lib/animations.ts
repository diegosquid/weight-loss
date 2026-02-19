/** @fileoverview Animation utilities for Metabolic Science 2.0
 *  Reusable Framer Motion variants and spring configs
 */

import { Variants, Spring } from "framer-motion";

// ============================================================================
// SPRING PHYSICS CONFIGURATIONS
// ============================================================================

/** Default spring - balanced feel */
export const springDefault: Spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

/** Bouncy spring - playful interactions */
export const springBouncy: Spring = {
  type: "spring",
  stiffness: 400,
  damping: 15,
};

/** Gentle spring - subtle movements */
export const springGentle: Spring = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

/** Snappy spring - quick responses */
export const springSnappy: Spring = {
  type: "spring",
  stiffness: 500,
  damping: 35,
};

/** Slow spring - dramatic reveals */
export const springSlow: Spring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1.2,
};

// ============================================================================
// FADE IN VARIANTS
// ============================================================================

/** Fade in from bottom (up) */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springDefault,
  },
};

/** Fade in from top (down) */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springDefault,
  },
};

/** Fade in from left */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springDefault,
  },
};

/** Fade in from right */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springDefault,
  },
};

/** Simple fade in (no movement) */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/** Scale fade in */
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springDefault,
  },
};

// ============================================================================
// STAGGER VARIANTS
// ============================================================================

/** Container with staggered children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Container with slower stagger */
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/** Container with fast stagger */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/** Child item for stagger containers */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springGentle,
  },
};

/** Stagger item with scale */
export const staggerItemScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springBouncy,
  },
};

// ============================================================================
// HOVER VARIANTS
// ============================================================================

/** Scale up on hover */
export const scaleOnHover = {
  scale: 1.05,
  transition: springSnappy,
};

/** Scale down on hover (press effect) */
export const scaleOnPress = {
  scale: 0.95,
  transition: springSnappy,
};

/** Lift up on hover */
export const liftOnHover = {
  y: -8,
  transition: springDefault,
};

/** Subtle lift on hover */
export const liftSubtleOnHover = {
  y: -4,
  transition: springGentle,
};

// ============================================================================
// PAGE TRANSITION VARIANTS
// ============================================================================

/** Page slide up transition */
export const pageTransitionUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

/** Page fade transition */
export const pageTransitionFade: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

/** Page slide with fade */
export const pageTransitionSlide: Variants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/** Create custom fade variant with offset */
export function createFadeInVariant(
  direction: "up" | "down" | "left" | "right" = "up",
  distance: number = 40
): Variants {
  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    hidden: {
      opacity: 0,
      ...offsets[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: springDefault,
    },
  };
}

/** Create stagger container with custom timing */
export function createStaggerContainer(
  staggerDelay: number = 0.1,
  delayChildren: number = 0.1
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

/** Create custom spring config */
export function createSpring(
  stiffness: number = 300,
  damping: number = 30,
  mass: number = 1
): Spring {
  return {
    type: "spring",
    stiffness,
    damping,
    mass,
  };
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** 
 *  - children   (all elements wrapped inside the motion.div)
 *  - className  (any additional classes passed to div)
 *  - delay      (seconds, default 0)
 *  - duration   (seconds, how long it runs or the speed)
 *  - distance   (px, how far it travels in the animation)
 *  - direction: "up" | "down" | "left" | "right", direction the animation goes in
 *  - damping    (how much overshoot the spring animation has)
 */
export default function SpringFade({
  children,
  className,
  delay = 0,
  duration = 3,
  distance = 32,
  direction = "up",
  damping = 12,       
}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    amount: 0.25,
    margin: "0px 0px -10% 0px",
    once: true,
  });

  // Offset the distance based on direction given
  const offset =
    direction === "down" ? -distance :
    direction === "left" ?  distance :
    direction === "right"? -distance :
                            distance;

  const axis = direction === "left" || direction === "right" ? "x" : "y";

  const initial = { opacity: 0, [axis]: offset };
  const final   = { opacity: 1, [axis]: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}              // initial state of items
      animate={inView ? final : {}}  // set items to final state when they're in view
      transition={{
        type: "spring",
        stiffness: 170, 
        damping,
        mass: 1,
        delay,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
}

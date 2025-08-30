import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// This animation gives a Spring-like grow effect
export default function SpringGrow({
  children,
  className,
  delay = 0,
}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    amount: 0.25,
    margin: "0px 0px -10% 0px",
    once: true,
  });

  return (
    <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: [0.8, 1.1, 1] } : {}}
        transition={{
            opacity: { duration: 0.25, ease: "easeOut", delay },
            scale: {
            type: "tween",
            duration: 0.6,
            times: [0, 0.6, 1], 
            ease: ["easeOut", "easeInOut"],
            delay,
            },
        }}
    >
        {children}
    </motion.div>
  );
}
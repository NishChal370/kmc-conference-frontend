import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
      open: {
            y: 0,
            opacity: 1,
            transition: {
                  y: { stiffness: 1000, velocity: -100 },
            },
      },
      closed: {
            y: 50,
            opacity: 0,
            transition: {
                  y: { stiffness: 1000 },
            },
      },
};

interface IRaiseUpAnimationWrapper {
      children: JSX.Element | string;
}

function RaiseUpAnimationWrapper({ children }: IRaiseUpAnimationWrapper) {
      const [isInView, setIsInView] = useState<boolean>(false);

      return (
            <motion.span
                  variants={variants}
                  animate={isInView ? { y: 0 } : { y: 200 }}
                  transition={{ duration: 0.3 }}
                  onViewportEnter={() => {
                        setIsInView(true);
                  }}
                  onViewportLeave={() => {
                        setIsInView(false);
                  }}
                  className="w-full h-full"
                  style={{ display: "inline-block" }}
            >
                  {children}
            </motion.span>
      );
}

export default RaiseUpAnimationWrapper;

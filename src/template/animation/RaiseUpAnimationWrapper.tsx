import { useState } from "react";
import { Variants, motion } from "framer-motion";

const initialVariants = {
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
      variants?: Variants;
}

function RaiseUpAnimationWrapper({ children, variants = initialVariants }: IRaiseUpAnimationWrapper) {
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
                  style={{ display: "inline-block" }}
            >
                  {children}
            </motion.span>
      );
}

export default RaiseUpAnimationWrapper;

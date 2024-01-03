import { useState } from "react";
import { motion } from "framer-motion";

interface IScaleRaiseUpAnimationWrapper {
      children: JSX.Element;
}

function ScaleRaiseUpAnimationWrapper({ children }: IScaleRaiseUpAnimationWrapper) {
      const [isInView, setIsInView] = useState<boolean>(false);
      return (
            <span className=" flex w-fit h-fit" style={{ perspective: "500px" }}>
                  <motion.div
                        initial={false}
                        animate={isInView ? { scale: 1, y: 0 } : { scale: 0.5, y: 200 }}
                        transition={{ duration: 0.6, delay: parseInt("0." + 1) }}
                        onViewportEnter={() => {
                              setIsInView(true);
                        }}
                        className="flex w-fit h-fit "
                  >
                        {children}
                  </motion.div>
            </span>
      );
}

export default ScaleRaiseUpAnimationWrapper;

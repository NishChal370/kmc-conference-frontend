import { useEffect, useRef } from "react";
import { Variant, motion, useAnimation, useInView } from "framer-motion";

interface IAnimatedTextProps {
      text: string | string[];
      el?: keyof JSX.IntrinsicElements;
      className?: string;
      repeatDelay?: number;
      animation?: {
            hidden: Variant;
            visible: Variant;
      };
}

const defaultAnimations = {
      hidden: {
            opacity: 0,
      },
      visible: {
            opacity: 1,
            transition: {
                  duration: 0.5,
            },
      },
};

const HeaderAnimatedText = ({
      text,
      el: Wrapper = "p",
      className,
      repeatDelay,
      animation = defaultAnimations,
}: IAnimatedTextProps) => {
      const controls = useAnimation();
      const textArray = Array.isArray(text) ? text : [text];
      const ref = useRef(null);
      const isInView = useInView(ref, { amount: 0.5, once: true });

      useEffect(() => {
            let timeout: NodeJS.Timeout;
            const show = () => {
                  controls.start("visible");
                  if (repeatDelay) {
                        timeout = setTimeout(async () => {
                              await controls.start("hidden");
                              controls.start("visible");
                        }, repeatDelay);
                  }
            };

            if (isInView) {
                  show();
            } else {
                  controls.start("hidden");
            }

            return () => clearTimeout(timeout);
      }, [isInView]);

      return (
            <Wrapper className={className}>
                  <span className="sr-only">{textArray.join(" ")}</span>
                  <motion.span
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                              visible: { transition: { staggerChildren: 0.1 } },
                        }}
                        aria-hidden
                  >
                        {textArray.map((line, lineIndex) => (
                              <span className="block" key={`${line}-${lineIndex}`}>
                                    {line.split(" ").map((word, wordIndex) => (
                                          <span className="inline-block" key={`${word}-${wordIndex}`}>
                                                <motion.span
                                                      key={`${word}-${wordIndex}`}
                                                      className="inline-block"
                                                      variants={animation}
                                                >
                                                      {word}
                                                </motion.span>
                                                <span className="inline-block">&nbsp;</span>
                                          </span>
                                    ))}
                              </span>
                        ))}
                  </motion.span>
            </Wrapper>
      );
};

export default HeaderAnimatedText;

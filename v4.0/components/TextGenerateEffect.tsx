"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
 
export const TextGenerateEffect = ({
  words,
  className,
  duration = 2,
  delay = 0.2,
}: {
  words: string;
  className?: string;
  duration?: number;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: duration,
        delay: stagger(delay),
      }
    );
  }, [scope.current]);
 
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-gray-300 text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
 
  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-gray-300 text-black text-lg sm:text-xl lg:text-3xl leading-snug tracking-wide text-justify">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
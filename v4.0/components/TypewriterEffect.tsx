'use client'
 
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
 
export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  duration = 2,
  delay = 1,
  cursorDuration,
  onDone
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  duration?: number;
  delay?: number;
  cursorDuration?: number;
  onDone?: () => void;
}) => {
  const [showCursor, setShowCursor] = useState(true);
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={word.className}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-0 sm:my-1 md:my-2 lg:my-3 xl:my-4", className)}>
      <AnimatePresence>
        <motion.div
          className="overflow-hidden pb-2"
          initial={{
            width: "0%",
          }}
          animate={{
            width: "fit-content",
          }}
          whileInView={{
            width: "fit-content",
          }}
          exit={{
            width: "fit-content",
          }}
          transition={{
            duration: duration,
            ease: "linear",
            delay: delay,
            onComplete: () => {
              if(onDone) {
                onDone();
              }
            },
          }}
        >
          <div
            className="font-bold"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {renderWords()}{" "}
          </div>{" "}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {showCursor && <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            delay: delay - 1,
            repeat: cursorDuration ? cursorDuration : Infinity,
            repeatType: "reverse",
            onComplete: () => {
              if (cursorDuration) {
                setShowCursor(false);
              }
            },
          }}
          className={cn(
            "block rounded-sm w-[4px] h-4 sm:h-10 lg:h-12 bg-blue-500",
            cursorClassName
          )}
        ></motion.span>
        }
      </AnimatePresence>
    </div>
  );
};
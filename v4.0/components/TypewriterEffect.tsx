"use client";
 
import { cn } from "@/utils/cn";
import { AnimatePresence, motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
 
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
 
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);
 
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
 
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
                  className={cn(`dark:text-white text-black`, word.className)}
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
    <div className={cn("flex space-x-1 my-1 lg:my-3 xl:my-4", className)}>
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
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
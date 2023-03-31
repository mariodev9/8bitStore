import { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { BatistutaFigure, DibuFigure, MessiFigure } from "../../Icons";
import { useEffect } from "react";

function Card(props) {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  function handleDragEnd(event, info) {
    if (info.offset.x < -100) {
      props.setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      props.setExitX(250);
      props.setIndex(props.index + 1);
    }
  }

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        x: x,
        rotate: rotate,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={props.drag}
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      onDragEnd={handleDragEnd}
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
      exit={{
        x: props.exitX,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "red",
          scale: scale,
        }}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
}

export function CardsAnimatedSwiper() {
  const [index, setIndex] = useState(0);
  const [exitX, setExitX] = useState("100%");

  useEffect(() => {
    if (index === 3) {
      console.log(index, "el index es 3, RESET");
      setIndex(0);
    }
  }, [index]);

  return (
    <motion.div
      style={{
        height: 350,
        position: "relative",
      }}
    >
      <AnimatePresence initial={false}>
        <Card
          key={index + 3}
          initial={{ scale: 0, y: 105, opacity: 0 }}
          animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
          transition={{
            scale: { duration: 0.2 },
            opacity: { duration: 0.4 },
          }}
        ></Card>
        <Card
          key={index + 2}
          initial={{ scale: 0, y: 105, opacity: 0 }}
          animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
          transition={{
            scale: { duration: 0.2 },
            opacity: { duration: 0.4 },
          }}
        ></Card>
        <Card
          key={index + 1}
          initial={{ scale: 0, y: 105, opacity: 0 }}
          animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
          transition={{
            scale: { duration: 0.2 },
            opacity: { duration: 0.4 },
          }}
        ></Card>
        <Card
          key={index}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            opacity: { duration: 0.5 },
          }}
          exitX={exitX}
          setExitX={setExitX}
          index={index}
          setIndex={setIndex}
          drag="x"
        >
          {index === 0 && <DibuFigure />}

          {index === 1 && <MessiFigure />}
          {index === 2 && <BatistutaFigure />}
        </Card>
      </AnimatePresence>
    </motion.div>
  );
}

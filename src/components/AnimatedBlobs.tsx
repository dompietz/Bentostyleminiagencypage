import { motion } from "motion/react";

export function AnimatedBlobs() {
  return (
    <div className="blobs-container">
      {/* Blue blob 1 - top left */}
      <motion.div
        className="blob blob-blue"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "10%",
          left: "15%",
          width: "300px",
          height: "300px",
        }}
      />

      {/* Orange blob 1 - top right */}
      <motion.div
        className="blob blob-orange"
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "5%",
          right: "20%",
          width: "250px",
          height: "400px",
        }}
      />

      {/* Blue blob 2 - middle left */}
      <motion.div
        className="blob blob-blue"
        animate={{
          x: [0, 20, 0],
          y: [0, 25, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "40%",
          left: "5%",
          width: "350px",
          height: "350px",
        }}
      />

      {/* Orange blob 2 - bottom center */}
      <motion.div
        className="blob blob-orange"
        animate={{
          x: [0, -15, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          bottom: "15%",
          left: "35%",
          width: "280px",
          height: "380px",
        }}
      />

      {/* Blue blob 3 - bottom right */}
      <motion.div
        className="blob blob-blue"
        animate={{
          x: [0, 25, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          bottom: "10%",
          right: "10%",
          width: "320px",
          height: "320px",
        }}
      />

      {/* Small blue blob - top */}
      <motion.div
        className="blob blob-blue-small"
        animate={{
          x: [0, -10, 0],
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "15%",
          left: "45%",
          width: "120px",
          height: "120px",
        }}
      />

      {/* Small orange blob - right */}
      <motion.div
        className="blob blob-orange-small"
        animate={{
          x: [0, 20, 0],
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "50%",
          right: "5%",
          width: "140px",
          height: "140px",
        }}
      />
    </div>
  );
}

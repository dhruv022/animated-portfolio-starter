import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat: Infinity
    }
  }
};

const sliderVariants = {
    initial: {
        x: 0,
      },
      animate: {
        x: "-220%",
        transition: {
          repeat:Infinity,
          repeatType:"mirror",
          duration: 20,
        },
    },
};




function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Dhruv Sharma</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div className="buttons zindex" variants={textVariants}>
            <motion.button variants={textVariants} >
              <a href="#Portfolio">My Projects</a>
            </motion.button>
            <motion.button variants={textVariants} ><a href="mailto:dhruv0225@gmaail.com">Contact Me</a></motion.button>
          </motion.div>
          <motion.img className="mmobile" variants={textVariants} src="/scroll.png" alt="" animate="scrollButton"/>
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influncer
      </motion.div>
      <motion.div className="imageContainer" variants={textVariants}>
        <motion.img src="/hero.JPG" alt="" />
      </motion.div>
    </div>
  );
}

export default Hero;

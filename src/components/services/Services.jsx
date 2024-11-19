import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div variants={variants} ref={ref} style={{ height: "100vh" }}>
      <motion.div
        className="services_newdiv"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on healing your brand grow <br /> and move forward.
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
              Business.
            </h1>
            <button>WHAT WE DO?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Development</h2>
            <p>
              We specialize in crafting seamless, lightweight, and blazing-fast
              websites tailored to your needs. Leveraging the latest
              technologies of your choice, We focus on providing high-quality,
              efficient, and future-ready websites that drive results.
            </p>
            {/* <button>Go</button> */}
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Deployment</h2>
            <p>
              We specialize in seamless deployment, ensuring your applications
              are launched quickly and efficiently. We ensure smooth integration
              and minimal downtime. We focus on reliable and future-ready
              solutions that support your business growth.
            </p>
            {/* <button>Go</button> */}
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>SCO</h2>
            <p>
              We specialize in optimizing websites to boost search engine
              rankings and drive organic traffic. Using the latest SEO
              strategies and tools, we ensure your site is visible and engaging.
              We focus on effective, data-driven, and future-ready solutions for
              online success.
            </p>
            {/* <button>Go</button> */}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="services"
        style={{ display: "none" }}
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on healing your
            <br />
            brand grow and move forward.
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
              Business.
            </h1>
            <button>WHAT WE DO?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Web development</h2>
            <p>
              We specialize in deploying robust, full-stack websites that
              perform seamlessly and deliver exceptional user experiences. Our
              expertise ensures smooth launches with minimal downtime and
              optimized performance. For SEO, we craft strategies that boost
              visibility and drive organic traffic.
            </p>
            <button>Contact Us</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

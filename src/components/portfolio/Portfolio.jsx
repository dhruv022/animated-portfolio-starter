import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "./ecom.jpg",
    desc: "The React E-Commerce App is a modern, responsive platform designed to offer a seamless shopping experience. Built with React, dynamic product management, and secure integration with payment gateways and user authentication.",
  },
  {
    id: 2,
    title: "Next.Js Commerce",
    img: "./ecom2.jpg",
    desc: "The Next.js Interior designer Application is a dynamic and responsive platform. Built with Next.js, it features server-side rendering for fast load times. The app also integrates secure user authentication and a scalable architecture.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "./app.avif",
    desc: "The Shopping Store app is a lightweight, responsive platform crafted with VanillaJS, offering a smooth and intuitive shopping experience. It features dynamic product displays, a user-friendly cart system, and seamless navigation.",
  },
  {
    id: 4,
    title: "Music App",
    img: "music.jpg",
    desc: "The Music Streaming App is designed for an immersive listening experience and high-speed rendering APIs for exceptional sound quality. With zero ads, users can enjoy uninterrupted music playback. The app features a sleek interface.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-800, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

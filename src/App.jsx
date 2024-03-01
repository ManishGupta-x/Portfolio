import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./components/Timeline";
import { Footer } from "./components/Footer";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa6";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Jarvis from "./components/Jarvis";
import Timely from "./components/Timely";
import Weather from "./components/weather";

const MobileWarning = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Please switch to desktop view
        </h2>
        <p className="text-lg mb-4">
          For the best experience, we recommend viewing this website on a
          desktop or tablet device.
        </p>
        <p className="text-lg">Thank you!</p>
      </div>
    </div>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });

    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setIsMobile(mediaQuery.matches);
    const resizeHandler = () => {
      setIsMobile(mediaQuery.matches);
    };
    mediaQuery.addListener(resizeHandler);
    return () => {
      mediaQuery.removeListener(resizeHandler);
    };
  }, []);

  if (isMobile) {
    return <MobileWarning />;
  }

  const textWithAnimation =
    "Hi,! I'm Manish you can <br/> explore my work and passions <br/> here!";

  const animatedText = textWithAnimation
    .split(/<br\s*\/?>/i)
    .map((line, lineIndex) => (
      <div
        key={lineIndex}
        className="flex items-center justify-center font-anta"
        data-aos="fade-in"
        data-aos-duration="3000"
        data-aos-delay={lineIndex * 1000}
      >
        {line.split("").map((letter, index) => (
          <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
        ))}
      </div>
    ));
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div className="bg-[#171212] h-[140vh] relative pb-24">
      <Header />
      <motion.div
        className="mx-8 pt-16 h-full overflow-hidden rounded-2xl cursor-grab"
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{
          cursor: "grabbing",
        }}
      >
        <img
          src="https://imgur.com/gz6R91O.png"
          alt="pf1"
          className="w-full h-full object-cover rounded-2xl -z-10 "
          loading="lazy"
        />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center text-center z-10 mt-28"
          style={{ x, y, rotateX, rotateY, z: 1000 }}
          drag
          dragElastic={0.12}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <p className="text-gray-300 text-6xl z-[99] ">{animatedText}</p>
        </motion.div>
      </motion.div>
      <div className="bg-[#171212] h-[95vh] pt-60 pb-[30rem]">
        <Timeline />
        <ul
          class="flex mt-10 ml-[7.2rem] text-3xl text-[#FCF1C8] font-Comfortaa"
          data-aos="fade-in"
        >
          <li class="mr-[9rem]">2018</li>
          <li class="mr-[8.7rem]">2019</li>
          <li class="mr-[8.4rem]">2020</li>
          <li class="mr-[8.7rem]">2021</li>
          <li class="mr-[8.2rem]">2022</li>
          <li class="mr-[8.3rem]">2023</li>
          <li>2024</li>
        </ul>
      </div>
      <div>
        <div className="bg-[#171212] pt-20 pb-60">
          <div className="relative mt-[10rem]">
            <img
              src="https://imgur.com/XXsPESx.png"
              className="w-full h-[20rem] object-cover"
            />

            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-[#291300] h-[33rem] w-[40rem] text-center mx-auto rounded-3xl">
              <p
                className="py-8 text-4xl font-Rubik text-[#FCF1C8]"
                data-aos="fade-in"
              >
                Excited About Me?
              </p>
              <p
                className="text-2xl font-Cabin py-8 px-8 text-[#FCF1C8]"
                data-aos="fade-in"
              >
                Let me introduce you to the magic of me. I'm Manish, a FullStack
                Developer from India with 3-4 years of experience in both
                Backend and Frontend development, specializing in JavaScript and
                its renowned frameworks. Join me as I take you through my story.
                Discover my origin, philosophy, and dreams. Feel the energy that
                drives me. The way I express myself online is unique, just like
                me. Embrace my creativity. Let's embark on this journey
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171212] h-[140vh] pt-32 ">
        <h1
          className="text-center mx-auto mt-[8rem] text-5xl font-Comfortaa text-[#FCF1C8]"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          Crafting masterpieces with Javascript brilliance
        </h1>
        <div
          className="flex justify-evenly items-center mt-[8rem]"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <Jarvis />
          <Timely />
          <Weather />
        </div>
        <motion.button
          className="text-amber-950 px-4 py-2 mt-32 mb-4 bg-[#FCF1C8] rounded-xl font-Madimi text-xl mx-[40rem] "
          whileHover={{ scale: 0.95, transition: { duration: 0.2 } }} // Add animation properties
        >
          View All Projects
        </motion.button>
      </div>

      <div className="bg-[#171212] h-[170vh] pt-60">
        <Link
          to="https://www.linkedin.com/in/manish-gupta-8861ba224/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-[#FCF1C8] w-32 h-32 ml-72 animate-pulse" />
        </Link>
        <div className="flex">
          <Link
            to="https://github.com/ManishGupta-x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt className="text-[#FCF1C8] w-[17rem] h-[11.4rem] mt-[14rem] animate-pulse relative " />
          </Link>
          <h1
            className="text-7xl p-10 text-center mx-auto mt-[8rem] text-[#FCF1C8] text-opacity-70 motion-safe:animate-bounce font-Comfortaa "
            id="connect"
            data-aos="fade-in"
          >
            Hello World! Let's <br /> code together
          </h1>
          <Link  to="https://www.instagram.com/thecodingfreak_22/"
          target="_blank"
          rel="noopener noreferrer">
          <RiInstagramFill className="text-[#FCF1C8] w-[13.8rem] h-[11.4rem] animate-pulse" />
          </Link>
        </div>
        <Link  to="https://twitter.com/Manishg2204022"
          target="_blank"
          rel="noopener noreferrer">

        <FaSquareXTwitter className="text-[#FCF1C8] w-[15rem] h-[11.4rem] float-right mr-[17rem] mt-10 animate-pulse" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default App;

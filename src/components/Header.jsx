import { useState, useEffect } from "react";

import { SlSocialGithub } from "react-icons/sl";
import { SiVisualstudiocode } from "react-icons/si";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  useScroll,
} from "react-scroll";

export const Header = () => {
  const [resumePath, setResumePath] = useState("../data/resumefeb24.pdf");
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 50; // Adjust this threshold as needed

      if (scrollTop > scrollThreshold) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (value) => {
    useScroll().scrollTo(value, {
      smooth: true, // Enable smooth scrolling
      duration: 500, // Adjust duration for scrolling speed (milliseconds)
      delay: 0, // Adjust delay before starting scroll (milliseconds)
    });
  };

  return (
    <>
      <div className="flex justify-between ">
        <motion.div
          className="w-12 h-12 flex items-center justify-center bg-[#fcf1c8] rounded-full m-6 hover:animate-spin-slow"
          whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
        >
          <SiVisualstudiocode className="text-[#171212] text-4xl" />
        </motion.div>

        <div
          className={`fixed z-50 ${
            scrolling
              ? "bg-[#fcf1c8] text-[#171212] border-black"
              : "bg-[#171212] text-[#fcf1c8] border hover:bg-[#fcf1c8] hover:text-[#171212]"
          }  rounded-xl mt-4 left-1/2 transform -translate-x-1/2 px-4 `}
        >
          <ul
            className={`flex text-xl gap-20 ${
              scrolling ? "font-protest-guerrilla px-6" : "font-RubikM "
            }`}
          >
            <li className="mx-2 py-5 cursor-pointer">
              <ScrollLink
                to="timeline" // Replace with the ID of your target section
                spy={true}
                smooth={true}
                duration={2000}
                offset={-120}
              >
                Timeline
              </ScrollLink>
            </li>
            <RouterLink
              to="https://resumemanish.tiiny.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mx-2 py-5 hover:underline cursor-pointer ">
                Resume
              </li>
              
            </RouterLink>
            <li
              className="mx-2 py-5  cursor-pointer  "
              onClick={() => scrollTo(3800)}
            >
              <ScrollLink
                to="connect" // Replace with the ID of your target section
                spy={true}
                smooth={true}
                duration={500}
                offset={-250}
              >
                Connect
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="w-12 h-12 flex items-center justify-center bg-[#fcf1c8] rounded-full m-6 hover:animate-spin-slow">
          <RouterLink
            to="https://github.com/ManishGupta-x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialGithub className="text-[#171212] text-4xl" />
          </RouterLink>
        </div>
      </div>
    </>
  );
};

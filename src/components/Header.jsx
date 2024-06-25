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
      const scrollThreshold = 50; 

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
      smooth: true, 
      duration: 500,
      delay: 0, 
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
              : "bg-[#171212] text-[#fcf1c8] border "
          }  rounded-xl mt-4 left-1/2 transform -translate-x-1/2 px-4 `}
        >
          <ul
            className={`flex text-xl gap-20 ${
              scrolling ? "font-protest-guerrilla px-6" : "font-RubikM "
            }`}
          >
            <motion.li className="mx-2 py-5 cursor-pointer"
            
              whileHover={{ scale: 1.17, transition: { duration: 0.2 } }}
            >
              <ScrollLink
                to="timeline" 
                spy={true}
                smooth={true}
                duration={2000}
                offset={-120}
              >
                Timeline
              </ScrollLink>
            </motion.li>
            <RouterLink
              to="https://drive.google.com/file/d/1FkUTm2NArCqia5dUO-eCqpzAkKOydHEf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.li className="mx-2 py-5 cursor-pointer"
               whileHover={{ scale: 1.17, transition: { duration: 0.2 } }}>
                Resume
              </motion.li>
              
            </RouterLink>
            <motion.li
              className="mx-2 py-5  cursor-pointer  "
              onClick={() => scrollTo(3800)}
              whileHover={{ scale: 1.17, transition: { duration: 0.2 } }}
            >
              <ScrollLink
                to="connect" 
                spy={true}
                smooth={true}
                duration={1500}
                offset={-250}
              >
                Connect
              </ScrollLink>
            </motion.li>
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

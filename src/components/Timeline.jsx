import React, { useState, useEffect, useRef } from "react";
import { content } from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tooltip, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const images = [
    {
      url: "https://imgur.com/s9GAwCe.png",
      borderColor: "border-blue-500",
      content: "",
    },
    {
      url: "https://imgur.com/GQjcY4H.png",
      borderColor: "border-red-500",
    },
    {
      url: "https://imgur.com/cG6r5If.png",
      borderColor: "border-green-500",
    },
    {
      url: "https://imgur.com/SYJlFPU.png",
      borderColor: "border-yellow-500",
    },
    {
      url: "https://imgur.com/4S5S32G.png",
      borderColor: "border-purple-500",
    },
    {
      url: "https://imgur.com/MWgXzcO.png",
      borderColor: "border-purple-500",
    },
    {
      url: "https://imgur.com/MFTHKUH.png",
      borderColor: "border-purple-500",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [timeline, setTimeline] = useState(null);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setHoverIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleclick = (index) => {
    console.log("user clicked ", content[index].title);
    setTimeline(index);
  };


  const handleClickOutside = () => {
    setHoverIndex(null);
  };
  useEffect(() => {
    if (timeline !== null) {
      const contentLength = content[timeline].para.length;
      const typingDuration = contentLength * 30; // Assuming each character takes 20ms to type
      const deletionDuration = contentLength * 10; // Assuming each character takes 10ms to delete
      const totalDuration = typingDuration + deletionDuration + 11000;
      
      const timeoutId = setTimeout(() => {
        setTimeline(null); // Resetting the timeline after typewriter animation duration
      }, totalDuration);
      
      return () => clearTimeout(timeoutId); // Cleanup to avoid memory leaks
    }
  }, [timeline]);

  return (
    <>
      {timeline === null ? (
        <h1 className="flex justify-center items-center text-5xl font-protest-guerrilla  p-10  text-[#FCF1C8]" id="timeline">
          My Timeline
        </h1>
      ) : (
        <div className="text-[#fcf1c8] mx-[10rem] text-xl font-Gothic italic">
          <Typewriter
            options={{
              strings: [content[timeline].para],
                autoStart: true,
                loop:false,
                delay: 30,
                pauseFor:4500,
                deleteSpeed: 10,
              }}
              
            />
            
        </div>  
      )}
      <div className="flex justify-center mt-[10rem] relative">
        <div className="flex items-center">
          {images.map((image, index) => (
            <React.Fragment key={index}>
              <Tooltip
                placement="top"
                content={content[index].title}
                className="p-2 bg-amber-900 mb-2"
                classes="tooltip"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <motion.div
                  className={`relative rounded-full overflow-hidden`}
                  style={{ width: 75, height: 75 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.09 } }} 
                >
                  <img
                    src={image.url}
                    alt={`Dot ${index}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onClick={() => handleclick(index)}
                    
                  />
                </motion.div>
              </Tooltip>

              {index !== images.length - 1 && (
                <div className={`w-32 h-1 bg-[#FCF1C8]`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;

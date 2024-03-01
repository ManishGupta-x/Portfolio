import { motion, useMotionValue, useTransform} from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 325px;
  height: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color:#693E31; 
  color: #fff;
  position: relative;
  cursor: grab;
`;
const Circle = styled.div`
  position: absolute;
  width: 300px;
  height: 280px;
  top: -4.2em;
  right: -10em;
  background-color: #745358 ;
  border-radius: 50%;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  z-index:5;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 22px;
`;





const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 15px;
`;

const BottomContainer = styled.div`
 display: flex;
  flex: 0.1;
  padding: 0 1rem;
`;
const image = "https://imgur.com/ftw22AT.png";


const GuitarWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Guitar = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-top: 2em;
  margin-left: 2em;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;


export function Jarvis(props) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
         style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileHover={{
            scale: 1.1, 
          transition: { duration: 0.09 },  
        }}
        whileTap={{
          cursor : "grabbing"
        }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
         
          <GuitarWrapper>
            <Guitar
              
              style={{ x, y, rotateX, rotateY, z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={image} />
            </Guitar>
          </GuitarWrapper>
        </TopContainer>
        <div className="mb-4 pl-4 font-Comfortaa text-xl text-[#fcf1c8] font-bold">
                  <h1>Jarvis : A Music Streaming <br/> Service</h1>
              </div>
        <BottomContainer> 
        <Link to="https://github.com/ManishGupta-x/Jarvis" target="_blank"
              rel="noopener noreferrer" >
            <motion.button
              className="text-amber-950 px-4 py-2 mt-4 mb-4 bg-[#FCF1C8] rounded-xl font-Madimi text-xl"
              whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
            >
              View
            </motion.button>
          </Link>
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}

export default Jarvis;
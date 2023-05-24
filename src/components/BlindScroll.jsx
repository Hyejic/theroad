import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
	easeInOut,
  } from "framer-motion";
import testVideo from '../assets/video/theroad_spring.mov';

function BlindItem() {
    const blindRef = useRef(null);
    const { scrollYProgress } = useScroll({
		target: blindRef,
		offset: ["end end", "start start"]
    });
    const scaleY = useTransform(scrollYProgress, [1, 0], [1, 0], { ease: easeInOut });
    const opacity = scrollYProgress;
    const background = useTransform(scrollYProgress, [1, 0.5], [
		"linear-gradient(180deg, rgba(167,167,167,1) 0%, rgba(255,253,247,1) 20%)",
		"linear-gradient(180deg, rgba(167,167,167,1) 0%, rgba(255,253,247,1) 100%)"
    ]);

    return (
      <>
	  	<motion.div className="scroll-guide"><span>SCROLL</span></motion.div>
        <div className="blind-cont" ref={blindRef}>
            <div className="blind-cont__inner">
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
                <motion.div className="blind" style={{ scaleY, background }} />
            </div>
        </div>
      </>
    );
};

function WindowItem(){
    const windowRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: windowRef,
      offset: ["start end","end end"]
    });
    const windowScale = useTransform(scrollYProgress, [0, 1], [5, 1], { ease: easeInOut });
    const videoScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

    return (
		<>
		<div className="window-wrap" ref={windowRef}>
			<motion.div className="window" style={{scale: windowScale, opacity }}></motion.div>
		</div>
		</>
    )
}
export function BlindScroll() {
	return (
		<>
		<BlindItem />
		<div className="video-wrap">
			<video autoPlay="autoplay" muted playsInline loop width="100%" height="100%">
				<source src={testVideo} type="video/mp4" />
			</video>
		</div>
		</>
	);
}
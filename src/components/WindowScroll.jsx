import { useRef, useState, useEffect, useLayoutEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
	// easeInOut,
  } from "framer-motion";
import springVideo from '../assets/video/theroad_spring.mov';
import rainVideo from '../assets/video/theroad_raining.mp4';
import windowImg from '../assets/img/img_main_window.png';


const WindowItem = () => {
    const windowRef = useRef(null);
    const windowTop = useRef(null);
    const windowBtm = useRef(null);
	const [windowScreenH, windowScreenHSet] = useState(0);
	const [windowRefH, windowRefHSet] = useState(0);
	const [windowPosTop, windowPosTopSet] = useState(0);

	const hoverImgPreload = () => {
		const windowScreen = window.screen.height;
		const windowIn = window.innerHeight;
		const windowRefH = windowRef.current.clientHeight;
		const windowHalf = Math.ceil(( windowScreen - windowRefH) / 2);
		windowRefHSet(windowHalf + 1);
		// console.log(windowScreen)
		// console.log(windowIn)
		windowScreenHSet(windowScreen);
		windowPosTopSet(windowScreen - windowIn)
		windowTop.clientHeight = windowHalf + 'px';
		windowBtm.clientHeight = windowHalf + 'px';
	};
	
	useLayoutEffect(() => {
		hoverImgPreload();
	}, []);
	useEffect(() => {
		window.addEventListener('resize', hoverImgPreload);
		return () => {
			window.removeEventListener('resize',hoverImgPreload);
		}
	},[]);

	const videoRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: videoRef,
      offset: ["start end","end end"]
    });
    // const windowScale = useTransform(scrollYProgress, [0, 1], [5, 1], { ease: easeInOut });
    // const videoScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const opacity01 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const opacity02 = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);




	
    return (
		<>
		<div className="window-wrap" style={{height: windowScreenH, top: -(windowPosTop /2)}}>
			<div className="window-top" ref={windowTop} style={{height: windowRefH}}></div>
			<div className="window-img" >
				<img className="window" alt={'window'} src={windowImg} onLoad={() => hoverImgPreload()} ref={windowRef}/>
			</div>
			<div className="window-bottom" ref={windowBtm} style={{height: windowRefH}}></div>
		</div>
		<div className="video-wrap" ref={videoRef}>
			<video className="video" autoPlay="autoplay" muted playsInline loop width="100%" height="100%">
				<source src={springVideo} type="video/mp4" />
			</video>
			<motion.video className="video video02 video--rain" autoPlay="autoplay" muted playsInline loop width="100%" height="100%" style={{opacity: opacity01}}>
				<source src={rainVideo} type="video/mp4" />
			</motion.video>
			{/* <motion.video className="video03" autoPlay="autoplay" muted playsInline loop width="100%" height="100%" style={{opacity: opacity02}}>
				<source src={rainVideo} type="video/mp4" />
			</motion.video> */}
		</div>
		</>
    )
}
export function WindowScroll() {
	return (
		<>
		<WindowItem />
		</>
	);
}
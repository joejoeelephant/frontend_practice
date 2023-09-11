import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { useGSAPPlugins } from "./useGSAPPlugins";

export const useScrollTrigger = (domRef: React.RefObject<HTMLElement>, delay: number = 0) => {
    useGSAPPlugins()
    useEffect(() => {
        if(!domRef.current) return;
        let st = ScrollTrigger.create({
            trigger: domRef.current,
            start: "top bottom",  
            onEnter: () => {
                gsap.killTweensOf(domRef.current);
                gsap.fromTo(domRef.current, 
                    { 
                        opacity: 0, 
                        y: 30 ,
                    }, 
                    {
                        opacity: 1,
                        y: 0,
                        duration:1,
                        delay: delay

                    }
                );
            }
        });
        return () => {
            st.kill()
        };
    }, [domRef, delay])
}
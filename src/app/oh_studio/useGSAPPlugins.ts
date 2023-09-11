import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from "react";

export const useGSAPPlugins = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }, []);
};

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

export const useScrollTriggers = (scrollRef: React.RefObject<HTMLElement>, colors: string[]) => {
    const triggersRef = useRef<ScrollTrigger[]>([]);

    useEffect(() => {
        if(!scrollRef.current) return;

        scrollRef.current.querySelectorAll<HTMLDivElement>('section').forEach((item, index) => {
            if(!scrollRef.current) return;
            let scrollAmount = item.offsetTop + item.offsetHeight - scrollRef.current.offsetHeight;

            let st = ScrollTrigger.create({
                trigger: item,
                scroller: scrollRef.current,
                start: "top bottom",  
                end: "bottom top", 
                onEnter: () => {
                    gsap.killTweensOf(scrollRef.current);
                    gsap.to(scrollRef.current, {
                        duration: 0.5,
                        scrollTo: { y: scrollAmount }, 
                        backgroundColor: colors[index],
                        ease: "power1.out"
                    });
                },
                onEnterBack: () => {
                    gsap.killTweensOf(scrollRef.current);
                    gsap.to(scrollRef.current, {
                        duration: 0.5,
                        scrollTo: { y: scrollAmount }, 
                        backgroundColor: colors[index],
                        ease: "power1.out"
                    });
                },
            });
            triggersRef.current.push(st);
        });
        const triggers = triggersRef.current
        return () => {
            triggers.forEach(st => st.kill());
        };
    }, [scrollRef, colors]);
};

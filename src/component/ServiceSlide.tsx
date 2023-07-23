import uniqid from 'uniqid'
import { ReactElement, ReactNode, useMemo,useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import ArrowButton, { Dir } from './ArrowButton';
import { Slide } from '../assets/util/type';
import ServiceCard from './ServiceCard';
export default function ServiceSlide() {
    const ref = useRef<HTMLDivElement>(null)
    const dataSlides = [...Array(22)]
    const numShowCard = () => {
        const widthWin = window.innerWidth
        let numShowCard = 0
        if (widthWin > 1240) {
            numShowCard = 5
        }
        if (widthWin <= 1240 && widthWin >= 900) {
            numShowCard = 4
        }
        if (widthWin<900 && widthWin >= 800) {
            numShowCard = 3
        }
        if (widthWin < 800&& widthWin >= 600) {
            numShowCard = 2
        }
        if (widthWin < 600) {
            numShowCard = 1
        }
        return numShowCard
    }
    const gap = () => {
        const widthWin = window.innerWidth
        let gap = 0
        if (widthWin >= 900) {
            gap = 36
        }
        if (widthWin < 900 ) {
            gap = 18
        }
        return gap
    }
    const Slide: Slide = {
        numTotalCard:dataSlides.length,
        widthCard: () => (ref.current?.offsetWidth! - (numShowCard() - 1) * gap()) / numShowCard(),
        widthTotal: () => dataSlides.length * ref.current?.offsetWidth! / numShowCard() + 100,
        widthShowSlide: ref.current?.offsetWidth,
        startCard:1,
        xTrans:0,
        numShowCard:numShowCard,
        gap:gap(),
    }
    const [slide, setSlide] = useState<Slide>(Slide)
    const handleClickNext= ()=>{
        setSlide(prev => {
            let startCard = prev.startCard + prev.numShowCard()
            const ratio = (prev.numTotalCard-prev.startCard)/prev.numShowCard ()
            if (ratio<2) {
                startCard = prev.numTotalCard - prev.numShowCard() + 1
            }
            const xTrans = -(startCard - 1) * (prev.widthCard()! + prev.gap)
            return { ...prev, startCard, xTrans }
        })
    }
    const handleClickPrev=()=>{
        setSlide(prev => {
            let startCard = prev.startCard - prev.numShowCard()
            const ratio = (startCard - 1) / prev.numShowCard()
            if (ratio < 1) {
                startCard = 1
            }
            const xTrans = -(startCard - 1) * (prev.widthCard()! + prev.gap)
            return { ...prev, startCard, xTrans }
        })
    }
    useLayoutEffect(() => {
        const handleResize = function () {
            const widthWin = window.innerWidth
            setSlide(prev => {
                let numShowCard = prev.numShowCard
                const curWidthCard = (ref.current?.offsetWidth! - (numShowCard() - 1) * gap()) / numShowCard()
                const xTrans = 0
                const next = { ...prev, startCard: 1, numShowCard, gap: gap(), widthCard: () => curWidthCard, widthShowSlide: ref.current?.offsetWidth, xTrans: xTrans }
                return next
            })
        }
        window.addEventListener('resize', handleResize)
        setSlide(prev => {
            const next = { ...slide, widthShowSlide: ref.current?.offsetWidth }
            return next
        })
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <section ref={ref} className=" md:mb-24 mb-6">
            <div className="pb-6 ">
                <span className=" text-[28px] sm:text-[32px] pb-[20px] md:pb-[24px] font-semibold text-slate-700">
                   Popular professional services 
                </span>
            </div>
            <div className="relative" >
                <div className="absolute top-1/2 left-[100%] -translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowButton dir={Dir.right} isShow={slide.startCard + slide.numShowCard() - 1 < slide.numTotalCard ? true : false}
                        handleClick={handleClickNext} />
                </div>
                <div className="absolute top-1/2  -translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowButton dir={Dir.left} isShow={slide.startCard > 1 ? true : false} handleClick={handleClickPrev} />
                </div>
                {
                    slide.widthTotal() ?
                        <ul className="flex transition-all duration-300 ease-in-out " style={{ gap: slide.gap, width: slide.widthTotal(), transform: `translateX(${slide.xTrans}px)` }} >
                            {
                                dataSlides.map((item, index) => {
                                    const indexShowCardStart = slide.startCard
                                    const indexShowCardEnd = slide.startCard + slide.numShowCard() - 1
                                    const isShowCard: boolean = (index + 1) >= indexShowCardStart && (index + 1) <= indexShowCardEnd ? true : false
                                    return (
                                        <li key={uniqid()} className=' ' style={{ visibility: `${isShowCard ? 'visible' : 'hidden'}` }}>
                                            <ServiceCard width={slide.widthCard() as number} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        : null
                }
            </div>
        </section>
    )
}

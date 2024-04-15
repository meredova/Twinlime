import './Slider.css';
import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";

const Slider = ({parentWidth}) => {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0)

    const slides = useMemo(() => [
        {url: '../../assets/slider/image-1.jpg', title: 'image-1', description: 'Новости о картинке 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam vero dicta facere deserunt praesentium unde saepe adipisci facilis, voluptas laborum veniam voluptatum officia? Consectetur minus est laboriosam deserunt adipisci?'},
        {url: '../../assets/slider/image-2.jpg', title: 'image-2', description: 'Новости о картинке 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam vero dicta facere deserunt praesentium unde saepe adipisci facilis, voluptas laborum veniam voluptatum officia? Consectetur minus est laboriosam deserunt adipisci?'},
        {url: '../../assets/slider/image-3.jpg', title: 'image-3', description: 'Новости о картинке 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam vero dicta facere deserunt praesentium unde saepe adipisci facilis, voluptas laborum veniam voluptatum officia? Consectetur minus est laboriosam deserunt adipisci?'},
        {url: '../../assets/slider/image-4.jpg', title: 'image-4', description: 'Новости о картинке 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam vero dicta facere deserunt praesentium unde saepe adipisci facilis, voluptas laborum veniam voluptatum officia? Consectetur minus est laboriosam deserunt adipisci?'},
        {url: '../../assets/slider/image-5.jpg', title: 'image-5', description: 'Новости о картинке 5 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam vero dicta facere deserunt praesentium unde saepe adipisci facilis, voluptas laborum veniam voluptatum officia? Consectetur minus est laboriosam deserunt adipisci?'},
    ], []);
    
    const getSlideStyles = (slideIndex) => ({
        ...getSlideStyles,
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: `${parentWidth}vw`,
    })

    const getSliderContainer = () => ({
        width: `${parentWidth * slides.length}vw`,
        transform: `translateX(${-(currentIndex * parentWidth)}vw)`
    })

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }, [currentIndex, slides])

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    useEffect(() => {
        if(timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            goToNext()
        }, 5000)
        return()=> clearTimeout(timerRef.current)
    }, [goToNext])


    const getSlidesContainerWithWidth = {
        overflow: 'hidden',
        height: '100%'
    }
    return (
        <div className="slider">
            <div className="arrow arrow_left" onClick={goToPrev}>&larr;</div>
            <div className="arrow arrow_right" onClick={goToNext}>&rarr;</div>
            <div style={getSlidesContainerWithWidth}>
                <div style={getSliderContainer()} className="slider__container">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex}className="slide" style={getSlideStyles(slideIndex)}>
                            <div className="slide__descr__wrapper">
                                <div className="slide__descr">{slide.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots__container">
                {slides.map((slide, slideIndex) => (
                    <div 
                        className={`dot ${currentIndex === slideIndex ? 'dotActive' : ''}`}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >&#11044;</div>
                ))}
            </div>
        </div>
    )
}

export default Slider;
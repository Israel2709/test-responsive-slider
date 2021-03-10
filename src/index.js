import React, { useEffect, useState, useRef } from 'react'
import Control from './Components/Control'
import Scene from './Components/Scene'
import styles from './index.scss'

export default function ReactResponsiveSlider(props) {

  const { timing, startingSlide, gallery, timingFunction, controls, width, height } = props
  const defaultGallery = [
    'https://picsum.photos/id/13/700/500',
    'https://picsum.photos/id/14/700/500',
    'https://picsum.photos/id/15/700/500',
    'https://picsum.photos/id/16/700/500',
    'https://picsum.photos/id/17/700/500',
    'https://picsum.photos/id/18/700/500'
  ]
  const sliderWrapper = useRef()
  const scenesWrapper = useRef()

  const [sliderGallery, setSliderGallery] = useState(gallery || defaultGallery)

  const [sliderWidth, setSliderWidth] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(startingSlide || 1)
  const [hasTransition, setHasTransition] = useState(false)

  const getSize = () => {
    console.log("getting size")
    setHasTransition(false)
    setSliderWidth(sliderWrapper.current.clientWidth)
  }

  const slideForward = () => {
    setHasTransition(true)
    setCurrentSlide(currentSlide + 1)
    console.log(currentSlide)
    currentSlide === sliderGallery.length &&
      setTimeout(() => {
        setHasTransition(false)
        setCurrentSlide(1)
      }, 1000)
  }

  const slideBackward = () => {
    setHasTransition(true)
    setCurrentSlide(currentSlide - 1)
    currentSlide === 1 &&
      setTimeout(() => {
        setHasTransition(false)
        setCurrentSlide(sliderGallery.length)
      }, 1000)
  }

  const addSlides = async () => {
    const request = await fetch('https://domestika-img-sources-default-rtdb.firebaseio.com/.json')
    const newSlides = await request.json()
    setSliderGallery([...sliderGallery, ...newSlides.pics])
  }

  useEffect(() => {
    getSize()
    window.addEventListener('resize', getSize)
    return () => {
      window.removeEventListener('resize', getSize)
    }
  }, [])

  return (
    <React.Fragment>
      <div 
        className={styles.sliderWrapper} 
        ref={sliderWrapper}
        style={{ 
          width: width || '100%', 
          height: height || '300px'
        }}
      >
        <div
          className={`${styles.scenesWrapper} ${hasTransition && styles.hasTransition}`}
          ref={scenesWrapper}
          style={{
            width: sliderWidth * (sliderGallery.length + 2),
            transform: `translate3d(-${currentSlide * sliderWidth}px, 0, 0)`,
            transitionDuration: hasTransition ? timing : 'unset',
            transitionTimingFunction: hasTransition ? timingFunction : 'linear'
          }}
        >
          <Scene width={sliderWidth} sceneSrc={sliderGallery[sliderGallery.length - 1]} />

          {
            sliderGallery.map((item, index) => <Scene
              key={index}
              width={sliderWidth}
              sceneSrc={item}
              lazy
            />
            )
          }
          <Scene width={sliderWidth} sceneSrc={sliderGallery[0]} />
        </div>
        {
          controls && (
            <React.Fragment>
              <Control type={"prev"} handler={slideBackward}/>
              <Control type={"next"} handler={slideForward}/>
            </React.Fragment>
          )
        }
        {
          currentSlide === sliderGallery.length && <Control type='add-slides' handler={addSlides} label={"Add more pics"} />
        }
      </div>
      </React.Fragment>
  )
}

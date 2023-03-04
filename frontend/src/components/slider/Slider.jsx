import React, { useState, useEffect } from 'react'
import './slider.scss'
import imageslider1 from '../../assets/images/sliderimage1.png'
import imageslider2 from '../../assets/images/sliderimage2.png'
import imageslider3 from '../../assets/images/sliderimage3.png'
import imageslider4 from '../../assets/images/sliderimage4.png'
import { Arrowleft } from '../../assets/icons/icons'
import { Arrowright } from '../../assets/icons/icons'
const SliderImages = [
  imageslider1,
  imageslider2,
  imageslider3,
  imageslider4
]

function slider() {
  const [slide, setslide] = useState(0);
  const [ismaxright, setismaxright] = useState(false);
  const [ismaxleft, setismaxleft] = useState(false);

  const checkismax=()=>{
    if(slide==SliderImages.length-1){
      setismaxright(true)
    }else{
      setismaxright(false)
    }
    if(slide==0){
      setismaxleft(true)
    }else{
      setismaxleft(false)
    }
  }
  useEffect(() => {
    checkismax()
    const timer = setTimeout(() => {
      if (slide <= SliderImages.length - 2) {
        setslide(slide + 1)
      } else {
        setslide(0)
      }
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [slide])


  const arrowleft = ()=>{
    if(slide > 0){
      setslide(slide-1)
    }
  }
const arrowright = ()=>{
  if(slide<= SliderImages.length -2){
    setslide(slide+1)
  }

}
  return (
    <div className='slide'>
    <span  onClick={()=> arrowright()} className={`arrowright ${ismaxright ? 'max':''}`}><Arrowright /></span>
    <div className='sliderimages'>
      <img src={SliderImages[slide]} />
    </div>
    <span onClick={()=>arrowleft()} className={`arrowleft  ${ismaxleft ? 'max':''}`}><Arrowleft /></span>
  </div>
  )
}

export default slider
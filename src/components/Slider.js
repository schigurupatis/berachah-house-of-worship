import { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";


const Slider = ({slides}) => {

    console.log("Slides Length is:", slides.length)

    const [current, setCurrent] = useState(0);  

    console.log("Slide Current Value is:", current)


    const previousSlide = () => {
        if(current === 0) setCurrent(slides.length - 1)
        else setCurrent(current - 1);
    }

    const nextSlide = () => {
        if(current === slides.length - 1) setCurrent(0)
        else setCurrent(current + 1);
        //setCurrent((current + 1) % slides.length);
    }

    useEffect(()=>{
        const timer = setTimeout(()=> {
            nextSlide()
        }, 5000)   
        return () => {
            clearTimeout(timer)
        }
    }, [current])

  return (
    <div className='overflow-hidden relative w-screen md:h-[650px] aspect-ratio-square'>
        <div 
            className='flex transition ease-out duration-40 w-screen'
            style={{
                transform: `translateX(-${current * 100}%)`,
            }}
        >
            {
                slides.map((slide, i) => {
                    // return <img src={slide.url} key={slide.name} alt={slide.name} className='w-screen' />
                    return <img src={slide.url} key={slide.name} alt={slide.name} className='object-cover'  />
                })
            }
        </div>
        <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-2xl'>
            <button onClick={previousSlide}>
                <FaArrowCircleLeft />
            </button>
            <button onClick={nextSlide}>
                <FaArrowCircleRight />
            </button>
        </div>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {
                slides.map((s, i) => {
                    return <div 
                                onClick={()=>{
                                    setCurrent(i)
                                }}
                                key={"circle" + i} 
                                className={`rounded-full w-3 h-3 cursor-pointer ${
                                    i === current ? "bg-white" : "bg-gray-400"
                                }`}
                            ></div>
                })
            }
        </div>
    </div>
  )

}

export default Slider
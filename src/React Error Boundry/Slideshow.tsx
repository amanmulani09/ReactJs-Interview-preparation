import { useState } from "react"
import { Slide } from "./Slide"
import './example.css'
type slideShow = {
    image_url:string,
    caption:string
}

const Slideshow = ({images}:{images:slideShow[]})=>{
    const [active,setActive] = useState(0)

    const onLeft = ()=>{
        if(active === 0){
            setActive(images.length-1)
        }else{
            setActive(prev => prev-1)
        }
    }

    const onRight = ()=>{
            if(active === images.length-1){
                setActive(0)
            }else{
                setActive(prev => prev+1)
            }
    }

    return(
        <div className="slideshow">
            {
                images.map((img,i) =>(
                    <Slide image={img} active={active === i} key={img.caption} />
                ))
            }
            <div className="leftRightNav">
                <p className="left nav" onClick={onLeft}>&lt;</p>
                <p className="right nav" onClick={onRight}>&gt;</p>
            </div>
            <div className="navigators">
                {images.map((item,index) =>(
                    <div className={`${index === active ? 'active circle':'circle'}`} onClick={()=> setActive(index)}>  </div>
                ))}
            </div>


        </div>
    )

}

export default Slideshow
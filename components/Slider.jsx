import { Carousel } from 'react-bootstrap'
import SliderItem from './SliderItem'

export default function Slider({products}) {
    return (
        <div className="slider">
            <div className="slider__wrapper">
                <div className="slider__header">Preview: Key pieces</div>
                <button className="slider__button">See all</button>
            </div> 
            <div className="wrapp">
                <Carousel>
                {
                    products && 
                    products.map((item, i) => (
                       <Carousel.Item key={i}>
                           <SliderItem item={item}/>
                         </Carousel.Item> 
                    ))
                } 
                </Carousel>
            </div>
            <div className="line"></div>
        </div>
    )
} 
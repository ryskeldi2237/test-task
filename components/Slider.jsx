import SliderItem from './SliderItem'
export default function Slider({products}) {
    // console.log(products)
    return (
        <div className="slider">
            <div className="slider__wrapper">
                <div className="slider__header">Preview: Key pieces</div>
                <button className="slider__button">See all</button>
                <button className="slider-btn"><img src="img/prev.svg" alt="button"/></button>
                <button className="slider-btn next"><img src="img/next.svg" alt="button"/></button>
            </div> 
            <div className="row">
               {
                   products && 
                   products.map((item, i) => (
                    <SliderItem item={item} key={i}/>
                   ))
               }  
            </div>
            <div className="line"></div>
        </div>
    )
}


  
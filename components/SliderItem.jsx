export default function SliderItem({item}) {
    return (
        <div className="slider__item">
            <div className="slider__title">{item.title}</div>
            <img src={item.imageUrl} alt="item"/>
            <div className="slider__descr">{item.descr}</div>
        </div>
    )
}

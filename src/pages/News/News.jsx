import Slider from "../../components/Slider/Slider";
import "./News.css";


const Carousel = () => {

    return (
        <section className="news">
            <div className="news__title">Новости</div>
            <Slider parentWidth = {90}/>
        </section>
    );
}

export default Carousel;
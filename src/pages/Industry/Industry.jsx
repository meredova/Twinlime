import './Industry.css';
import ex from '../../assets/industry/1.jpg';
import food from '../../assets/industry/2.jpg';
import pack from '../../assets/industry/3.jpg';
import chem from '../../assets/industry/4.jpeg'

const Industry = () => {

    return (
        <section className="industry">
            <div className="industry__title">Продукция</div>
            <div class="grid">
                <figure class="effect-sadie">
                    <img src={ex} alt="img01"/>
                    <figcaption>
                        <h2>Сырье для пищевой и напиточной промышленности</h2>
                        <ul>
                            <li>Напиточная промышленность</li>
                            <li>Молочная промышленность</li>
                            <li>Соусы и заправки</li>
                            <li>Мясная и рыбная промышленность</li>
                            <li>Кондитерские изделия</li>
                        </ul>
                    </figcaption>			
                </figure>
                <figure class="effect-sadie">
                    <img src={food} alt="img02"/>
                    <figcaption>
                        <h2>Готовые продукты питания и напитков</h2>
                        <ul>
                            <li>Заполнить</li>
                            <li>Заполнить</li>
                            <li>Заполнить</li>
                        </ul>
                    </figcaption>			
                </figure>
                <figure class="effect-sadie">
                    <img src={pack} alt="img02"/>
                    <figcaption>
                        <h2>Упаковочная промышленность</h2>
                        <ul>
                            <li>Заполнить</li>
                            <li>Заполнить</li>
                            <li>Заполнить</li>
                        </ul>
                    </figcaption>			
                </figure>
                <figure class="effect-sadie">
                    <img src={chem} alt="img02"/>
                    <figcaption>
                        <h2>Технологическая промышленность</h2>
                        <ul>
                            <li>Заполнить</li>
                            <li>Заполнить</li>
                            <li>Заполнить</li>
                        </ul>
                    </figcaption>			
                </figure>
            </div>
        </section>
    )
}

export default Industry;
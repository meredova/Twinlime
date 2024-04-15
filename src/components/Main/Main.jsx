import Carousel from "../../pages/News/News";
import Home from "../../pages/Home/Home";
import Industry from "../../pages/Industry/Industry";
import Partners from "../../pages/Partners/Partners";
import Services from "../../pages/Services/Services";
import "./Main.css";
import Contacts from "../../pages/Contacts/Contacts";

const Main = () => {

    return (
        <main className="main">
            <Home/>
            <Carousel/>
            <Industry/>
            <Services/>
            <Partners/>
            <Contacts/>
        </main>
    )
}

export default Main;
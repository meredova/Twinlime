import './Navbar.css';
import { menuItemsData } from '../../menuItemsData';
import MenuItems from './MenuItems';

const Navbar = () => {
    const depthLevel = 0;
    return (
        <nav className="nav">
            <ul className='nav__list'>
                {menuItemsData.map((menu, index) => {
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>
                })}
            </ul>
        </nav>
    )
}

export default Navbar;
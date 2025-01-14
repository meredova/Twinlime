import MenuItems from './MenuItems';
import './Navbar.css';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? 'dropdown__submenu' : '';
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
            {submenus.map((submenu, index) => (
                <MenuItems 
                    items={submenu} 
                    key={index}
                    depthLevel={depthLevel}
                />
            ))}
        </ul>
    )
}

export default Dropdown;
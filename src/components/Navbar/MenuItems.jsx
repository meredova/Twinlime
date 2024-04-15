import { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown';
import './Navbar.css';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    }

    const onMouseEnter = () => {
        setDropdown(true)
    }
    const onMouseLeave = () => {
        setDropdown(false)
    }
    
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown])

    return (
        <li 
            className='nav__item' 
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
        >
            {items.submenu ? (
                <>
                    <div
                        type='button' 
                        aria-haspopup='menu'
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className='down'/>}
                    </div>
                    <Dropdown 
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <a href="{items.url}">{items.title}</a>
            )}
        </li>
    )
}

export default MenuItems;
import {useState} from "react";
import css from './NavMenu.module.css'

const NavMenu = () => {
    const [city, setCity] = useState('Kyiv');

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={"nav-item dropdown fw-semibold"}>
                <a className="nav-link dropdown-toggle text-danger-emphasis" href="#" role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false">
                    {city}
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className={"nav-link "+css.menuLink} href="#">Restaurants</a>
            </li>
            <li className="nav-item">
                <a className={"nav-link "+css.menuLink} href="#">Delivery</a>
            </li>
            <li className="nav-item">
                <a className={"nav-link "+css.menuLink} href="#">Events</a>
            </li>
            <li className="nav-item">
                <a className={"nav-link "+css.menuLink} href="#">Promotions</a>
            </li>
            <li className="nav-item">
                <a className={"nav-link "+css.menuLink} href="#">Recipe of the day</a>
            </li>
            <li className="nav-item">
                <a className={"nav-link "+css.menuLink} href="#">Where to go in {city}</a>
            </li>
        </ul>
    );
};

export {NavMenu};
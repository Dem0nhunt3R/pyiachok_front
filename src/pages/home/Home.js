import {useState} from "react";
import {Link} from "react-router-dom";
import css from './Home.module.css'

const Home = () => {
    const [city1, setCity1] = useState('Kyiv');
    const types = ['Cafe', 'Bar', 'Restaurant', 'Pub', 'Pizzeria', 'Coffee-shop', 'Confectionery', 'Online-restaurant',
        'Anti-cafe', 'Burger-restaurant', 'Country-restaurant', 'Hookah', 'Food-market', 'Food-zone', 'Fast-food', 'Food-truck',
        'Night-club', 'Country-club', 'Catering', 'Event-location', 'Bake'
    ];

    return (
        <div className={'w-100'}>
            <div className='d-flex flex-column w-75 mx-auto mt-5'>
                <h1 className='text-center'>Find the best bars, restaurants, cafes in {city} city</h1>

                <div className={'input-group'}>
                    <input type="text"
                           className={'form-control'}
                           placeholder='Search for the best place here'
                           aria-label="Search for places with button"
                    />
                    <button className='btn btn-outline-secondary' type='button'>Search</button>
                </div>

                <div className={'mt-4'}>
                    <ul className={'nav justify-content-center'}>
                        {types.map((type, i) =>
                            <li className={'nav-item border border-1 border-secondary rounded-5  mx-1 my-1 ' + css.hover}
                                key={i}>
                                <Link to='#'
                                      className={'nav-link text-dark fw-bolder ' + css.hover}>{type}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        </div>
    );

};

export {Home};
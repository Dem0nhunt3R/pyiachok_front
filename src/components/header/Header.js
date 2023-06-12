import {useState} from "react";
import {ImSearch} from "react-icons/im";
import {NavMenu} from "../navMenu/NavMenu";
import {SignUp} from "../signUp/SignUp";

const Header = () => {
    const [access, setAccess] = useState(localStorage.getItem('access') || null);
    const [isSignUp, setIsSignUp] = useState('false');

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className={'navbar-brand text-danger-emphasis fw-bold fst-italic'} href="/home">Piyachok</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavMenu/>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <button data-bs-toggle='modal' data-bs-target='#modal-auth'
                                    className={'btn btn-danger rounded-5'}>
                                {isSignUp ? 'Sign up' : 'Sign in'}
                            </button>
                            <div className="modal fade" id="modal-auth" tabIndex="-1"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <SignUp/>
                            </div>

                            <li className="nav-item">
                                <a className={'nav-link text-danger-emphasis'} href="#">
                                    <ImSearch/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export {Header};
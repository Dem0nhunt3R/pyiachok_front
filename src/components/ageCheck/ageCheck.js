import css from './ageCheck.module.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ageConfirmActions} from "../../redux";


const AgeCheck = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className={css.overlay} >
            <div className={css.modal} id={'modal'}>
                <h3>Please confirm, that you are 18 years or older</h3>
                <div className={'d-flex justify-content-around w-50 m-auto mt-5'}>
                    <button type={'button'} className={'btn btn-success w-25'} onClick={() => {
                        const modal = document.getElementById('modal');
                        localStorage.setItem('ageConfirm', 'true');
                        dispatch(ageConfirmActions.setIsAdult(true));
                        modal.classList.add('d-none');
                    }}>
                        yes
                    </button>
                    <button type={'button'} className={'btn btn-danger w-25'} onClick={() => {
                        const modal = document.getElementById('modal');
                        modal.classList.add('d-none');
                        navigate('/>18');
                    }}>
                        no
                    </button>
                </div>
            </div>
        </div>
    );
};

export {AgeCheck};
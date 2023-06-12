import {FaRegCopyright} from "react-icons/fa";
import {Link} from "react-router-dom";
import {TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube} from "react-icons/ti";

const Footer = () => {
    const date = new Date();

    return (
        <div className={'bg-dark d-flex'} style={{height: '3rem'}}>
            <div className={'text-light w-50 d-flex align-items-center justify-content-evenly'}>
                <div>
                    <FaRegCopyright/>
                    <span className={'ms-2'}>{date.getFullYear()}. Drinker, Inc.</span>
                </div>
                <Link className={'text-light nav-link'} to={'#'}>Terms</Link>
                <Link className={'text-light nav-link'} to={'#'}>Privacy</Link>
            </div>
            <div className={'w-50 d-flex align-items-center justify-content-end gap-5 me-5'}>
                <Link className={'text-light'} to={'#'}><TiSocialInstagram size={'1.5rem'}/></Link>
                <Link className={'text-light'} to={'#'}><TiSocialTwitter size={'1.5rem'}/></Link>
                <Link className={'text-light'} to={'#'}><TiSocialFacebook size={'1.5rem'}/></Link>
                <Link className={'text-light'} to={'#'}><TiSocialYoutube size={'1.5rem'}/></Link>
            </div>
        </div>
    );
};

export {Footer};
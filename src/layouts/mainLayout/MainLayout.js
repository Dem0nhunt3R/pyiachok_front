import {Outlet} from "react-router-dom";
import {Footer, Header} from "../../components";

const MainLayout = () => {
    return (
        <div className={'d-flex flex-column min-vh-100'}>
            <Header/>
            <hr/>
            <div className={'min-vh-100'}><Outlet/></div>
            <Footer/>
        </div>
    )
}

export {MainLayout};
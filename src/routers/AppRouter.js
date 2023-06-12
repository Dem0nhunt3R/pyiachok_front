import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "../layouts/mainLayout/MainLayout";
import {AgeCheck} from "../components";
import {useSelector} from "react-redux";
import {Home, LessThan18, Login, News, NotFound, Places, SignUp} from "../pages";

const AppRouter = () => {
    const {isAdult} = useSelector(state => state.ageConfirmReducer);

    return (
        isAdult
            ?
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'places'} element={<Places/>}/>
                    <Route path={'news'} element={<News/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'signup'} element={<SignUp/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
            :
            <Routes>
                <Route path={'>18'} element={<LessThan18/>}/>
                <Route path={''} element={<AgeCheck/>}/>
                <Route path={'*'} element={<Navigate to={''}/>}/>
            </Routes>

    );
};


export {AppRouter};
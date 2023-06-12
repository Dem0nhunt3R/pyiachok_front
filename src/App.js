import {AppRouter} from "./routers/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./redux";

function App() {
    return (
        <Provider store={setupStore()}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

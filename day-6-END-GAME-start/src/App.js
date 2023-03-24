import Router from "./routes/Router"
import Loader from "./components/shared/Loader";
import Header from "./components/shared/Header";
import {useSelector} from "react-redux";
import ErrorComponent from "./components/ErrorComponent";

function App() {
    const {isLoading} = useSelector(state => state.loader)
   const isError  = useSelector(state => state.error)
    return (
        <>
            <Header/>
            <Router/>
            {isLoading && <Loader/>}

        </>
    );
}

export default App;

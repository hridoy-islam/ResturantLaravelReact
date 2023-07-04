import { RouterProvider } from "react-router-dom";
import MainContext from "./Contexts/MainContext";
import router from "./Router/Router";
function App() {

    return (
        <>
            <MainContext>
                <RouterProvider router={router}></RouterProvider>
            </MainContext>
        </>
    )
}

export default App

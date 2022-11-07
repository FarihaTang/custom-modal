import { Suspense } from "react";
import { Routes, Link, Route, useRoutes } from "react-router-dom";
import "./App.css";
import MyModal from "./component/MyModal";
import User from "./component/User";
import Error from "./component/Error";
import logo from "./logo.svg";
import TodoList from "./component/TodoList";
import Hoc from "./component/Hoc";

// const LazyLoding = React.lazy(async () => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return import("./component/LazyLoding");
// });
function App() {
    const element = useRoutes([
        {
            path: "/",
            element: <p>Welcom to my react!</p>,
        },
        {
            path: "/modal",
            element: <MyModal />,
        },
        {
            path: "/user",
            element: (
                <Suspense fallback={<img src={logo} alt="" />}>
                    {/* <LazyLoding></LazyLoding> */}
                    <User />
                </Suspense>
            ),
        },
        {
            path: "*",
            element: <Error />,
        },
    ]);
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/modal">Modal</Link>
                <Link to="/user">User</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/hoc">HOC</Link>
            </nav>
            {/* {element} */}
            <Routes>
                <Route path="/" element={<p>Welcom to my react!</p>}></Route>
                <Route path="/modal" element={<MyModal />}></Route>
                <Route
                    path="/user"
                    element={
                        <Suspense fallback={<img src={logo} alt="" />}>
                            {/* <LazyLoding></LazyLoding> */}
                            <User />
                        </Suspense>
                    }
                ></Route>
                <Route path="/todo" element={<TodoList />}></Route>
                <Route path="/hoc" element={<Hoc />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </>
    );
}

export default App;

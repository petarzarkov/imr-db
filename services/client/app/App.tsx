import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@components";
import { NotFound } from "@screens";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;

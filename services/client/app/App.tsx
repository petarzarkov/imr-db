import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@components";
import { NotFound, Projects, Skills } from "@screens";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Projects />} />
                <Route path="skills" element={<Skills />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;

import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import NoResponse from "../pages/errors/NoResponse";
import PageNotFound from "../pages/errors/PageNotFound";

const Index = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home/>}>
                    <Route path="/" element={<Navigate replace to={"home"}/>}></Route>
                    <Route path="client" element={<Home/>}>
                        {/*<Route path="/client" element={<Navigate replace to={"error"}/>}>*/}
                        {/*</Route>*/}
                    </Route>
                    <Route path="404" element={<NoResponse/>}/>
                    <Route path="home" element={<Home/>}/>
                </Route>
                <Route path="*" element={<PageNotFound/>}></Route>
            </Route>
        </Routes>
    );
};

export default Index;
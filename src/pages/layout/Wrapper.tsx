import React, {PropsWithChildren} from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div className="landing">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Wrapper;
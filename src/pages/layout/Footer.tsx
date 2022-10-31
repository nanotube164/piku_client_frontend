import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="container">
            <footer className="text-muted py-5">
                <div className="container">
                    <button className="float-end mb-1">
                        <p className="float-end mb-1">
                            <a href="#"><FontAwesomeIcon icon={faChevronUp as IconProp}/></a>
                            {/*<FontAwesomeIcon icon="fa-solid fa-chevron-up" />*/}
                            {/*<FontAwesomeIcon icon={faSearch as IconProp} />*/}
                            {/*<FontAwesomeIcon icon={faChevronUp as IconProp} />*/}
                        </p>
                    </button>
                    <p className="mb-1">Piku Graphy  is &copy; nanotube164 since 2022</p>
                    {/*<p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a*/}
                    {/*    href="/docs/5.2/getting-started/introduction/">getting started guide</a>.</p>*/}
                </div>
            </footer>
        </div>
    );
};

export default Footer;
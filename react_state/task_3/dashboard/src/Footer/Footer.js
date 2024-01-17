import React, { useContext } from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';
import AppContext from '../App/AppContext';

function Footer(props) {
    const { user } = useContext(AppContext);
    const isLoggedIn = user.isLoggedIn;

    const copyright = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;

    return (
        <div className="section-footer" data-testid="Footer">
            <p>{copyright}</p>
            {isLoggedIn && (
                <p>
                    <a href="/contact">Contact us</a>
                </p>
            )}
        </div>
    );
}

export default Footer;

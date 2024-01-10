import React from 'react'
import { getFooterCopy, getFullYear } from '../utils';
import './Footer.css';


function Footer(props) {
    const copyright = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`
    console.log(copyright);
    return (
        <div className="section-footer" data-testid="Footer">
            <p>{copyright}</p>
        </div>
    )
}

export default Footer
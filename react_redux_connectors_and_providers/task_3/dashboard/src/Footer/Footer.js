import React from 'react';
import { connect } from 'react-redux';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';

function Footer(props) {
    const { user } = props;
    const copyright = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;

    return (
        <div className="section-footer" data-testid="Footer">
            <p>{copyright}</p>
            {user.isLoggedIn && <p>Welcome, {user.email}</p>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.ui.user,
    };
};

export default connect(mapStateToProps)(Footer);

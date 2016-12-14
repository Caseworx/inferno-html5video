import Inferno from 'inferno';

import Icon from './../icon/Icon';

const Header = () => {
    return (
        <div className="header">
            <a className="header__github-link" href="https://github.com/Caseworx/inferno-html5video">
                <Icon name="github-circled-alt2" />
                View on GitHub
            </a>
        </div>
    );
};

export default Header;

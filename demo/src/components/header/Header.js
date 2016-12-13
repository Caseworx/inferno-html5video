import Inferno from 'inferno';
import Component from 'inferno-component';

import Icon from './../icon/Icon';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a className="header__github-link" href="https://github.com/mderrick/react-html5video">
                    <Icon name="github-circled-alt2" />
                    View on GitHub
                </a>
            </div>
        );
    }
};

export default Header;

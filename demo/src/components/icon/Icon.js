/*eslint-disable */

import Inferno from 'inferno';
import Component from 'inferno-component';

class Icon extends Component {
    constructor () {
        super();
        this.props = {
            name: 'github-circled-alt2'
        }
    }

    render() {
        return (
            <span className={'icon icon--' + this.props.name}></span>
        );
    }
};

export default Icon;

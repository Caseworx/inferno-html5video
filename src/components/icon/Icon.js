/* eslint-disable */

import Inferno from 'inferno';
import Component from 'inferno-component'

class Icon extends Component {
    constructor() {
        super();
        this.props = {
            name: 'play-1'
        };
    }

    render() {
        return (
            <span className={'video-icon video-icon--' + this.props.name}></span>
        );
    }
};

export default Icon;

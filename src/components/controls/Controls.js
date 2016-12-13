import Inferno from 'inferno';
import Component from 'inferno-component'
import createElement from 'inferno-create-element';
import update from 'immutability-helper'

import Play from './play/Play';
import Seek from './seek/Seek';
import Mute from './mute/Mute';
import Time from './time/Time';
import Fullscreen from './fullscreen/Fullscreen';

class Controls extends Component {

    constructor(props) {
        super(props);
        this.props = update(this.props, {
            $merge: {
                children: [
                    <Play />,
                    <Seek />,
                    <Time />,
                    <Mute />,
                    <Fullscreen />
                ]
            }
        });
    }

    /**
     * Returns children components with props
     * from the parent Video component. Needed
     * for when custom React components are used.
     * @return {Array.<ReactElement>} An array of components.
     */
    renderChildren() {
        return (this.props.children).map( child => {
            console.log(child)
            return createElement(child, {...this.props});
        });
    }

    render() {
        return (
            !this.props.error ? (
                <div className="video-controls video__controls">
                    {this.renderChildren()}
                </div>
            ) : null
        );
    }
};

export default Controls;

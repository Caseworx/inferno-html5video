import Inferno from 'inferno';
import Component from 'inferno-component'
// import InfernoDOM from 'inferno-dom';
import update from 'immutability-helper'

import Play from './play/Play';
import Seek from './seek/Seek';
import Mute from './mute/Mute';
import Time from './time/Time';
import Fullscreen from './fullscreen/Fullscreen';

class Controls extends Component {

    updateFullscreen(props, nextProps) {
        return props.fullscreen !== nextProps.fullscreen
    }

    constructor(props) {
        super(props);

        this.state = {
          children: [
            <Play />,
            <Seek />,
            <Time />,
            <Mute />,
            <Fullscreen onComponentShouldUpdate={ this.updateFullscreen } />,
          ]
        };
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.children) {
          this.setState({
            ...this.state,
            children: nextProps.children,
          })
        }
    }

    render() {
        const childControls = this.state.children.map( child => {
            return Inferno.cloneVNode(child, this.props);
        });
        return (
            !this.props.error ? (
                <div className="video-controls video__controls">
                    { childControls }
                </div>
            ) : null
        );
    }
};

export default Controls;

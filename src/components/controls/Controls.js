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

    constructor(props) {
        super(props);

        this.state = {
          children: [
            <Play />,
            <Seek />,
            <Time />,
            <Mute />,
            <Fullscreen />,
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

    /**
     * Returns children components with props
     * from the parent Video component. Needed
     * for when custom React components are used.
     * @return {Array.<ReactElement>} An array of components.
     */
    renderChildren = () => {

      return (this.state.children).map( child => {
          return Inferno.cloneVNode(child, this.props);
      });

    };

    render() {

        return (
            !this.props.error ? (
                <div className="video-controls video__controls">
                    { this.renderChildren() }
                </div>
            ) : null
        );
    }
};

export default Controls;

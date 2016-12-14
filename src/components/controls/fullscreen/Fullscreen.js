import Inferno from 'inferno';
import Component from 'inferno-component'
import Icon from './../../icon/Icon';

const Fullscreen = props => {

    return (
        <button
            onClick={props.fullscreen}
            className="video-fullscreen video__control"
            aria-label={props.copyKeys.fullscreen}>
            <Icon name="resize-full" />
        </button>
    );
};

export default Fullscreen;

import Inferno from 'inferno';
import Component from 'inferno-component'
import Icon from './../../icon/Icon';

const Play = props => {
    return (
        <button
            className="video-play video__control"
            onClick={props.togglePlay}
            aria-label={props.paused
                    ? props.copyKeys.play : props.copyKeys.pause}>
            {props.paused ? <Icon name="play-1" /> : <Icon name="pause-1" />}
        </button>
    );
};

export default Play;

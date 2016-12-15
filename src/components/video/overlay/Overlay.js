import Inferno from 'inferno';
import Component from 'inferno-component'
import Icon from './../../icon/Icon';
import Spinner from './../../spinner/Spinner';

const Overlay = props => {
    let content;
    if (props.error) {
        content = (
            <div className="video-overlay__error">
                <p className="video-overlay__error-text">{props.copyKeys.sourceError}</p>
            </div>
        );
    } else if (props.loading) {
        content = (
            <div className="video-overlay__loader">
                <Spinner />
            </div>
        );
    } else {
        content = (
            <div className="video-overlay__play" onClick={props.togglePlay}>
                {props.paused ? <Icon name="play-1" /> : ''}
            </div>
        );
    }
    return (
        <div className="video-overlay">
            { content }
        </div>
    );
};

export default Overlay;

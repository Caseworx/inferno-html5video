import Inferno from 'inferno';
import Component from 'inferno-component';
import Icon from './../../icon/Icon';
import ProgressBar from './../../progressbar/ProgressBar';

class Mute extends Component {

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.muted !== nextProps.muted ||
               this.props.toggleMute !== nextProps.toggleMute ||
               this.props.volume !== nextProps.volume ||
               this.props.setVolume !== nextProps.setVolume ||
               this.props.unmute !== nextProps.unmute;
    }

    /**
     * Calculates the seek time based on click position and element offset.
     * @param  {object} e Event object
     * @return {undefined}
     */
    changeVolume = (e) => {
        console.log(e);
        this.props.setVolume(e.target.value / 100, true);
        this.props.unmute();
    };

    toggleMute = () => {
        // If we volume has been dragged to 0, assume it is in
        // a muted state and then toggle to full volume.
        if (this.props.volume <= 0) {
            this.props.setVolume(1);
        } else {
            this.props.toggleMute();
        }
    };

    render() {
        return (
            <div className="video-mute video__control" >
                <button
                    className="video-mute__inner"
                    onClick={this.toggleMute}
                    aria-label={this.props.muted || this.props.volume <= 0
                        ? this.props.copyKeys.unmute : this.props.copyKeys.mute}>
                    {this.props.muted || this.props.volume <= 0
                        ? <Icon name="volume-off" />
                        : <Icon name="volume-up" />}
                </button>
                <div className="video-mute__volume">
                    <div className="video-mute__track">
                        <ProgressBar
                            orientation="vertical"
                            onChange={this.changeVolume}
                            progress={this.props.muted
                                ? 0
                                : this.props.volume * 100}
                            />
                    </div>
                </div>
            </div>
        );
    }
};

export default Mute;

import Inferno from 'inferno';
import Component from 'inferno-component'
import Icon from './../../icon/Icon';

class Play extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.paused !== nextProps.paused ||
               this.props.togglePlay !== nextProps.togglePlay;
    }

    render() {
        return (
            <button
                className="video-play video__control"
                onClick={this.props.togglePlay}
                aria-label={this.props.paused
                        ? this.props.copyKeys.play : this.props.copyKeys.pause}>
                {this.props.paused ? <Icon name="play-1" /> : <Icon name="pause-1" />}
            </button>
        );
    }
};

export default Play;

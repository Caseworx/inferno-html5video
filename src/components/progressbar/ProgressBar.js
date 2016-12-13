import Inferno from 'inferno';
import Component from 'inferno-component'

class ProgressBar extends Component {

    constructor() {
        super();
        this.props = {
            orientation: 'horizontal',
            step: 0.1,
            progress: 0,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur
        };
    }

    componentDidMount() {
        // 'orient' is not supported by Inferno but
        // is required for Firefox. Setting manually.
        // https://github.com/facebook/react/issues/2453
        this._input.setAttribute('orient', this.props.orientation);
    }

    onChange() {
        // Placeholder
    }

    onFocus() {
        // Placeholder
    }

    onBlur() {
        // Placeholder
    }

    render() {
        return (
            <div className={'video-progress-bar ' + (this.props.orientation === 'horizontal'
                ? 'video-progress-bar--horizontal' : 'video-progress-bar--vertical')}>
                <div className="video-progress-bar__fill" style={{
                    [this.props.orientation === 'horizontal' ? 'width' : 'height']: this.props.progress + '%'
                }} />
                <input className="video-progress-bar__input"
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                    ref={(el) => this._input = el }
                    onChange={this.props.onChange}
                    type="range"
                    min="0"
                    max="100"
                    value={this.props.progress}
                    step={this.props.step} />
            </div>
        );
    }
};

export default ProgressBar;

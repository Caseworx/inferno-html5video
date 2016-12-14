import Inferno from 'Inferno';
import Component from 'inferno-component'
import update from 'immutability-helper'
class Button extends Component {


    constructor (props) {
        super(props);
        this.props = update({
                active: false,
                onClick: this.onClick,
                text: 'A button'
            }, {
            $merge : props
        });
    }

    onClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <button type="button" className={'button ' + (this.props.active ? 'button--active' : '')} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }

};

export default Button;

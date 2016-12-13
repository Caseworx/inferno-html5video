import Inferno from 'Inferno';
import Component from 'inferno-component'

class Button extends Component {


    constructor () {
        super();
        this.props = {
            active: false,
            onClick: this.onClick,
            text: 'A button'
        }
    }

    onClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <button className={'button ' + (this.props.active ? 'button--active' : '')} onClick={this.props.onClick} href="#">
                {this.props.children}
            </button>
        );
    }

};

export default Button;
